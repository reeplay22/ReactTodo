var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');


describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set search text', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            }
            var res = reducers.searchTextReducer(df(''), df(action));

            expect(res).toEqual(action.searchText);
        });
    });
    describe('showCompletedReducer', () => {
        it('should change the status of show completed', () => {
            var action = {
                type: 'UPDATE_SHOW_COMPLETED',
               
            }

            var res = reducers.showCompletedReducer(df(false) , df(action));

            expect(res).toEqual(true);
        });
    });

    describe('todosReducer', () => {
        it('should add todo', () => {
            var action = {
                type: 'ADD_TODO',
                text: 'new thing to do'
            }

            var res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.text);
        });

        it('should update todo', () => {
            var todos = [{ 
                        id: 1234,
                        text: 'newTodo',
                        completed: false,
                        createdAt: 123412341,
                        completedAt: undefined
            }]

            var action = {
                type: "UPDATE_TODO",
                id: 1234
            }

            var res = reducers.todosReducer(df(todos) ,df(action));
            
            expect(res[0].completed).toEqual(true);
            expect(res[0].completedAt).toBeA('number');
            
        });


    });
});