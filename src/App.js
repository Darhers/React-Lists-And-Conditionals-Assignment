import React, {Component} from 'react';
import Validation from './Validation/Validation.js';
import Char from './Char/Char.js';
import './App.css';
import { isCompositeComponent } from 'react-dom/test-utils';

class App extends Component {
  state = {
    input: "",
    inputLength: 0
  }

  getInputLengthHandler = (event) => {
    const val = event.target.value;
    this.setState({
      input: val,
      inputLength: val.length
    })
  }

  
  render() {
    let chars = null;
    if (this.state.input) {
      console.log(typeof this.state.input);
      chars = (
        <div>
          {
            this.state.input.split("").map(char => {
              return <Char char={char} />
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
        <input 
          type="text" 
          onChange={(event) => {this.getInputLengthHandler(event)}}
          placeholder="Enter your text here!"/>
        <Validation length={this.state.inputLength} />
        {chars}
      </div>
    );
  }
}

export default App;
