import gb from '../../styles/gb.module.css'
import React, { useState, useEffect } from 'react'
function Sq(prop){
  const orig = prop.txt
  var tokenId = -1
  const [text, setText] = useState(orig)
  const setTokenId = function(i){
    setText("♦️")
  }
  const requestOptions = {
    method: 'POST',
    mode : 'cors',
    headers : {
      "Access-Control-Allow-Origin" : "http://localhost:2333",
      "last_update" : "m " + tokenId
    },
    response:{"Access-Control-Request-Headers" : "http://localhost:2333" }
    ,
    credentials: "include",
    body: JSON.stringify({ title: 'React POST Request Example' })
  };
  async function clickcell(){
    const resp = fetch("../api/hello",requestOptions).then(async (resp) => 
    { 
      console.log(resp)
    });
    return resp
  }
  return (<div className={gb.square} r={prop.r} c={prop.c} style={{backgroundColor : prop.cl}} 
  onClick={clickcell}>
    {text}
  </div>)
}

export default function GameBoard() {
  
  return (
    <div>
      <div></div>
      <div>
        <Sq cl="green" r="1" c="1"></Sq>
        <Sq cl="green"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="lightgrey"></Sq>
        <Sq cl="lightgrey"></Sq>
        <Sq cl="lightgrey" txt="↓"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="blue"></Sq>
        <Sq cl="blue"></Sq>
      </div>
      <div>
        <Sq cl="green"></Sq>
        <Sq cl="green"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="lightgrey"></Sq>
        <Sq cl="lightblue"></Sq>
        <Sq cl="lightgrey"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="blue"></Sq>
        <Sq cl="blue"></Sq>
      </div>
      <div>
        <Sq cl="black"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="lightgrey"></Sq>
        <Sq cl="lightblue"></Sq>
        <Sq cl="lightgrey"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="black"></Sq>
      </div>
      <div>
        <Sq cl="black"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="lightgrey"></Sq>
        <Sq cl="lightblue"></Sq>
        <Sq cl="lightgrey"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="black"></Sq>
      </div>
      <div>
        <Sq cl="lightgrey" txt="→"></Sq>
        <Sq cl="lightgrey"></Sq>
        <Sq cl="lightgrey"></Sq>
        <Sq cl="lightgrey"></Sq>
        <Sq cl="lightgrey"></Sq>
        <Sq cl="lightblue"></Sq>
        <Sq cl="lightgrey"></Sq>
        <Sq cl="lightgrey"></Sq>
        <Sq cl="lightgrey"></Sq>
        <Sq cl="lightgrey"></Sq>
        <Sq cl="lightgrey"></Sq>
      </div>
      <div>
        <Sq cl="lightgrey"></Sq>
        <Sq cl="lightgreen"></Sq>
        <Sq cl="lightgreen"></Sq>
        <Sq cl="lightgreen"></Sq>
        <Sq cl="lightgreen"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="lightyellow"></Sq>
        <Sq cl="lightyellow"></Sq>
        <Sq cl="lightyellow"></Sq>
        <Sq cl="lightyellow"></Sq>
        <Sq cl="lightgrey"></Sq>
      </div> 
      <div>
        <Sq cl="lightgrey"></Sq>
        <Sq cl="lightgrey"></Sq>
        <Sq cl="lightgrey"></Sq>
        <Sq cl="lightgrey"></Sq>
        <Sq cl="lightgrey"></Sq>
        <Sq cl="coral"></Sq>
        <Sq cl="lightgrey"></Sq>
        <Sq cl="lightgrey"></Sq>
        <Sq cl="lightgrey"></Sq>
        <Sq cl="lightgrey"></Sq>
        <Sq cl="lightgrey" txt="←"></Sq>
      </div>
      <div>
        <Sq cl="black"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="lightgrey"></Sq>
        <Sq cl="coral"></Sq>
        <Sq cl="lightgrey"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="black"></Sq>
      </div>
      <div>
        <Sq cl="black"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="lightgrey"></Sq>
        <Sq cl="coral"></Sq>
        <Sq cl="lightgrey"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="black"></Sq>
      </div>
      <div>
        <Sq cl="red"></Sq>
        <Sq cl="red"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="lightgrey"></Sq>
        <Sq cl="coral"></Sq>
        <Sq cl="lightgrey"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="yellow"></Sq>
        <Sq cl="yellow"></Sq>
      </div>
      <div>
        <Sq cl="red"></Sq>
        <Sq cl="red"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="lightgrey" txt="↑"></Sq>
        <Sq cl="lightgrey"></Sq>
        <Sq cl="lightgrey"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="black"></Sq>
        <Sq cl="yellow"></Sq>
        <Sq cl="yellow"></Sq>
      </div>
    </div>
  );
}