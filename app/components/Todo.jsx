var React = require('react');

var Todo = React.createClass({

  render: function () {
    var {id, text} = this.props;
    return (
      <div>
        <h6>{id}. {text}</h6>
      </div>
    );
  }
});

module.exports = Todo;
