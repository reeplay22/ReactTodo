var expect = require('expect');
var actions = require('actions');
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

var createMockStore = configureMockStore([thunk]);

describe('actions', () => {
    it('should generate search text action' , () => {
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'some text'
        };
        var res = actions.setSearchText(action.searchText);

        expect(res).toEqual(action);
    });

    it('should generate add todo action' , () => {
        var action = {
            type: 'ADD_TODO',
            todo: { 
                    id:1,
                    text:'do something',
                    completed: false,
                    completedAt: undefined,
                    createdAt: 300
                    }
        };
        var res = actions.addTodo(action.todo);

        expect(res).toEqual(action);
    });

    it('should create todo and dispatch add todo action' , (done) => {
        const store = createMockStore({});
        const todoText = "the Todo shorr";

        store.dispatch(actions.startAddTodo(todoText)).then(() =>{
            const actions = store.getActions();
            expect(actions[0]).toInclude({
                type: 'ADD_TODO',

            });
            expect(actions[0].todo).toInclude({
                text: todoText
            });
            done();
        }).catch(done);
        
        
    });

     it('should generate add todos action object' , () => {
        var todos = [{
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
            }];

        var action = {
            type: 'ADD_TODOS',
            todos
        };
        
        var res = actions.addTodos(todos);

        expect(res).toEqual(action);
    });


    it('should generate show completed text action' , () => {
        var action = {
            type: 'UPDATE_SHOW_COMPLETED',
        };
        var res = actions.updateShowCompleted();

        expect(res).toEqual(action);
    });

    it('should generate update todo action' , () => {
        var action = {
            type: 'UPDATE_TODO',
            id: 123
        };
        var res = actions.updateTodo(action.id);

        expect(res).toEqual(action);
    });
});