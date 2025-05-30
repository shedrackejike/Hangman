import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import words from "./wordList.json"
import { HangmanDrawing } from './component/HangmanDrawing';
import { HangmanWord } from './component/HangmanWord';
import { Keyboard } from './component/Keyboard';

function getWord() {
  return words[Math.floor(Math.random() * words.length)]

}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord)
  const [guessedLetters, setGuessedLetters] = useState<string[]>(["g", "t", "o"])

  const inCorrectletters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  const isLoser = inCorrectletters.length >= 6
  const isWiner = wordToGuess.split("").every(letter => guessedLetters.includes(letter) )

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || isLoser || isWiner) return

    setGuessedLetters(currentLetters => [...currentLetters, letter])

  }, [guessedLetters, isWiner, isLoser])



  useEffect(() => {
    const hander = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)

    }

    document.addEventListener("keypress", hander)

    return () => {
      document.removeEventListener("keypress", hander)
    }
  }, [guessedLetters])

  useEffect(() => {
    const hander = (e: KeyboardEvent) => {
      const key = e.key
      if (key !== "Enter") return
      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord())
    }

    document.addEventListener("keypress", hander)

    return () => {
      document.removeEventListener("keypress", hander)
    }
  },[])

  return (
    <div style={{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      margin: "0 auto",
      alignItems: "center"
    }}>
      <div style={{ fontSize: "2rem", textAlign: "center" }}>
        {isWiner && "winner! - Refresh to try again"}
        {isLoser && "Nice Try! - Refresh to try again"}

      </div>
      <HangmanDrawing numberofGuesses={inCorrectletters.length} />
      <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard 
        disabled = {isWiner || isLoser}
         activeLetters ={guessedLetters.filter(letter => wordToGuess.includes(letter))}
          inactiveLetters={inCorrectletters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>

    </div>
  );
}

export default App;
