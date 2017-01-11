var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({

  getInitialState: function () {
    return {
      todos: [
        // {
        //   id: 1,
        //   text: 'Walk the dog'
        // },
        // {
        //   id: 2,
        //   text: 'Clean the yard'
        // },
        // {
        //   id: 3,
        //   text: 'Cook Dinner'
        // },
        // {
        //   id: 4,
        //   text: 'Beat the pussy up'
        // }
      ],
      showCompleted: false,
      searchText: ''
    };
  },

  handleSearch: function (showCompleted, searchText) {
      this.state({
        showCompleted: showCompleted,
        searchText: searchText.toLowerCase()
    });
  },

  handleAddTodo: function (newTodo) {
    //alert(newTodo);
    var {todos} = this.state;
    var lastTodo = (todos.slice(-1).pop()) == undefined ? {id:0} : todos.slice(-1).pop();
    var holdArray = [...todos, {
      id: lastTodo.id + 1 ,
      text: newTodo
    }];

    this.setState({
      todos: holdArray
    });
  },

  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }

});

module.exports = TodoApp;
