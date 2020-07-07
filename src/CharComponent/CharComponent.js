import React from 'react';
import Radium from 'radium';

const charComponent = (props) => {
  const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black',
    backgroundColor: 'yellow',
    ':hover': {
      backgroundColor: 'blue'
    }
  }
  return(
    <div style={style} onClick={props.clicked} >
      <p>{props.character}</p>
    </div>
    );
};

export default Radium(charComponent);
