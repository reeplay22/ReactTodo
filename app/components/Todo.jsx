var React = require('react');
var moment = require('moment');
var {connect} = require('react-redux');
var actions = require('actions');
import EditTodo from 'EditTodo';
//var store = require('store');

export class Todo extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      editCheck: false
    }
  }
  

  // checkOnClick ()  {    
  //         this.props.dispatch(actions.startUpdateTodo(this.props.id, !this.props.completed));
  //       }

  render () {
    var {todo, id, text, completed, createdAt, completedAt, dispatch} = this.props;
    var {edit, editCheck} = this.state;

    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () =>{
      
      var message = "Created on:  ";
      var timestamp = createdAt;

      if(completed) {
        message = "Completed on:  ";
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')
    };

    return (          
           <div className={todoClassName} >
              <div onClick={() => {    
                todo = {
                  text,
                  createdAt,
                  completed: !completed,
                  completedAt
                }
              dispatch(actions.startUpdateTodo(id, todo));
            }}>
                <input type="checkbox" checked={completed} />
              </div>
              <div>
                <p>{text}</p>
                <p className="todo-subtext">{renderDate()}</p>
              </div>
            </div>        
    );
  }
};

export default connect()(Todo);