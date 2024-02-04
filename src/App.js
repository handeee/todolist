import "./App.css";
import Label from "./Label";
import Button from "./Button";
import React, { Component } from "react";

export default class App extends Component {
  state = {
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
       <Label userInput={this.state.userInput} displayedInput={this.state.displayedInput} handleInputChange={this.handleInputChange} />
       <Button  onclick={this.handleButtonClick}/>
      </div>
    );
  }
}
