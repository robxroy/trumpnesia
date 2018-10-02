import React, { Component } from "react";
import TrumpCard from "./components/TrumpCard";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import scandals from "./scandals.json";
import "./App.css";


// const shuffle = (array)=> {
//   for(let i = array.length -1; i > 0; i--) {
//     let x = Math.floor(Math.random() * (i + 1));
//     [array[i], array[x]] = [array[x] , array[i]];
//   }
//   return array;
// }

class App extends Component {
  // Setting this.state.scandals to the scandals json array
  state = {
    cards: scandals,
    score: 0,
    topScore: 0
  };

  shuffleScandals = array => array.sort((a,b) => 0.5 - Math.random());



  removeScandal = id => {
    // Filter this.state.scandals for scandals with an id not equal to the id being removed
    const scandals = this.state.scandals.filter(scandal => scandal.id !== id);
    // Set this.state.scandals equal to the new scandals array
    this.setState({ scandals });
  };

  // clickHandler = id => {
  //   // Store current state in a variable for ease of use later
  //   const memory = this.state.cards;
  //   // Search for the element in the array that matches what was clicked on
  //   const result = memory.filter(actor => actor.id === id);
  //   // Find the current index in the array of the actor that was clicked on
  //   const memoryIndex = memory.indexOf(result[0]);
  //   if(!result[0].clicked) {
  //     // Remove the actor from the array
  //     memory.splice(memoryIndex, 1);
  //     // Update the value
  //     result[0].clicked = true;
  //     // Push it back into the array
  //     memory.push(result[0]);
  //     // Upate the state to increment the current score
  //     // Update the state to set the cards to the updated values
  //     this.setState({ score: this.state.score + 1,
  //                     cards: scandals  });
  //   } else {
  //     // Call the lose method
  //     this.gameOver();
  //   }
  //   memory.sort(() => 0.5 - Math.random());
  // };




  // handleShuffleCards = () => {
  //   let shuffleScandals = shuffle(scandals);
  //   this.setState ( { scandal : shuffleScandals });
  // };

  

  // Map over this.state.scandals and render a scandalCard component for each scandal object
  render() {
    return (
      <div>
        <div>
         <NavBar />
          </div>
      <Wrapper>
        <Header />
        {this.state.cards.map(scandal => (
          <TrumpCard
            removescandal={this.removescandal}
            id={scandal.id}
            key={scandal.id}
            scandal={scandal.scandal}
            url={scandal.url}

          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
