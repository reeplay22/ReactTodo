var moment = require('moment');
var uuid = require('uuid');



export var searchTextReducer = (state = "", action) => {
    switch (action.type) {
        case 'SET_SEARCH_TEXT':
            return action.searchText;
       
        default:
            return state;
    }
}

export var showCompletedReducer = (state = false, action) => {
    switch (action.type) {
        case 'UPDATE_SHOW_COMPLETED':
            return !state;       
        default:
            return state
    }
}

var nextTodoID = 1;
export var todosReducer = (state=[], action) => {
 
    switch(action.type){
        case "ADD_TODO":
            return [
                 ...state,
                 action.todo
                
                ];
        case "ADD_TODOS":
            return[
                ...state,
                ...action.todos
            ]
        case "UPDATE_TODO":        
            return state.map((todo) => {
                     if(todo.id === action.id) {
                        var nextCompleted = !todo.completed; 
                        return {
                            ...todo,
                            ...action.updates
                        }                      
                     }else{
                         return todo;
                     }
            });
                 
        case "REMOVE_TODO":
            return state.filter((todo) => todo.id !== action.id)
        
        default:
            return state;
    
    };


};