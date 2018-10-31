import React from 'react';

const Form = props => (
  <form onSubmit={props.getGame}>
    <input type="text" name="gameName"/>
    <button>Search</button>

  </form>
);

export default Form;
