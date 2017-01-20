import firebase from 'firebase';

try {
    //Initialize Firebase
    var config = {
        apiKey: "AIzaSyBX43XxDp9Gkku4QZnfdH-9YTD6f4IjPao",
        authDomain: "timtodoapp.firebaseapp.com",
        databaseURL: "https://timtodoapp.firebaseio.com",
        storageBucket: "timtodoapp.appspot.com",
        messagingSenderId: "722800151438"
    };
    firebase.initializeApp(config);

} catch (e) {
    console.log(e);
}


export var firebaseRef = firebase.database().ref();
export default firebase;