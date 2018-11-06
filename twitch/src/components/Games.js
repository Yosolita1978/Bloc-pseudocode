import React from 'react';


const Games = props => {
  const {games, onGameSelected} = props;
  return (
  <div className="container_games">
    { games.map((game) => {
      return (
        <div key={game.name}>
          <div className="game__box">
              <button className="game_buttons" onClick={() => onGameSelected(game)}>
              { game.name }
            </button>
          </div>
        </div>
      );
    })}
    </div>
  )
};

export default Games;
