import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0,
    x: null,
    y: null,
    isOn: false
  };

  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  toggleLight = () => {
    this.setState(prevState => ({
      isOn: !prevState.isOn
    }));
  }
  
  updateMousePosition = (event) => {
    this.setState({
      x: event.pageX,
      y: event.pageY        
    });
  }
  componentDidMount() {
    document.title = `clicked ${this.state.count} times`;
    window.addEventListener('mousemove', this.updateMousePosition);
  }
  
  componentDidUpdate() {
    document.title = `clicked ${this.state.count} times`
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.updateMousePosition);
  }

  render() {
    const { count = 0, isOn, x, y } = this.state;
  
    return (
      <>
        <h2>Counter</h2>
        <button onClick={this.handleClick}>
          I was clicked {count} times
        </button>

        <h2>Toggle Light</h2>

        <div style={{
          width: '50px',
          height: '50px',
          backgroundColor: isOn ? 'red' : 'yellow'
        }}
        onClick={this.toggleLight}
        />

       <h2>Mouse Position</h2>
        X : {x}

        Y: {y}
      </>
     );
  }
}

export default App;
