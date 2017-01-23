import firebase, {firebaseRef, githubProvider} from 'app/firebase/';
import moment from 'moment';

export var setSearchText = (searchText) => {
    return{
        type:'SET_SEARCH_TEXT',
        searchText
    }
};

export var updateShowCompleted = () => {
    return{
        type:'UPDATE_SHOW_COMPLETED',
    }
};


export var addTodo = (todo) => {
    return{
        type:'ADD_TODO',
        todo
    }
};

export var startAddTodo = (text) => {
    return (dispatch, getState) => {
        var todo = { 
                    text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: null
                    };
        var uid = getState().auth.uid;
        var todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);
        
        return todoRef.then(()=>{
            dispatch(addTodo({
                ...todo,
                id:todoRef.key
            }))
        })
    };
};

export var addTodos = (todos) => {
    return{
        type: 'ADD_TODOS',
        todos
    }
}

export var startAddTodos = () => {
    return(dispatch, getState) => {
        var uid = getState().auth.uid;
        var todoRef = firebaseRef.child(`users/${uid}/todos`);

        return todoRef.once('value').then((snapshot) => {

            var todos = snapshot.val() || {};
            var displayTodos = Object.keys(todos).map((key) =>{
                var todo = {
                    id: key,
                    ...snapshot.val()[key]
                }
                return todo;
            });
            
            dispatch(addTodos(displayTodos));          
        });
     
    }       
}

export var updateTodo = (id, updates) => {
    return {
        type: 'UPDATE_TODO',
        id,
        updates
    }
}

export var startUpdateTodo = (id, completed) => {
    return(dispatch, getState) => {    
        var uid = getState().auth.uid;
        var todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
        var updates = {
            completed,
            completedAt: completed ? moment().unix() : null
        };
        
        return todoRef.update(updates).then(()=>{
            dispatch(updateTodo(id, updates));
        });
    }
} 

export var removeTodo = (id) => {
    return{
        type:'REMOVE_TODO',
        id
    }
};

export var login = (uid) => {
    return {
        type: 'LOGIN',
        uid
    }
}

export var startLogin = () => {
    return (dispatch, getState) => {
        return firebase.auth().signInWithPopup(githubProvider).then((result) => {
            console.log('auth worked', result);
        }, (error) => {
            console.log('auth failed', error);
        });

    };
};

export var logout = () => {
    return {
    type: "LOGOUT",
    }
};

export var startLogout = () => {
    return (dispatch, getState) => {
        return firebase.auth().signOut().then(() => {
            console.log("logged out");
        });
    }
}

// export var saveUser = (user) => {
//     return {
//         type: "SAVE_USER",
//         user
//     }
// }
