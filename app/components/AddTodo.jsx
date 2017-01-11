var React = require('react');

var AddTodo = React.createClass({

  onSubmit: function (e) {
    e.preventDefault();

    var newTodo = this.refs.todoText.value;
      if(newTodo.length > 0){
      this.refs.todoText.value = '';
      this.props.onAddTodo(newTodo);
    }else {
      this.refs.todoText.focus();
    }
  },

  render: function () {
    var {id, text} = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="todoText" placeholder="what do you have to do"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
