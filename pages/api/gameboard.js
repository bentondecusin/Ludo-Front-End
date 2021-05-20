import gb from '../../styles/gb.module.css'
import React, { useState, useEffect } from 'react'
function notifyUpdate(last_board){
  
}
function Sq(prop){
  //txt
  const pos = prop.pos == undefined ? "" : prop.pos
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
      "last_update" : pos
    },
    response:{"Access-Control-Request-Headers" : "http://localhost:2333" }
    ,
    credentials: "include",
    body: JSON.stringify()
  };
  async function clickcell(){
    const resp = fetch("../api/hello",requestOptions).then(async (res) => 
    { 
      console.log(res)
    });
    return resp
  }
  return (<div className={gb.square} r={prop.r} c={prop.c} style={{backgroundColor : prop.cl}} 
  onClick={clickcell}>
    {text}
  </div>)
}

export default function GameBoard() {
  const [state, setState] = useState(
    {0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1, 9: 1, 10: 1, 11: 1, 12: 1, 13: 1, 14: 1, 15: 1, d: 6, p: 0}
  )
  const token_emojis = [
    "🐟","🐬","🐳","🐋",
    "🥖","🥐","🧀","🧇",
    "🦑","🦐","🦞","🦀",
    "🥦","🥬","🥒","🍏"]
  
  return (
    <div>
      <div></div>
      <div>
        <Sq cl="green" r="1" c="1" pos="16"></Sq>
        <Sq cl="green" r="1" c="2" pos="13"></Sq>
        <Sq cl="black" r="1" c="3"></Sq>
        <Sq cl="black" r="1" c="4"></Sq>
        <Sq cl="lightgrey" r="1" c="5" pos="38"></Sq>
        <Sq cl="lightgrey" r="1" c="6" pos="39"></Sq>
        <Sq cl="lightgrey"  r="1" c="7" pos="0" txt="↓"></Sq>
        <Sq cl="black" r="1" c="8"></Sq>
        <Sq cl="black" r="1" c="9"></Sq>
        <Sq cl="blue" r="1" c="10" pos="-4"></Sq>
        <Sq cl="blue" r="1" c="11" pos="-1"></Sq>
      </div>
      <div>
        <Sq cl="green" r="2" c="1" pos="15"></Sq>
        <Sq cl="green" r="2" c="2" pos="14"></Sq>
        <Sq cl="black" r="2" c="3"></Sq>
        <Sq cl="black" r="2" c="4"></Sq>
        <Sq cl="lightgrey" r="2" c="5" pos="37"></Sq>
        <Sq cl="lightblue" r="2" c="6" pos="40"></Sq>
        <Sq cl="lightgrey" r="2" c="7" pos="1"></Sq>
        <Sq cl="black" r="2" c="8"></Sq>
        <Sq cl="black" r="2" c="9"></Sq>
        <Sq cl="blue" r="2" c="10" pos="-3"></Sq>
        <Sq cl="blue" r="2" c="11" pos="-2"></Sq>
      </div>
      <div>
        <Sq cl="black" r="3" c="1" ></Sq>
        <Sq cl="black" r="3" c="2" ></Sq>
        <Sq cl="black" r="3" c="3" ></Sq>
        <Sq cl="black" r="3" c="4" ></Sq>
        <Sq cl="lightgrey" r="3" c="5" pos="36"></Sq>
        <Sq cl="lightblue" r="3" c="6" pos="41"></Sq>
        <Sq cl="lightgrey" r="3" c="7" pos="2"></Sq>
        <Sq cl="black" r="3" c="8" ></Sq>
        <Sq cl="black" r="3" c="9" ></Sq>
        <Sq cl="black" r="3" c="10" ></Sq>
        <Sq cl="black" r="3" c="11" ></Sq>
      </div>
      <div>
        <Sq cl="black" r="4" c="1" ></Sq>
        <Sq cl="black" r="4" c="2" ></Sq>
        <Sq cl="black" r="4" c="3" ></Sq>
        <Sq cl="black" r="4" c="4" ></Sq>
        <Sq cl="lightgrey" r="4" c="5" pos="35"></Sq>
        <Sq cl="lightblue" r="4" c="6" pos="42"></Sq>
        <Sq cl="lightgrey" r="4" c="7" pos="3"></Sq>
        <Sq cl="black" r="4" c="8" ></Sq>
        <Sq cl="black" r="4" c="9" ></Sq>
        <Sq cl="black" r="4" c="10" ></Sq>
        <Sq cl="black" r="4" c="11" ></Sq>
      </div>
      <div>
        <Sq cl="lightgrey" txt="→" r="5" c="1" pos="30"></Sq>
        <Sq cl="lightgrey" r="5" c="2" pos="31"></Sq>
        <Sq cl="lightgrey" r="5" c="3" pos="32"></Sq>
        <Sq cl="lightgrey" r="5" c="4" pos="33"></Sq>
        <Sq cl="lightgrey" r="5" c="5" pos="34"></Sq>
        <Sq cl="lightblue" r="5" c="6" pos="43"></Sq>
        <Sq cl="lightgrey" r="5" c="7" pos="4"></Sq>
        <Sq cl="lightgrey" r="5" c="8" pos="5"></Sq>
        <Sq cl="lightgrey" r="5" c="9" pos="6"></Sq>
        <Sq cl="lightgrey" r="5" c="10" pos="7"></Sq>
        <Sq cl="lightgrey" r="5" c="11" pos="8"></Sq>
      </div>
      <div>
        <Sq cl="lightgrey" r="6" c="1" pos="29"></Sq>
        <Sq cl="lightgreen" r="6" c="2" pos="52"></Sq>
        <Sq cl="lightgreen" r="6" c="3" pos="53"></Sq>
        <Sq cl="lightgreen" r="6" c="4" pos="54"></Sq>
        <Sq cl="lightgreen" r="6" c="5" pos="55"></Sq>
        <Sq cl="black" r="6" c="6" pos="44"></Sq>
        <Sq cl="lightyellow" r="6" c="7" pos="47"></Sq>
        <Sq cl="lightyellow" r="6" c="8" pos="46"></Sq>
        <Sq cl="lightyellow" r="6" c="9" pos="45"></Sq>
        <Sq cl="lightyellow" r="6" c="10" pos="44"></Sq>
        <Sq cl="lightgrey" r="6" c="11" pos="9"></Sq>
      </div> 
      <div>
        <Sq cl="lightgrey" r="7" c="1" pos="28"></Sq>
        <Sq cl="lightgrey" r="7" c="2" pos="27"></Sq>
        <Sq cl="lightgrey" r="7" c="3" pos="26"></Sq>
        <Sq cl="lightgrey" r="7" c="4" pos="25"></Sq>
        <Sq cl="lightgrey" r="7" c="5" pos="24"></Sq>
        <Sq cl="coral" r="7" c="6" pos="51"></Sq>
        <Sq cl="lightgrey" r="7" c="7" pos="14"></Sq>
        <Sq cl="lightgrey" r="7" c="8" pos="13"></Sq>
        <Sq cl="lightgrey" r="7" c="9" pos="12"></Sq>
        <Sq cl="lightgrey" r="7" c="10" pos="11"></Sq>
        <Sq cl="lightgrey" txt="←" r="7" c="11" pos="10"></Sq>
      </div>
      <div>
        <Sq cl="black" r="8" c="1" ></Sq>
        <Sq cl="black" r="8" c="2" ></Sq>
        <Sq cl="black" r="8" c="3" ></Sq>
        <Sq cl="black" r="8" c="4" ></Sq>
        <Sq cl="lightgrey" r="8" c="5" pos="23"></Sq>
        <Sq cl="coral" r="8" c="6" pos="50"></Sq>
        <Sq cl="lightgrey" r="8" c="7" pos="15"></Sq>
        <Sq cl="black" r="8" c="8" ></Sq>
        <Sq cl="black" r="8" c="9" ></Sq>
        <Sq cl="black" r="8" c="10" ></Sq>
        <Sq cl="black" r="8" c="11" ></Sq>
      </div>
      <div>
        <Sq cl="black" r="9" c="1" ></Sq>
        <Sq cl="black" r="9" c="2" ></Sq>
        <Sq cl="black" r="9" c="3" ></Sq>
        <Sq cl="black" r="9" c="4" ></Sq>
        <Sq cl="lightgrey" r="9" c="5" pos="22"></Sq>
        <Sq cl="coral" r="9" c="6" pos="49"></Sq>
        <Sq cl="lightgrey" r="9" c="7" pos="16"></Sq>
        <Sq cl="black" r="9" c="8" ></Sq>
        <Sq cl="black" r="9" c="9" ></Sq>
        <Sq cl="black" r="9" c="10" ></Sq>
        <Sq cl="black" r="9" c="11" ></Sq>
      </div>
      <div>
        <Sq cl="red" r="10" c="1" pos="-12"></Sq>
        <Sq cl="red" r="10" c="2" pos="-9"></Sq>
        <Sq cl="black" r="10" c="3" ></Sq>
        <Sq cl="black" r="10" c="4" ></Sq>
        <Sq cl="lightgrey" r="10" c="5" pos="21"></Sq>
        <Sq cl="coral" r="10" c="6" pos="48"></Sq>
        <Sq cl="lightgrey" r="10" c="7" pos="17"></Sq>
        <Sq cl="black" r="10" c="8" ></Sq>
        <Sq cl="black" r="10" c="9" ></Sq>
        <Sq cl="yellow" r="10" c="10" pos="-8"></Sq>
        <Sq cl="yellow" r="10" c="11" pos="-5"></Sq>
      </div>
      <div>
        <Sq cl="red" r="1" c="1" pos="-11"></Sq>
        <Sq cl="red" r="1" c="2" pos="-10"></Sq>
        <Sq cl="black" r="1" c="3" ></Sq>
        <Sq cl="black" r="1" c="4" ></Sq>
        <Sq cl="lightgrey" txt="↑" r="1" c="5" pos="20"></Sq>
        <Sq cl="lightgrey" r="1" c="6" pos="19"></Sq>
        <Sq cl="lightgrey" r="1" c="7" pos="18"></Sq>
        <Sq cl="black" r="1" c="8" ></Sq>
        <Sq cl="black" r="1" c="9" ></Sq>
        <Sq cl="yellow" r="1" c="10" pos="-7"></Sq>
        <Sq cl="yellow" r="1" c="11" pos="-6"></Sq>
      </div>
    </div>
  );
}