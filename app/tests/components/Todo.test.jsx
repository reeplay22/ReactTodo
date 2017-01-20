var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');
import * as actions from 'actions'

import {Todo} from 'Todo';

describe('Todo', () => {
  it ('should exist', () => {
    expect(Todo).toExist();
  });

  it('should dispatch update todo with id on click', () => {
    var todoData = {
      id:11,
      text: "test",
      completed: true
    };
    var action = actions.startUpdateTodo(todoData.id, !todoData.completed);



    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
    var $element = $(ReactDOM.findDOMNode(todo));

    todo.setState({todos:[todoData]});
    TestUtils.Simulate.click($element[0]);

    expect(spy).toHaveBeenCalledWith(action);
  })
});
