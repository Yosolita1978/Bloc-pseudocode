import React, { Component } from 'react';
import Form from "./components/form";
import Client_ID from "./credentials.js";
import './App.css';


console.log(Client_ID);

class App extends Component {
  state = {
    games: []
  }

  getGame = async (e) => {
    const gameName = e.target.elements.gameName.value;
    e.preventDefault();
    const request = new Request(`https://api.twitch.tv/kraken/search/games?query=${gameName}`, {
    headers: new Headers({
    'Accept': 'application/vnd.twitchtv.v5+json',
    'Client-ID': Client_ID
  })
})
    const api_call = await fetch(request);
    const data = await api_call.json();
    this.setState({ games: data.games });
    console.log(this.state.games);
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
