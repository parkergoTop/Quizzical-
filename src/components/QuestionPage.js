import React, { useEffect } from "react";
import Question from "./Question";
import "./QuestionPage.css"

export default function QuestionPage(props){
   
   const [questions, setQues] = React.useState([])
   const [clickans, setAns] = React.useState([]);


      
   

      useEffect( () => {
           setQues(props.ques.map(
            (element,index) => {
               console.log("question page state updated")
               return ({...element,"isAnswered":false, "id":index, "key":index})
                      }))
      }, [1])
       
      
      
      console.log(questions)

      function setClickedAns(event,id){
         setAns(preState => [...preState, event.target.value]);

         setQues(preState => {
           return preState.map(
              element => {
                 return (element.id === id ? {...element, "isAnswered":true} : element)
              }
           )
         });
      }


      const questionDisplay = questions.map(element => {return <Question 
        question = {element.question}
        incorrect ={element.incorrect_answers}
        correct={element.correct_answer}
        setClickedAns = {setClickedAns}
        isAnswered = {element.isAnswered}
        key={element.key}
        id={element.id}/>})

      
 
     return (
        <div className="question-page"> 
           <div>{questionDisplay}</div>
           <button className="check-button"> Check answers</button>
        </div>
     )

}