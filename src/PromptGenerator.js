import React, { Component } from 'react';
import './App.css';


  const verb = [
    "Walk towards a ",
    "Find a ",
    "Follow a ",
    "Search for a ",
    "Go towards a "
  ]
  const adjective = [
    "bright","rogue","dead","playful","dark","bold","buzzy","hidden","sexy","romantic","shiny","wee","bleak","blocked","calm","cheap","crooked","damned","doomed","dreary","drunk","huge","lone","lush","luxe"
    ,"mild","moldy","posh","plush","plump","queer","slick","striped","super"
  ]
  const noun = [
    "sun","shadow","dog","corner","dead end","treasure","smell","scene","sight","ghost","pub","punk","feeling","curve","mob","moon","mood","bet","light","boy","breeze","hill","neighborhood","tree",
    "stairs","pooch","porch","smell"
  ]


class PromptGenerator extends Component {
  render() {
    const randomVerb = verb[Math.floor(Math.random() * verb.length)];
    const randomAdjective = adjective[Math.floor(Math.random() * adjective.length)];
    const randomNoun = noun[Math.floor(Math.random() * noun.length)];
    const prompt = randomVerb + randomAdjective + ' ' + randomNoun;
    return (
        <p>{prompt}.</p>
    );
  }
}
export default PromptGenerator;
