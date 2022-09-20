import React from "react";

export default function Answer(props){

    return(<input type="button" 
                  id="choices" 
                  value={props.answer}
                  onClick={ () => props.setClickedAns(event,props.id)} 
                  disabled={props.isAnswered}/>)
}