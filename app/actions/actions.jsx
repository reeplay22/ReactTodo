import firebase, {firebaseRef} from 'app/firebase/';
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

        var todoRef = firebaseRef.child('todos').push(todo);
        
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

export var updateTodo = (id, updates) => {
    return {
        type: 'UPDATE_TODO',
        id,
        updates
    }
}

export var startUpdateTodo = (id, completed) => {
    return(dispatch, getState) => {
        var todoRef = firebaseRef.child(`todos/${id}`);
        var updates = {
            completed,
            completedAt: completed ? moment().unix() : null
        };

        console.log(getState());
        //debugger;
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

