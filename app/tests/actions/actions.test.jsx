var expect = require('expect');
var actions = require('actions');
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import firebase, {firebaseRef} from 'app/firebase'

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
            id: 123,
            updates: {completed:false}
        };
        var res = actions.updateTodo(action.id, action.updates);

        expect(res).toEqual(action);
    });
    describe('Test with firebase todos', () => {
        var testTodoRef;
       
        beforeEach((done) => {
            testTodoRef = firebaseRef.child('todos').push();
            
            testTodoRef.set({
                text: "test text",
                completed: false,
                createdAt: 2342342
            }).then(() => done());
        });
        
        afterEach((done) => {
            testTodoRef.remove().then(() => done());
        });

            it('should update todo and dispatch UPDATE todo aciton', (done) => {
                const store = createMockStore({});
                const action = actions.startUpdateTodo(testTodoRef.key, true);

                store.dispatch(action).then(() => {
                    const mockActions = store.getActions();

                    expect(mockActions[0]).toInclude({
                        type: 'UPDATE_TODO',
                        id: testTodoRef.key
                    });           
                    expect(mockActions[0].updates).toInclude({
                        completed: true
                    });
                    expect(mockActions[0].updates.completedAt).toExist();
                    
                    done();
                }, done);
        });
    });
});