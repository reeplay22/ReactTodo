var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('uuid');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({

  getInitialState: function () {
    return {
      todos: TodoAPI.getTodos(),
      showCompleted: false,
      searchText: ''
    };
  },

  componentDidUpdate: function (){
    TodoAPI.setTodos(this.state.todos);
  },
  handleSearch: function (showCompleted, searchText) {
      this.setState({
        showCompleted: showCompleted,
        searchText: searchText.toLowerCase()
    });
  },

  handleAddTodo: function (newTodo) {

    this.setState({
      todos: [...this.state.todos, {
        id: uuid(),
        text: newTodo,
        completed: false
      }]
    });
  },

  handleToggle: function (id) {

    var updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({
      todos: updatedTodos
    });

  },

  render: function () {
    var {todos, showCompleted, searchText} = this.state;

    var filterTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={filterTodos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }

});

module.exports = TodoApp;
