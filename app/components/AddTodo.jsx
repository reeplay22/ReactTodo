var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({

  onSubmit: function (e) {
    e.preventDefault();

    var newTodo = this.refs.todoText.value;
    var {dispatch} = this.props;

      if(newTodo.length > 0){
      this.refs.todoText.value = '';
      dispatch(actions.addTodo(newTodo));
    }else {
      this.refs.todoText.focus();
    }
  },

  render: function () {
    var {id, text, dispatch} = this.props;
    return (
      <div className="container__footer">
        <form onSubmit={this.onSubmit
         // () => {       
          // dispatch(actions.addTodo(this.refs.todoText.value));
          // this.refs.todoText.value = '';
       // }
      }>
          <input type="text" ref="todoText" placeholder="what do you have to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
