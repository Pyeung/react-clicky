// let priorClick = false;
// let updateCards = this.state.cards.map(card => {
//   if (card.id === id) {
//     if (card.clicked) {
//       priorClick = true;
//       return card;
//     } else {
//       return {
//         ...card,
//         clicked: true
//       };
//     }
//   } else {
//     return card;
//   }
// });
// if(priorClick){
//     console.log("RESET")
//     this.setState({ cards: Data }, ()=> console.log(this.state.cards))
// } else {
//     this.setState({ cards: updateCards}, ()=>console.log(this.state.cards))
// }

import React, { Component } from "react";
import Data from "../utils/data";
import marvelData from "./marvel";
import Card from "./Card";

class Game extends Component {
  // Initial Score state
  state = {
    cards: Data,
    clicked: [],
    Score: 0,
    TopScore: 0
  };

  componentDidMount() {
    var storage = JSON.parse(localStorage.getItem("clickyGame")) || 0;

    console.log(Data);

    this.setState({ TopScore: storage || 0 });
  }

  scoreUpdate = () => {
    var newScore = this.state.Score + 1;
    this.setState(
      {
        Score: newScore,
        TopScore:
          this.state.TopScore < newScore ? newScore : this.state.TopScore
      },
      () =>
        localStorage.setItem("clickyGame", JSON.stringify(this.state.TopScore))
    );
  };

  randomizer(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  handleClick = id => {
    console.log(id, this.state.clicked);
    if (this.state.clicked.includes(id)) {
      console.log("RESET");
      this.setState({ clicked: [], Score: 0 });
    } else {
      this.scoreUpdate();
      this.setState({ clicked: [...this.state.clicked, id] });
    }
  };

  render() {
    const randomData = this.randomizer(marvelData);
    return (
      <div className="container">
        Score: {this.state.Score}, TopScore: {this.state.TopScore} <br />
        <div className="GameBox">
          {this.state.cards.map((card, i) => (
            <Card
              key={i + "-card"}
              card={card}
              handleClick={this.handleClick}
              background={randomData[i].image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Game;
