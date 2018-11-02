import React from 'react';

import { Link } from "react-router-dom";

const Games = props => (
  <div className="container">
    { props.games.map((game) => {
      return (
        <div key={game.name} className="col-md-4" style={{ marginBottom:"0.5rem" }}>
          <div className="game__box">
              <button className="game_buttons">
              { game.name }
            </button>
          </div>
        </div>
      );
    })}
    </div>
);

export default Games;
