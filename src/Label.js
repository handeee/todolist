import React, { Component } from 'react'

export default class Label extends Component {
  render() {
    return (
      <div>    
         <input
          type="text"
          value={this.props.userInput}
          onChange={this.props.handleInputChange}   
        />
        <p>kul deg {this.props.displayedInput}</p>
      </div>   
    )
  }
}
