import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    magic_word: 'please',
  }

  componentDidMount() {
    console.log('test envvar is: "' + process.env.REACT_APP_TEST + '"');
    let backend_addr = process.env.REACT_APP_BACKEND_ADDR;
    console.log('fetching data from ' + backend_addr + '...');
    fetch(backend_addr + '/magic')
      .then((data) => data.json())
      .then((data) => {
        console.log('got data!');
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
