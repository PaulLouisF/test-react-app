import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';


class App extends Component {
  state = {
    username: "Pierre",
    userInput: ''
  };

  swithUsernameHandler = (event) => {
    this.setState({username: event.target.value})
    console.log("hello");
  }

  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value});
    // console.log(this.state.userInput)
    // const wordLength = this.state.userInput.length
    // console.log(wordLength)
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    this.setState({userInput: text.join('')});
  }

  clickHandler = () => {

  }

  render() {
    const charList = this.state.userInput.split('').map((ch, index) => { return <CharComponent character={ch} key={index} clicked={() => this.deleteCharHandler(index)} /> });
    const style = {
      backgroundColor: 'green',
      color: 'white',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'red',
        color: 'black'
      }
    };

    return (
      <div className="App">
      <button style={style} >Click me</button>
        <UserInput
          name={this.state.username}
          enterInput={this.swithUsernameHandler} />
        <UserOutput
          username= {this.state.username} />
        <UserOutput
          username= {this.state.username} />
        <UserOutput
          username="Nat" />
        <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInput} />
          <p>{this.state.userInput}</p>
        <ValidationComponent
          length={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default Radium(App);
