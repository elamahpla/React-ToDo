import React from 'react';
import './Options.css'
import Option from '../Option/Option';

const Options = (props) => {
  return (
    <div>
      {props.options.map((option) => {
        return <Option 
          key={option} 
          optionText={option}
          onClick={props.removeSingleItem}
          />
      })}
    </div>
  );
}

export default Options;