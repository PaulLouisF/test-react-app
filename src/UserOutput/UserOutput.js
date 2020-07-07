import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  const classes = ['UserOutput']
  if (props.username === 'Pierre') {
    classes.push('red')
  }
  return(
    <div className={classes.join(' ')}>
      <p>Bonjour, je m 'appelle {props.username}</p>
      <p>j ai 30 ans</p>
    </div>
    );
}

export default userOutput;
