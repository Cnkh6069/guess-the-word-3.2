import { useState } from "react";

//Requirements
//1. When the user guesses a letter, add that letter to the App component's guessedLetters state.

export const AddGuess = ({
  guessedLetters,
  setGuessedLetters,
  gameRounds,
  setGameRounds,
}) => {
  //pushing parent state into component
  const [text, setText] = useState("");

  const handleClick = () => {
    setGuessedLetters([...guessedLetters, text]);
    setGameRounds(gameRounds - 1);
    setText("");
  };

  return (
    //2. Each guess can only consist of 1 letter at a time.
    //3. Consider using the spread operator when adding the new letter to trigger React to re-render.
    <>
      <input
        maxLength={1}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <p></p>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        My Guess is...
      </button>
    </>
  );
};
