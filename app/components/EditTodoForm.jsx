import React from 'react';
import * as Redux from 'react-redux';
var {connect} = require('react-redux');

export class EditTodoForm extends React.Component{
    
    constructor(props){
        super(props);
    }

    onSubmit(e){
        e.preventDefault();
        // var oldtext = this.props.text;
        // var newText = this.state.text;
        
         this.setState({editCheck : false}, function (){ console.log(this.state.editCheck + "/////" + this.props.editCheck)});



        // if(!(oldtext === "")){
        //     dispatch(actions.editText(newText));
        // }
        
       

    }

    render () {
            var {todoId , todoText} = this.props;


            return(
                    <form onSubmit={this.onSubmit.bind(this)}> 
                        <input type="text" ref="newText"/>
                        <p>(press enter to submit edit) </p> 
                    </form>  
            );
        }

    }
export default connect()(EditTodoForm)