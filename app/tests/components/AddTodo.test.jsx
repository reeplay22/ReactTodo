var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it ('should exist', () => {
    expect(AddTodo).toExist();
  })

  describe('onSubmit', () => {
    it('should submit the intake of data', () => {
      var spy = expect.createSpy();
      var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
      var $element = $(ReactDOM.findDOMNode(addTodo));

      addTodo.refs.todoText.value = 'this is a test';
      TestUtils.Simulate.submit($element.find('form')[0]);

      expect(spy).toHaveBeenCalledWith('this is a test');
    });

    it('should NOT submit because no data was entered', () => {
      var spy = expect.createSpy();
      var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
      var $element = $(ReactDOM.findDOMNode(addTodo));

      addTodo.refs.todoText.value = '';
      TestUtils.Simulate.submit($element.find('form')[0]);

      expect(spy).toNotHaveBeenCalled();
    });

  });
});
