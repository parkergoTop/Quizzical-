import React from "react"
import "./App.css"
import Enter from "./Enter"

import Question from "./Question"


export default function App(){
  const [startGame, setStart]=React.useState(false)

   function enterGame(){
    setStart(true);
   }

    return(
      <div>
         {startGame ? <Question/>: <Enter enterGame = {enterGame}/>}
         
      </div>
    )

}