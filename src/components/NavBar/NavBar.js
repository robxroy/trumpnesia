import React from "react";
import "./NavBar.css";

const NavBar = props => (

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <h3 className="navbar-text">Trumpster Fire, Memory Game</h3>
    {/* <span className="navbar-text your-guess">{props.userGuess}</span> */}
    <span className="navbar-text your-score">Your Score: {props.currentScore}</span>
    <span className="navbar-text high-score">High Score: {props.highScore}</span>
</nav>

);

export default NavBar;
