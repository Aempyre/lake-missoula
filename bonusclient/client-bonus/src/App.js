import React, { Component } from 'react';
import logo from './newchlogo.png';
import RangeForm from './components/RangeForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Fizz Buzz!</h1>
        </header>
        <p className="App-intro">
          Enter a maximum range from 0 to 999999 and click PLAY.
        </p>
        <RangeForm/>
        <textarea id="result-of-game" class="resultofgame" ref="gameresultref">
          Result will appear here.
        </textarea>
      </div>
    );
  }
}

export default App;
