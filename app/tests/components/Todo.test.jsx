var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var Todo = require('Todo');

describe('Todo', () => {
  it ('should exist', () => {
    expect(Todo).toExist();
  });

  it('should call onToggle prop with id on click', () => {
    var todoData = {
      id:11,
      text: "test",
      completed: true
    };

    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
    var $element = $(ReactDOM.findDOMNode(todo));

    todo.setState({todos:[todoData]});
    TestUtils.Simulate.click($element[0]);

    expect(spy).toHaveBeenCalledWith(11);
  })
});
