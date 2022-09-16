import React from "react";

export default function Question(props){
    return(
    <div className="question-component">
        <h2 className="question-title">What is the hottest planet in our solar system?</h2>
        <div className="answers">
            <button>Mercury</button>
            <button>Venus</button>
            <button>Mars</button>
            <button>Saturn</button>
        </div>
        <hr className="hr-line"/>
    </div>
    )
}