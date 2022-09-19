import React from "react";
import Question from "./Question";
import "./QuestionPage.css"

export default function QuestionPage(props){
     
      
      const [clickans, setAns] = React.useState([]);

      function setClickedAns(event){
         
         setAns(preState => {return [...preState, event.target.value]})
      }
      
      console.log(clickans)
       
      const questionDisplay = props.ques.map(element => {return <Question 
        question = {element.question}
        incorrect ={element.incorrect_answers}
        correct={element.correct_answer}
       
        setClickedAns = {setClickedAns}/>})

        //https://stackoverflow.com/questions/70556785/warning-cannot-update-a-component-x-while-rendering-a-different-y-component-to

 
     return (
        <div className="question-page"> 
           <div>{questionDisplay}</div>
           <button className="check-button"> Check answers</button>
        </div>
     )

}