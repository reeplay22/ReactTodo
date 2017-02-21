import React from 'react';
import * as Redux from 'react-redux';
var moment = require('moment');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import Login from 'Login';
import * as actions from 'actions';

export class TodoApp extends React.Component {

  onLogout(e) {
    var {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  }
//<!-- <div><p>{auth.user.displayName}</p><img url={auth.user.photoURL}/></div>  -->
  render () {
    //var {auth} = this.state;
    return (
      <div>
          <div className="page-actions">
     
          <a href="#" onClick={this.onLogout.bind(this)}>Log Out</a>
          </div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>

      </div>
    )
  }

};

export default Redux.connect()(TodoApp);
