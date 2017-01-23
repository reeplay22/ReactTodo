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
                todo: {
                    id:'3294802894',
                    text:"some test shit",
                    completed: false,
                    createdAt: 123123213
                }
            }

            var res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(action.todo);
        });

        it('should add initial todos', () => {
            var action = {
                type: 'ADD_TODOS',
                todos:[{
                            id:1,
                            text:'do something',
                            completed: false,
                            completedAt: undefined,
                            createdAt: 300
                        },{
                            id:2,
                            text:"something else",
                            completed: false,
                            completedAt: undefined,
                            createdAt: 300
                        }]
                    }

            var res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(2);
            expect(res[0]).toEqual(action.todos[0]);
        });

        it('should update todo', () => {
            var todos = [{ 
                        id: 1234,
                        text: 'newTodo',
                        completed: false,
                        createdAt: 123412341,
                        completedAt: undefined
            }];
            var updates = {
                completed: true,
                completedAt: 123123
            };

            var action = {
                type: "UPDATE_TODO",
                id: 1234,
                updates
            }

            var res = reducers.todosReducer(df(todos) ,df(action));
            
            expect(res[0].completed).toEqual(updates.completed);
            expect(res[0].completedAt).toEqual(updates.completedAt);
            expect(res[0].text).toEqual(todos[0].text);
            
        });

         describe('todosReducer', () => {
             it('should store uid on login', () => {
                 const action = {
                     type:'LOGIN',
                     uid: '123213'
                 }
                 const res = reducers.authReducer(undefined, df(action));

                 expect(res).toEqual({uid: action.uid});
             });
              it('should store uid on login', () => {
                 const action = {
                     type:'LOGOUT',
                 }

                  const authData = {
                     uid: '123213'
                 }
                 const res = reducers.authReducer(df(authData), df(action));

                 expect(res).toEqual({});
             });

         });


    });
});