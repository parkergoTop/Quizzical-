import React  from "react";
import "./Enter.css"


export default function Enter(props){
   return(
    <div className = "enter-page">
          <h1 className="title">Quizzical</h1>
          <p className="description"> Check the question, see how quizzical you are</p>
          <button className="quiz-btn" onClick = {props.enterGame}>Start quiz</button>
         
    </div>
   )
}