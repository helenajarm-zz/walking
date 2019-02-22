import React, { Component } from 'react';
import CardDisplay from './CardDisplay';
import PromptGenerator from './PromptGenerator';
import Map from './Map';
import Moment from 'react-moment';
import Player from './Audio';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      timer: null,
      counter: 0,
    };
     this.changePrompt = this.changePrompt.bind(this);
  }

  componentWillMount(){
    let timer = setInterval(this.changePrompt, 300000)
    this.setState({timer: this.state.timer})
  }

  componentWillUnmount(){
    clearInterval(this.state.timer)
  }

  changePrompt(){
        this.setState({counter: this.state.counter + 1});
  }

  render() {
    const initialDate = new Date();

    return (
      <div className="App">
        <div className="header">
          <p> Wandering for <Moment fromNow ago>{String(initialDate)}</Moment>. </p>
        </div>
        <div className="main">
          <div className="Card">
            <PromptGenerator/>
          </div>
        </div>
        <div className="footer">
          <a onClick={() => this.changePrompt()}>Next</a>
        </div>
      </div>
    );
  }
}

export default App;
