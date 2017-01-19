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


export var addTodo = (text) => {
    return{
        type:'ADD_TODO',
        text
    }
};

export var updateTodo = (id) => {
    return {
        type: 'UPDATE_TODO',
        id
    }
}
export var removeTodo = (id) => {
    return{
        type:'REMOVE_TODO',
        id
    }
};

