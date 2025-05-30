import React, { useState } from 'react';
import './App.css';
import words from "./wordList.json"
import { HangmanDrawing } from './component/HangmanDrawing';
import { HangmanWord } from './component/HangmanWord';
import { Keyboard } from './component/Keyboard';

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return "test"
    // return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>(["g", "t", "o"])

  const inCorrectletters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )
  return (
    <div style={{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      margin: "0 auto",
      alignItems: "center"
    }}>
       <div style={{ fontSize: "2rem", textAlign:"center" }}>
      Lose Win
       </div>
       <HangmanDrawing numberofGuesses={inCorrectletters.length}/>
       <HangmanWord/>
       <div style={{ alignSelf: "stretch" }}>
       <Keyboard/>
       </div>
       
    </div>
  );
}

export default App;
