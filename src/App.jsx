import logo from "/logo.png";
import "./App.css";
import { getRandomWord } from "./utils";
import { useState } from "react";
import { useEffect } from "react";
import { AddGuess } from "./component/userGuess";
import { LivesLeft } from "./component/lifeleft";

function App() {
  // currWord is the current secret word for this round. Update this with the updater function after each round.
  const [currWord, setCurrentWord] = useState(getRandomWord());
  // guessedLetters stores all letters a user has guessed so far
  const [guessedLetters, setGuessedLetters] = useState([]);

  // Add additional states below as required.

  //4. The existing starter code logic will read guessedLetters and render correctly-guessed letters in the Word Display section and render all guessed letters in the Guessed Letters section.
  const generateWordDisplay = () => {
    const wordDisplay = [];
    // for...of is a string and array iterator that does not use index
    for (let letter of currWord) {
      if (guessedLetters.includes(letter)) {
        wordDisplay.push(letter);
      } else {
        wordDisplay.push("_");
      }
    }

    return wordDisplay.toString();
  };

  //5. Add logic and state to track whether the user has guessed all letters of the word and how many guesses the user has left (can start with 10).
  const [gameRounds, setGameRounds] = useState(10);
  // const [score, setScore] = useState(0);

  //6. If the user guesses all letters correctly, tell them they have won. If the user runs out of guesses, reveal the word and tell them they have lost.
  // create additional function to power the

  const checkWinCondition = () => {
    //create s shallow copy of the guessed letters
    const currGuessedLetters = [...guessedLetters];

    for (let letter of currWord) {
      if (!currGuessedLetters.includes(letter)) {
        return false;
      }
    }
    return true;
    // returns true if guessedletters contains all letters in current word.
  };
  const checkWin = checkWinCondition();

  const endGame = () => {
    if (checkWin) {
      return <h1>You won!</h1>;
    }
    if (gameRounds === 0 && !checkWin) {
      return (
        <h2 color="red">
          You lost! The answer is "{currWord}"". Restart to play again!
        </h2>
      );
    } else {
      return (
        <p>
          <AddGuess
            guessedLetters={guessedLetters}
            setGuessedLetters={setGuessedLetters}
            gameRounds={gameRounds}
            setGameRounds={setGameRounds}
          />
        </p>
      );
    }
  };

  //7. When the round ends, give the user an option to play again.
  const NewGame = () => {
    setCurrentWord(getRandomWord());
    setGuessedLetters([]);
    setGameRounds(10);
  };
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="Rocket logo" />
      </div>
      <div className="card">
        <h1>Guess The Word 🚀</h1>
        <LivesLeft gameRounds={gameRounds} setGameRounds={setGameRounds} />
        <h3>Word Display</h3>
        {generateWordDisplay()}
        <h3>Guessed Letters</h3>
        {guessedLetters.length > 0 ? guessedLetters.toString() : "-"}
        <br />
        <p>Number of Guesses: {gameRounds} </p>
        <h3>Input your guess</h3>

        {endGame()}

        <p></p>
        <button onClick={NewGame}>Restart</button>
      </div>
    </>
  );
}

export default App;
