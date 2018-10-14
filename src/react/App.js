import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    magic_word: 'please',
  }

  componentDidMount() {
    fetch('/magic')
      .then((data) => data.json())
      .then((data) => {
        this.setState({ magic_word: data.magic_word });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>
            The magic word is: {this.state.magic_word}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
