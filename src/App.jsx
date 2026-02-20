import { useState } from "react"
import { languages } from "./languages"

export default function AssemblyEndgame() {
  const [currentWord, setCurrentWord] = useState("react")

  const [guessedLetters, setGuessedLetters] = useState([])

  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  function addGuessedLetter(letter) {
    setGuessedLetters(prevLetters => [...prevLetters, letter])
  }

  const languageElements = languages.map(lang => {
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color
    }
    return (
      <span
        className="chip"
        style={styles}
        key={lang.name}
      >
        {lang.name}
      </span>
    )
  })

  const letterElements = currentWord.split("").map((letter, index) => (
    <span key={index}>{letter.toUpperCase()}</span>
  ))

  const keyboardElements = alphabet.split("").map(letter => (
    <button
      key={letter}
      onClick={() => addGuessedLetter(letter)}
    >
      {letter.toUpperCase()}
    </button>
  ))


}