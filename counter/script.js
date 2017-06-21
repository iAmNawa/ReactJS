var MyComponent = React.createClass({
    render: function() {
        return <div>My React Component</div>;
    }
});

React.render( <div>
    <MyComponent />
            <MyComponent />
            <MyComponent />
            </div>
    , document.getElementById('react-container'));

var Counter = React.createClass({
  getInitialState: function() {
    return {count: this.props.initialCount};
  },
  addToCount: function(delta) {
    this.setState({count: this.state.count + delta})
  }
React.render( <div>
        <h3>Count: {this.state.count}</h3>
        <ActionButton text="+1" onAction={this.addToCount.bind(this, 1)} />
        <ActionButton text="-1" onAction={this.addToCount.bind(this, -1)} />
      </div>
    );
});
