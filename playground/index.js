import firebase from 'firebase'


// Initialize Firebase
var config = {
    apiKey: "AIzaSyBX43XxDp9Gkku4QZnfdH-9YTD6f4IjPao",
    authDomain: "timtodoapp.firebaseapp.com",
    databaseURL: "https://timtodoapp.firebaseio.com",
    storageBucket: "timtodoapp.appspot.com",
    messagingSenderId: "722800151438"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    appName: "Todo App",
    isRunning: true,
    user: {
        name: " Timmaaayy",
        age: 26
    },
    todos: {

    }
}).then(() => {
    //success
}, (e) => {
    //error
});

// firebaseRef.child('user').set({
//     name: 'MIKEEEYY'
// });

firebaseRef.child('user').update({
    name: 'MIKEEEYY'
});

firebaseRef.update({
    isRunning: false,
    'app/name': 'TODO APPP SHOORR',
    'app/version': '1.0.0'
}).then(() => {
    //success
}, (e) => {
    //error
});

//firebaseRef.child('app/version').remove();

// firebaseRef.child('app').update({
//     name: null,
//     version: '1.2.0'
// });

firebaseRef.child('user').once('value').then((snapshot) => {
    //success
    console.log('got entire database', snapshot.val());
}, (e) => {
    //error
    console.log('unable to fetch value', e)
});

firebaseRef.on('value', (snapshot) => {
    console.log('Got value', snapshot.val())
});

firebaseRef.off();


var notesRef = firebaseRef.child('notes');
var newNotesRef = notesRef.push();
newNotesRef.set({
    text: 'getting it'
});
console.log('note id', newNotesRef.key);