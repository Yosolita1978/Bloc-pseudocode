import React from 'react';

const Game = props => {
  const {game} = props;
  return (
          <div className="sidebar">
          <h2>{game.name}</h2>
          <img src={game.box.medium} alt={game.name}/>
          <h5>{game.popularity} viewers </h5>
          </div>
      );
};

export default Game;
