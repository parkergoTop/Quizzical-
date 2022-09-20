import React from "react";

export default function Answer(props){

  const [isClicked, setClicked]=React.useState(false)
  

  React.useEffect(() => {
     setClicked(false)
  }, [props.isReplayed])




    return(<input type="button" 
                  id="choices" 
                  value={props.answer}
                  onClick={ () => props.setClickedAns(event,props.id, setClicked)} 
                  disabled={props.isAnswered}

                  style ={{ 
                    backgroundColor : isClicked? "#D6DBF5" : "whilte",
                    }}
/>)
}
