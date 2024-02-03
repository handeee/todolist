import "./App.css";
import Label from "./Label";
import Button from "./Button";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    info: "dvxd",
    info2: "dg",
    userInput: "",
    displayedInput:"",
    displayedInputs: []
  };
  handleInputChange = (event) => {
    this.setState({ userInput: event.target.value });
  };
  handleButtonClick = () => {
    this.setState({ displayedInput: this.state.userInput }); // Butona tıklandığında input değerini displayedInput state'ine aktarın
     
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleInputChange}   
        />
       <Button infot={this.state.displayedInput}  onclick={this.handleButtonClick}/>
       <Label infot2={this.state.displayedInput} />
      </div>
    );
  }
}
