import React from "react"
import "./App.css"
import Enter from "./Enter"



import QuestionPage from "./QuestionPage"


export default function App(){
  const [startGame, setStart]=React.useState(false)
  const [ques, setQues] = React.useState([])

   function enterGame(){
    setStart(true);
   }
    


  React.useEffect(()=>{fetch("https://opentdb.com/api.php?amount=10").then(res => res.json()).then(data => setQues(data.results))}, [])  
 
  
   

 
    return(
      <div className="main">
         {startGame ?  <QuestionPage  ques = {ques}/> : <Enter enterGame = {enterGame}/>}
      </div>
    )

}