import React from 'react';

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      {/* <button onClick={(event) => {props.removeSingle(props.optionText)}}> */}
        <button onClick={props.removeSingle}>
        Remove
      </button>
    </div>
  )
}

export default Option;