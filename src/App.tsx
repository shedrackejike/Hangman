import React, { useState } from 'react';
import './App.css';
import words from "./wordList.json"
import { HangmanDrawing } from './component/HangmanDrawing';
import { HangmanWord } from './component/HangmanWord';
import { Keyboard } from './component/Keyboard';

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
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
       <HangmanDrawing/>
       <HangmanWord/>
       <Keyboard/>
    </div>
  );
}

export default App;
