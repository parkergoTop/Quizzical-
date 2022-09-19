import React from "react";
import "./Question.css"

export default function Question(props){

 const answers = [...props.incorrect, props.correct]
    
  
   const ans = []
   for(let i = 0; i < answers.length; i ++){

    ans.push(<button value={answers[i]} onClick={ props.setClickedAns}>{answers[i]}</button>)
   }

    
    return(
    <div className="question-component">
        <h2 className="question-title">{props.question}</h2>
        <div className="answers">
            {ans}
        </div>
        <hr className="hr-line"/>
    </div>
    )
}