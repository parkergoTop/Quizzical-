import React from "react";

export default function Answer(props){

  const [isClicked, setClicked]=React.useState(false)
  const [bgColor, setBgColor] = React.useState("")
  

  React.useEffect(() => {
     if( props.isChecked && props.answer ===props.correct){
      setBgColor("#94D7A2")
     }else if  (isClicked && props.isChecked && props.answer != props.correct){
      setBgColor("#F8BCBC")
     } 
  }, [props.isChecked])


  // !! useEffect will run  one time for initial render, no matter we set isClicked or not
  React.useEffect(() => {
      isClicked ? setBgColor("#D6DBF5") : setBgColor("white")
        console.log("color changed by use effect")
  }, [ isClicked])

   React.useEffect (() => {
      props.isReplayed && setClicked(false)
   }, [props.isReplayed])
 

    return(<input type="button" 
                  id="choices" 
                  value={props.answer}
                  onClick={ () => props.setClickedAns(event,props.id, setClicked)} 
                  disabled={props.isAnswered}
                  style ={ {backgroundColor : bgColor,}}/>)
}
