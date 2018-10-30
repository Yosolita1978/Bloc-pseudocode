import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header text-center">
          <h1 className="App-title mt-5">Twitch Game Search</h1>
        </header>
        <div className="main">
    <p> Search for your favorite games</p>
        </div>
        <div className="sidebar">
        </div>
      </div>
    );
  }
}

export default App;
