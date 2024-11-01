import React from "react";
import { useState } from "react";
import lose from "/lose.jpeg";
import full from "/full.png";
import nine from "/nine.jpeg";
import eight from "/eight.jpeg";
import seven from "/seven.jpeg";
import six from "/six.jpeg";
import five from "/five.jpeg";
import four from "/four.jpeg";
import three from "/three.jpeg";
import two from "/two.jpeg";
import one from "/one.jpeg";
import winner from "/winner.jpeg";

export const LivesLeft = ({ gameRounds, setGameRounds, checkWin }) => {
  if (checkWin) {
    return <img className="image" src={winner} />;
  }
  if (gameRounds === 0 && !checkWin) {
    return <img width="70%" src={lose} />;
  }
  if (gameRounds === 1 && !checkWin) {
    return <img className="image" src={one} />;
  }
  if (gameRounds === 2 && !checkWin) {
    return <img className="image" src={two} />;
  }
  if (gameRounds === 3 && !checkWin) {
    return <img className="image" src={three} />;
  }
  if (gameRounds === 4 && !checkWin) {
    return <img className="image" src={four} />;
  }
  if (gameRounds === 5 && !checkWin) {
    return <img className="image" src={five} />;
  }
  if (gameRounds === 6 && !checkWin) {
    return <img className="image" src={six} />;
  }
  if (gameRounds === 7 && !checkWin) {
    return <img className="image" src={seven} />;
  }
  if (gameRounds === 8 && !checkWin) {
    return <img className="image" src={eight} />;
  }
  if (gameRounds === 9 && !checkWin) {
    return <img className="image" src={nine} />;
  }

  return (
    <>
      <div>
        <img className="image" src={full} />
        <p>Let's Go!</p>
      </div>
    </>
  );
};
