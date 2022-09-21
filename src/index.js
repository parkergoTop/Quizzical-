import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

import App from "./components/App"
import topImg from "./images/backgroundTop.png"
import bottomImg from "./images/backgroundBottom.png"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<div>
<img className="background-top" src={topImg}/>
<App/>

<img className="background-bottom" src={bottomImg}/>

</div>)