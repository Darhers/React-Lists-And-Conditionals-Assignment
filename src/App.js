import React, {Component} from 'react';
import Validation from './Validation/Validation.js';
import Char from './Char/Char.js';
import './App.css';
import { isCompositeComponent } from 'react-dom/test-utils';

class App extends Component {
  state = {
    input: ""
  }

  getInputLengthHandler = (event) => {
    this.setState({
      input: event.target.value,
    })
  }

  deleteCharHandler = (index) => {
    const input = this.state.input.split("");
    input.splice(index, 1);
    const updatedInput = input.join('');
    this.setState({input: updatedInput});
  }
  
  render() {
    let chars = null;
    if (this.state.input) {
      chars = (
        <div>
          {
            this.state.input.split("").map((char, index) => {
              return <Char char={char}
                           key={index}
                           click={() => this.deleteCharHandler(index)} />
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
          value={this.state.input}
          placeholder="Enter your text here!"/>
        <Validation input={this.state.input} />
        {chars}
      </div>
    );
  }
}

export default App;
