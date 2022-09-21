import React from "react";

export default function Answer(props){

  const [isClicked, setClicked]=React.useState(false)
  const [bgColor, setBgColor] = React.useState("")
  console.log("not clicked")
 
   console.log(bgColor)

  React.useEffect(() => {
     setClicked(false)
  }, [props.isReplayed])


  // !! useEffect will run  one time for initial render, no matter we set isClicked or not
  React.useEffect(() => {
      isClicked ? setBgColor("#D6DBF5") : setBgColor("white")
        console.log("color changed by use effect")
  }, [ isClicked])

 
  console.log(bgColor)

    return(<input type="button" 
                  id="choices" 
                  value={props.answer}
                  onClick={ () => props.setClickedAns(event,props.id, setClicked)} 
                  disabled={props.isAnswered}
                  style ={ {backgroundColor : bgColor,}}/>)
}
