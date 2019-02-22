import React, { Component } from 'react';
import './App.css';

class CardDisplay extends Component {
  render() {

    /*const list = this.props.promptList;
    const promptStack = list.map((prompt) =>
      <div className="Card" key={prompt.id} >
        <p> {prompt}</p>
      </div>
    ).reverse();*/


    return (
      <div className="Card">
        <p>{this.props.prompt}</p>
      </div>
    );
  }
}
export default CardDisplay;
