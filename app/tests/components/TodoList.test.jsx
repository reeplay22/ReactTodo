var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');
var {Provider} = require('react-redux');

import {configure} from 'configureStore'
import ConnectedTodoList, {TodoList} from 'TodoList'
import ConnectedTodo, {Todo} from 'Todo'

describe('TodoList', () => {
  it ('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should display correct amount of todos', () => {
    var todos = [{
      id:1,
      text:'do something',
      completed: false,
      completedAt: undefined,
      createdAt: 300
    },{
      id:2,
      text:"something else",
      completed: false,
      completedAt: undefined,
      createdAt: 300
    }];

    var store = configure({
      todos
    });
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList/>
      </Provider>
    );
    var todoList = TestUtils.scryRenderedComponentsWithType(provider,ConnectedTodoList)[0]
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

    expect(todosComponents.length).toBe(todos.length);
  });

  it('should render empty message if no todos are displayed', () => {
    var todos = [];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
    var $element = $(ReactDOM.findDOMNode(todoList));

    expect($element.find('.container__message').length).toBe(1);
  });
});
