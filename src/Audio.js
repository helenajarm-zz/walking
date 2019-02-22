import React, {Component}from 'react';


class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      title: "SOUND ON",

    };
    this.play = this.play.bind(this);
  }

  play(){
    if (this.state.play) {
      this.setState({ play: false });
      this.setState({ title: "SOUND ON"});
      this.audio.pause();
      console.log("hello");
    } else {
      this.setState({ play: true });
      this.setState({ title: "SOUND OFF"});
      this.audio.play();
    }
  };


  render () {
   return(
     <div>
       <audio src="bell.mp3"
         ref={(audio) => { this.audio = audio }}
       />
       <a className="right" onClick={this.play} >{this.state.title}</a>

   </div>
     );
   }
}

export default Player;
