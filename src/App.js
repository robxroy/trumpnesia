import React, { Component } from "react";
import TrumpCard from "./components/TrumpCard";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import scandals from "./scandals.json";
import "./App.css";

function shuffle(array) {
  for(let i = array.length -1; i > 0; i--) {
    let x = Math.floor(Math.random() * (i + 1));
    [array[i], array[x]] = [array[x] , array[i]];
  }
  return array;
}


class App extends Component {
  // Setting this.state.scandals to the scandals json array
  state = {
    cards: scandals,
    currentScore: 0,
    highScore: 0,
    clicked: []
  };

  //shuffleScandals = array => array.sort((a,b) => 0.5 - Math.random());


  clickHandler = id => {
    if (this.state.clicked.indexOf(id)=== -1){
      this.scoreHandler();
      this.setState( {clicked : this.state.clicked.concat(id) });
    }
    else {
      this.resetHandler();
    }
  };

  scoreHandler = () => {
    const newScore = this.state.currentScore + 1;
    this.setState ({ score: newScore});
    if (newScore >= this.state.highScore){
      this.setState( { highScore: newScore})
    }
    else if (newScore === 21){
      alert(`Memory is a curse. And your conscience knows at least ${newScore} scandals`)
    }
    this.shuffleHandler();
    
  };

  resetHandler = () => {
    this.setState({ 
      currentScore: 0,
      highScore: this.state.highScore,
      clicked: []
    });
    this.shuffleHandler()
  };


  // removeScandal = id => {
  //   // Filter this.state.scandals for scandals with an id not equal to the id being removed
  //   const scandals = this.state.scandals.filter(scandal => scandal.id !== id);
  //   // Set this.state.scandals equal to the new scandals array
  //   this.setState({ scandal: scandals });
  // };

  shuffleHandler = () => {
    let shuffleHandler = shuffle(scandals);
    this.setState ( { scandal : shuffleHandler });
  };


  render() {
    return (
      <React.Fragment>
        <NavBar
          currentScore={this.state.currentScore}
          highScoreScore={this.state.highScore}
          title="Trumpnesia"
          directions="Click on an image to earn points, but don't forget the scandal. If you click on any picture more than once, it is GAME OVER!"

         />
        <Header
          title="Trumpnesia"
          directions="Click on an image to earn points, but don't forget the scandal. If you click on any picture more than once, it is GAME OVER!"
         

         />
        <Wrapper>
     
       {this.state.cards.map(scandal => 
          <TrumpCard
            clickHandler={this.clickHandler}
            scoreHandler={this.scoreHandler}
            shuffleHandler={this.shuffleHandler}
            resetHandler={this.resetHandler}
            id={scandal.id}
            key={scandal.key}
            scandal={scandal.scandal}
            url={scandal.url}
            
          />
        )}
          
      
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default App;