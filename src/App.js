import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    inputLength: 0
  }

  getInputLengthHandler = (event) => {
    this.setState({
      inputLength: event.target.value.length
    })
  }

  render() {
    return (
      <div className="App">
        <input 
          type="text" 
          onChange={(event) => {this.getInputLengthHandler(event)}}
          placeholder="Enter your text here!"/>
        <p>{this.state.inputLength}</p>
      </div>
    );
  }
}

export default App;
