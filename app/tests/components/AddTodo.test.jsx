var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var {AddTodo} = require('AddTodo');

describe('AddTodo', () => {
  it ('should exist', () => {
    expect(AddTodo).toExist();
  })

  describe('onSubmit', () => {
    it('should dispactch when Add todo is triggered with valid data', () => {
      var todoText = 'Check mail';
      var action = {
        type: 'ADD_TODO',
        text: todoText
      }

      var spy = expect.createSpy();
      var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
      var $element = $(ReactDOM.findDOMNode(addTodo));

      addTodo.refs.todoText.value = todoText;
      TestUtils.Simulate.submit($element.find('form')[0]);

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('should NOT Dispatch Add todo when invalid data was entered', () => {
      var spy = expect.createSpy();
      var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
      var $element = $(ReactDOM.findDOMNode(addTodo));

      addTodo.refs.todoText.value = '';
      TestUtils.Simulate.submit($element.find('form')[0]);

      expect(spy).toNotHaveBeenCalled();
    });

  });

});
