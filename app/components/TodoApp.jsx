var React = require('react');
var moment = require('moment');
var uuid = require('uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
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
        completed: false,
        createdAt: moment().unix(),
        completedAt: undefined
      }]
    });
  },

  handleToggle: function (id) {
    var now = moment.unix(moment().unix());
    var updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
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
        <h1 className="page-title"> Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch} />
              <TodoList todos={filterTodos} onToggle={this.handleToggle}/>
              <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
          </div>
        </div>

      </div>
    )
  }

});

module.exports = TodoApp;
