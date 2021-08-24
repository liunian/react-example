const Demo = React.createClass({
  render: function() {
    return <div>hello</div>
  }
});


ReactDOM.renderComponent(<Demo />, document.getElementById("container"));
