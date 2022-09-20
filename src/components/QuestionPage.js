import React, { useEffect } from "react";
import Question from "./Question";
import "./QuestionPage.css"

export default function QuestionPage(props){

   
   /*
   const [questions, setQues] = React.useState(props.ques.map(
      (element,index) => {
         
         return ({...element,"isAnswered":false, "id":index, "key":index})
                }));

   */
    

   // questions to fetch the question data from api, and add answered and id/key for each Question component
   const [questions,setQues] = React.useState([])

   // array state to store user's clicked answer for each <Question>  and the quetsion's id 
   const [clickedAns, setAns] = React.useState([]);
   
   // state to  store the count number that use have answered correctly
   const [correctCount, setCorrectCount] = React.useState(0);

   // if checked("Check answer" button clicked), set it to true
   // replay the game ("Play again button clicked"), set the value to false again (default)
   const [isChecked, setChecked] =React.useState(false);


   // set boolean state for checking the "checked Answer button" is clicked or not
   // if answered check, conditioally rendering "replay buton", and resetState
   const [isAnsed, setIsAnswered] = React.useState(false);


   //
   const [isClicked, setIsClicked] =React.useState(false);
   
   React.useEffect(()=>
   {
      setAns([]);
      setCorrectCount(0);
      setChecked(false)
      setIsAnswered(false)


      fetch("https://opentdb.com/api.php?amount=10")
      .then(res => res.json())
        .then(data => {

          console.log("data fetched")
          setQues(data.results.map(
                          (element,index) => {
               
                                        return ({...element,"isAnswered":false, "id":index, "key":index})
                                               }
                                     )
                   )

         }
         )},
        [isAnsed]);
      
      
      
      function changeAnswerBackround(){
         
      }
      
      console.log(questions)

      function setClickedAns(event,id, setClicked){
         // after clicked one answer, save the clicked answer value into an array clickedAns[]
         setAns(preState => [...preState, {"id": id, "ans": event.target.value}]);
      
         setClicked(true)    
         //after one answer get clicked, the answer shows another colour

      

         // after clciked on answer, disable the other options(buttons) by setting all of the diable: true
         setQues(preState => {
           return preState.map(
              element => {
               console.log("reset worked")
                 return (element.id === id ? {...element, "isAnswered":true} : element)
              }
           )
         });
      }
       
      console.log(clickedAns)

      

      // (1) set isAnswered state to ture (2) showing all correct answers  (3) counting all correctly answered questions
      function checkAnswers(){
         // make an array correctAnswer to store all quation id and its corresponding answer 
         setChecked(true)
         const correctAnswer = questions.map( element => {return {"id":element.id, "correct_ans": element.correct_answer}})
         console.log(correctAnswer)
         // showing all correct answers on display  ??
         
      
         
         // compare clicked ansewer and  correct answer: (1)question id is identical (2) id's corresponding answer is identical 
         // set correctly answered questions
         for(let i = 0; i < clickedAns.length; i++){
             for(let j = 0; j < correctAnswer.length;j++){
                 if(clickedAns[i].id == j && clickedAns[i].ans === correctAnswer[j].correct_ans)
                      setCorrectCount(preState => preState+1)
                   }
             }
            }

        //showing score 
        function showingScore(){
      
           return (<p className="scoring"> You scored {correctCount}/ 10 correct answers</p>)
        }

        /*
             for replay game, 
                  (1) app need to fetch the data again 
                  (2) clickedans/questions/correctCount/ all statesneeds to reinitilised (re-load QuestionPage) by using useEffect to async states
                    
        */

        
       function replayGame(){
            setIsAnswered(true)
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
           <div className="question-display">{questionDisplay}</div>
           {isChecked? 
                <div className="checked">
                {showingScore()} 
                
                <button onClick = {replayGame}className="check-button"> Play Again</button> 
                </div> :
                <button  onClick={checkAnswers} className="check-button"> Check answers</button>
                }
           
        </div>
     )

}