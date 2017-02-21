var React = require('react');
import Todo from 'Todo'
var {connect} = require('react-redux');
var TodoAPI = require('TodoAPI');
import EditTodo from 'EditTodo';

export class TodoList extends React.Component{

  constructor(props) {
    super(props);
  }

  

  render () {
    var {todos, showCompleted, searchText} = this.props;

    var renderTodos = () => {
      var filterTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
      
      if(filterTodos.length === 0){
        return (<p className="container__message">Nothing to do for today</p>);
      }

      return filterTodos.map((todo) => {
        return (<span> 
        <Todo key={todo.id} {...todo} />
        <EditTodo todo={todo}  />       
        </span>
        );
      });
    };

    return (
      <div>
        {renderTodos()}    
      </div>
    );
  }

};

export default connect(
  (state) => {
    return state
  }
)(TodoList);
