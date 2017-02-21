import React from 'react';
import * as Redux from 'react-redux';
var {connect} = require('react-redux');
import EditTodoForm from 'EditTodoForm';
var actions = require('actions');


export class EditTodo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            edit: true,
            editCheck: false
        }
        this.editOnClick= this.editOnClick.bind(this);
    }

    

   editOnClick () {
    var edit = this.state.editCheck;
      this.setState({editCheck: !edit}, 
            function () {
                console.log(this.state.editCheck);
                } 
        )
    
  }

  onSubmit(e){
        e.preventDefault();
         //var {dispatch, todoId} = this.props;
         var {todo, dispatch} = this.props;
         var newText = this.refs.newText.value;

         console.log(todo.id + "///" + newText);
         

         if(!(newText === "")){

            var updatedTodo = {
                  text: newText,
                  createdAt: todo.createdAt,
                  completed: todo.completed,
                  completedAt: todo.completedAt
                }

             dispatch(actions.startUpdateTodo(todo.id , updatedTodo));
             this.setState({editCheck : false}, function (){ console.log(this.state.editCheck)});
         }       

    }


    render () {
        //var {todoId , text} = this.props;
        var {todo, id, text, completed, createdAt, completedAt, dispatch} = this.props;
        var {editCheck} = this.state;

        var renderEdit = (edit) => {
            edit = editCheck
            if(edit === true){
                return  <span><form onSubmit={this.onSubmit.bind(this)}> 
                            <input type="text" ref="newText"/>
                            <p>(press enter to submit edit) </p> 
                        </form></span>
                }
            }

        return(           
                <div>
                   <button className="button" onClick={this.editOnClick.bind(this)}>Edit</button> {renderEdit()}
                </div>       
        );
    }

}
export default connect(
    (state) => {
    return state
  }
)(EditTodo)

