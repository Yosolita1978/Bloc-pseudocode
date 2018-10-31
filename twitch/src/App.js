import React, { Component } from 'react';
import Form from "./components/form";
import './App.css';

class App extends Component {

  getGame = (e) => {
    const gameName = e.target.elements.gameName.value;
    e.preventDefault();
    console.log(gameName);
  }


  render() {
    return (
      <div className="app">
        <header className="App-header text-center">
          <h1 className="App-title mt-5">Twitch Game Search</h1>
        </header>
        <div className="sidebar">
        <p>here goes the side bar</p>
        </div>
        <div className="main">
        <p> Search for your favorite games in the search box below. Click in ther name to find out more information about them</p>
        <Form getGame={this.getGame}/>
        </div>
      </div>
    );
  }
}

export default App;
