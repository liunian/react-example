class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleClick() {
    this.setState(s => ({
        count: s.count + 1
    }));
  }

  render() {
    return (
      <div>
        hello
        <button onClick={this.handleClick.bind(this)}>add</button>
        <span>{this.state.count}</span>
      </div>
    );
  }
}


ReactDOM.render(<Demo />, document.getElementById("container"));
