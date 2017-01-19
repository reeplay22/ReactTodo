var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var {Todo} = require('Todo');

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

    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
    var $element = $(ReactDOM.findDOMNode(todo));

    todo.setState({todos:[todoData]});
    TestUtils.Simulate.click($element[0]);

    expect(spy).toHaveBeenCalledWith({
      type: "UPDATE_TODO",
      id: todoData.id
    });
  })
});
