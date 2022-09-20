import React from "react";
import "./Question.css"
import "./Answer"
import Answer from "./Answer";

export default function Question(props){

 const answers = [...props.incorrect, props.correct]

  
 
  function displayAns(){
    const ans = [];
    for(let i = 0; i < answers.length; i ++){
       ans.push(
        <Answer 
             key={answers[i]}
             id={props.id}
             setClickedAns ={props.setClickedAns} 
             isAnswered ={props.isAnswered} 
             answer={answers[i]}/>
       )
  
   }
   return ans
  }
    
    return(
    <div className="question-component">
       <p className="question-title">{props.question}</p>
       <div className="answers">
         
            {displayAns()}
         
        </div>
        <hr className="hr-line"/>
      </div>
    )
}