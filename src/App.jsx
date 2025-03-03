import { useEffect, useLayoutEffect, useState } from 'react'
import './App.css'
import data from "./assets/data/data.json"
import PlayerChoice from './components/playerchoice/PlayerChoice';
import logo from "../public/logo.svg"
import Battle from './components/battle/Battle';
function App() {
  const [mainMenu, setMainMenu] = useState(true); // useState to see where the game is currently at.
  const [playerChoice, setPlayerChoice] = useState(""); // find the players choice 
  const [botChoice, setBotChoice] = useState("") // find the computers choice
  const [score, setScore] = useState(0) // current score
  const [result, setResult] = useState(false)
  const rules = data[0]
  const choiceList = Object.keys(rules)
  const reset = () => {
    setMainMenu(true)
    setBotChoice("")
    setPlayerChoice("")
    setResult("")
  }
  const playerChoose = ((newChoice) => {  // function to change game state
    setPlayerChoice(newChoice)
    setTimeout(() => {
      let choix = choiceList[Math.floor(Math.random() * choiceList.length)]
      setBotChoice(choix)
      // checkWinner()

    }, 1000)

    setMainMenu(false)
  })
   const checkWinner = () => {
    if (playerChoice != "") {
      const playersAdvantage = rules[playerChoice]
      const botsAdvantage = rules[botChoice]
      if (((playerChoice == botChoice))) {
        setResult("Egalité")
      }
      else if (playersAdvantage.includes(botChoice)) {
        setScore(score + 1)
        setResult("You Win")
      }
      else if (botsAdvantage.includes(playerChoice)) {
        setResult("You Lose")
      }
    }
   }

  useEffect(() => {
    checkWinner()
  }, [botChoice])


  console.log("player plays : " + playerChoice + "\nComputer Plays : " + botChoice)

  return (
    <>
    <div>
      <img src={logo} alt="" />
      <h1 style={{ fontSize: "5rem" , color: "teal"}}>Current score : {score}</h1>
    </div>
      {mainMenu ?
        <PlayerChoice clickedUserChoice={playerChoose} />
        :
        <Battle playerChoice={playerChoice} botChoice={botChoice} reset={reset} result={result}/>
        }
    </>
  )
}

export default App
