import React from 'react';

const userInput = (props) => {
  const style = {
    border: '2px solid blue' }
  return(
    <div>
      <input style={style} onChange={props.enterInput} type="text" value={props.name}/>
    </div>
    );
}

export default userInput;
