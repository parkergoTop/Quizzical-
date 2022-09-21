import React, { useEffect } from "react";
import "./Question.css"
import "./Answer"
import Answer from "./Answer";

export default function Question(props){

 
  
  const [answers,setAns] = React.useState([])
  
   
  
  
  
   

    
    function shuffle(answers) {
        var currentIndex = answers.length, randomIndex;
     
       while(currentIndex !=0 ){
       
       randomIndex = Math.floor(Math.random()* currentIndex);
      
     // Math Math.random() return random [0, 1)
     // Math.floor() always rounds down and returns the largets integer

         currentIndex--;
      
        // And swap it with the current element.
    
      [ answers[currentIndex], answers[randomIndex] ] = 
      [ answers[randomIndex], answers[currentIndex]]
    
       }

      return answers
    }
    
    useEffect( () => {
     
     setAns(shuffle([...props.incorrect, props.correct]))}, [props.question])

    


  function displayAns(){
    const ans = [];
    for(let i = 0; i < answers.length; i ++){
       ans.push(
        <Answer 
             key={answers[i]}
             id={props.id}
             setClickedAns ={props.setClickedAns} 
             correct ={props.correct}
             isAnswered ={props.isAnswered} 
             answer={answers[i]}
             isReplayed={props.isReplayed}
             isChecked={props.isChecked}/>
       )
  
   }
   return ans
  } 
    
   // render  {props.question}, react wont deal with "HTML Entity"
   // find the entity number and convert them into html  entity, by adding <span> </span> around
   function decodeQuestion(){
       var txt = document.createElement("textarea");
       txt.innerHTML = props.question
       return txt.value;
   }





    return(
    <div className="question-component">
       <p className="question-title">  {decodeQuestion()}</p>
       <div className="answers">
         
            {displayAns()}
         
        </div>
        <hr className="hr-line"/>
      </div>
    )
}