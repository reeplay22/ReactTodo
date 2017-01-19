var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

import {TodoSearch} from 'TodoSearch';

describe('TodoSearch', () => {
  it ('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should dispatch SetSearchText on input change', () => {
    var searchText = 'Dog';
    var spy = expect.createSpy();
    var action = {
      type: "SET_SEARCH_TEXT",
      searchText
    }
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch UpdateShowCompleted when checkbox is checkbox', () => {
    var showCompleted = true;
    var spy = expect.createSpy();
    var action = {
      type: "UPDATE_SHOW_COMPLETED",
    }
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    todoSearch.refs.showCompleted.checked = showCompleted;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(action);
  });

});
