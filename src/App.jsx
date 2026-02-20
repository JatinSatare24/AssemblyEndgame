import { useState } from "react"
import { languages } from "./languages"

export default function AssemblyEndgame() {
  const [currentWord, setCurrentWord] = useState("react")

  const [guessedLetters, setGuessedLetters] = useState([])

  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  function addGuessedLetter(letter) {
    setGuessedLetters(prevLetters => [...prevLetters, letter])
  }

  const letterElements = currentWord.split("").map((letter, index) => (
    <span key={index}>{letter.toUpperCase()}</span>
  ))


}