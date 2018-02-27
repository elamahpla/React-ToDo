import React from 'react';

const Button = (props) => {
  return (
    <div>
      <button 
        onClick={props.handlePick}
        disabled={!props.hasOptions}>
        What Should I do?
      </button>
      <button onClick={props.handleDelete}>
        Remove All
      </button>
    </div>
  );
}

export default Button;