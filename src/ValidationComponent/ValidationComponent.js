import React from 'react';
import Radium from 'radium';

const validationComponent = (props) => {
  let wordLength = "Text too short";
  const style={
    backgroundColor: 'green',
    ':hover': {
      backgroundColor: 'yellow'
    }
  };
  if (props.length > 5) {
    wordLength = "Text long enough";
    style.backgroundColor = 'red';
    style[':hover'] = {
      backgroundColor: 'blue'
    }
  }


  return(
    <div style={style}>
      <p>{props.length}</p>
      <p>{wordLength}</p>
    </div>
    );
}

export default Radium(validationComponent);
