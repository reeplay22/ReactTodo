var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {

  beforeEach(()=>{
    localStorage.removeItem('todos');
  });
  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos',() => {
    it('should set valid todos array', ()=> {
      var todos = [{
        id:4,
        text: "testing",
        completed: false
      }];

      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toEqual(todos);

    });

    it('should not set invalid data', () => {
      var badTodos = {a: 'B'};
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);

    })
  });

  describe('getTodos', () => {

    it('should return empty array for bad localStorage data', () => {
      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual([]);
    });

    it('should return todos if valid in localStorage exist', () => {
      var todos = [{
        id:4,
        text: "testing",
        completed: false
      }];

      localStorage.setItem('todos', JSON.stringify(todos));

      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual(todos);
    });
  });

  describe('filterTodos', () => {
    var todos = [{
      id:1,
      text: "testing1",
      completed: true
    },{
      id:2,
      text: "testing2",
      completed: false
    },{
      id:3,
      text: "testing3",
      completed: true
    },{
      id:4,
      text: "testing4",
      completed: false
    },{
      id:5,
      text: "testing5",
      completed: true
    }];


    it('should return all items if showCompleted is true', () => {
      var filterTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filterTodos.length).toBe(5);
    });

    it('should return non-completed todos when showCompleted is false', () =>{
      var filterTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filterTodos.length).toBe(2);
    });

    it('should sort by completed status',()=>{
      var filterTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filterTodos[0].completed).toBe(false);
    });

    it('should filterTodos by searchText', () => {
      var filterTodos = TodoAPI.filterTodos(todos, true, '2');
      expect(filterTodos.length).toBe(1);
    });

    it('should return all todos if no searchText is provided', () => {
      var filterTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filterTodos.length).toBe(5);
    });
  });
});
