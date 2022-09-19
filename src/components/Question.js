import React from "react";
import "./Question.css"

export default function Question(props){

 const answers = [...props.incorrect, props.correct]
 
  
 
   const ans = []
   for(let i = 0; i < answers.length; i ++){

    ans.push(
    <div>
    <input type="button" id="choices" value={answers[i]} onClick={ props.setClickedAns(event, props.id)} disabled={props.isAnswered}/>
    
    </div>)
   }
   
   
    
    return(
    <div className="question-component">
       <p className="question-title">{props.question}</p>
       <div className="answers">
         
            {ans}
         
        </div>
        <hr className="hr-line"/>
      </div>
    )
}