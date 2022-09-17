import React from "react";
import Question from "./Question";
import "./QuestionPage.css"

export default function QuestionPage(props){
    const clickAnswers = [];
    const[clickedAnswer, setClickedAnswer] = React.useState(clickAnswers)

    function handleAnswerClick(answer){
        setClickedAnswer(clickAnswers.push(answer))
    }
       
      const questionDisplay = props.ques.map(element => {return <Question 
        question = {element.question}
        incorrect ={element.incorrect_answers}
        correct={element.correct_answer}
        handleAnswerClick={handleAnswerClick}/>})

        //https://stackoverflow.com/questions/70556785/warning-cannot-update-a-component-x-while-rendering-a-different-y-component-to

    console.log(clickAnswers)
     return (
        <div className="question-page"> 
           <div>{questionDisplay}</div>
           <button className="check-button"> Check answers</button>
        </div>
     )

}