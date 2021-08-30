class Button extends React.Component {
    render() {
        return <button>{this.props.children}</button>;
    }
}

function Icon({ children }) {
    return <span className="icon">{children}</span>;
}

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        hello
        <Button>
            <span>no effect</span>
            <Icon>icon-x</Icon>
        </Button>
        <span>{this.state.count}</span>
      </div>
    );
  }
}


ReactDOM.render(<Demo />, document.getElementById("container"));
