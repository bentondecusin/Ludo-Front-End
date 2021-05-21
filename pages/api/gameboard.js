import gb from '../../styles/gb.module.css'
import React, { useState, useEffect } from 'react'
import styles from '../../styles/Home.module.css'

function notifyUpdate(last_board){
  
}

const startRequest = {
  headers : {
    "cmd" : "s"
  }
}

var token_pos = []
// document.querySelector("div[r='1'][c='1']")
// document.querySelector("div[pos='1']")
const token_emojis = [
  "🐟","🐬","🐳","🐋",
  "🥖","🥐","🧀","🧇",
  "🦑","🦐","🦞","🦀",
  "🥦","🥬","🥒","🍏","🎲"]

function Sq(prop){
  const tkp = prop.tkp
  const pos = prop.pos == undefined ? -99 : Number(prop.pos)
  const orig = tkp.includes(pos) ? token_emojis[tkp.indexOf(pos)] : prop.txt 
  const reqOpt = {
    method: 'POST',
    headers : {
      "cmd" : prop.pos
    }
  }; 
  // async function clickcell(){
  //   var tokens = []
  //   const resp = fetch("../api/exchange", requestOptions).then(async (res) => 
  //   res.json()).then((json) => {
  //     console.log(json); //print current json
  //     console.log(json)
  //     for (var i = 0; i < 16; i++) tokens.push((json[i] == undefined) ? -420 : json[i])
  //     GameBoard.setState(tokens)
  //   }
  //     );
  //   return resp
  // }
  console.log(tkp)
  return (<div className={gb.square} r={prop.r} c={prop.c} pos={prop.pos} style={{backgroundColor : prop.cl}} 
    onClick={prop.clk}> <a class={gb.tk} href="javascript:void(0);">{orig}</a>
  </div>)
}

export default function GameBoard() {

  const [tkp, SetTokenPos] = useState(
    [-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,0,0]
  )
  const clk = function(reqOpt){
    fetch("../api/exchange", reqOpt).then(async (res) => 
    res.json()).then((json) => {
      var tokens = []
      console.log(json); //print current json
      for (var i = 0; i < 16; i++) tokens.push((json[i] == undefined) ? -420 : json[i])
        SetTokenPos(tokens)
      }
    );
  }


  fetch("../api/exchange",startRequest).then(async (res) => 
    res.json()).then((json) => {console.log(json)})


  console.log(token_pos)
  var st = {}
  return (
    <div>
      <div></div>
      {/* <div>{token_pos.map((tk_pos,tk_id)=>{
         return <Tk tk_id={tk_id}></Tk>
        })}
      </div> */}
      <div>
        <Sq cl="green" r="1" c="1" pos="-16" clk={clk} tkp={tkp}></Sq>
        <Sq cl="green" r="1" c="2" pos="-13" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="1" c="3" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="1" c="4" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="1" c="5" pos="38" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="1" c="6" pos="39" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey"  r="1" c="7" pos="0" txt="↓" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="1" c="8" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="1" c="9" clk={clk} tkp={tkp}></Sq>
        <Sq cl="blue" r="1" c="10" pos="-4" clk={clk} tkp={tkp}></Sq>
        <Sq cl="blue" r="1" c="11" pos="-1" clk={clk} tkp={tkp}></Sq>
      </div>
      <div>
        <Sq cl="green" r="2" c="1" pos="-15" clk={clk} tkp={tkp}></Sq>
        <Sq cl="green" r="2" c="2" pos="-14" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="2" c="3" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="2" c="4" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="2" c="5" pos="37" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightblue" r="2" c="6" pos="40" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="2" c="7" pos="1" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="2" c="8" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="2" c="9" clk={clk} tkp={tkp}></Sq>
        <Sq cl="blue" r="2" c="10" pos="-3" clk={clk} tkp={tkp}></Sq>
        <Sq cl="blue" r="2" c="11" pos="-2" clk={clk} tkp={tkp}></Sq>
      </div>
      <div>
        <Sq cl="black" r="3" c="1"  clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="3" c="2"  clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="3" c="3"  clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="3" c="4"  clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="3" c="5" pos="36" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightblue" r="3" c="6" pos="41" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="3" c="7" pos="2" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="3" c="8"  clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="3" c="9"  clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="3" c="10"  clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="3" c="11"  clk={clk} tkp={tkp}></Sq>
      </div>
      <div>
        <Sq cl="black" r="4" c="1"  clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="4" c="2"  clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="4" c="3"  clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="4" c="4"  clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="4" c="5" pos="35" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightblue" r="4" c="6" pos="42" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="4" c="7" pos="3" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="4" c="8"  clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="4" c="9"  clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="4" c="10"  clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="4" c="11"  clk={clk} tkp={tkp}></Sq>
      </div>
      <div>
        <Sq cl="lightgrey" txt="→" r="5" c="1" pos="30" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="5" c="2" pos="31" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="5" c="3" pos="32" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="5" c="4" pos="33" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="5" c="5" pos="34" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightblue" r="5" c="6" pos="43" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="5" c="7" pos="4" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="5" c="8" pos="5" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="5" c="9" pos="6" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="5" c="10" pos="7" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="5" c="11" pos="8" clk={clk} tkp={tkp}></Sq>
      </div>
      <div>
        <Sq cl="lightgrey" r="6" c="1" pos="29" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgreen" r="6" c="2" pos="52" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgreen" r="6" c="3" pos="53" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgreen" r="6" c="4" pos="54" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgreen" r="6" c="5" pos="55" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="6" c="6" pos="44" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightyellow" r="6" c="7" pos="47" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightyellow" r="6" c="8" pos="46" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightyellow" r="6" c="9" pos="45" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightyellow" r="6" c="10" pos="44" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="6" c="11" pos="9" clk={clk} tkp={tkp}></Sq>
      </div> 
      <div>
        <Sq cl="lightgrey" r="7" c="1" pos="28" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="7" c="2" pos="27" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="7" c="3" pos="26" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="7" c="4" pos="25" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="7" c="5" pos="24" clk={clk} tkp={tkp}></Sq>
        <Sq cl="coral" r="7" c="6" pos="51" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="7" c="7" pos="14" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="7" c="8" pos="13" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="7" c="9" pos="12" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="7" c="10" pos="11" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" txt="←" r="7" c="11" pos="10" clk={clk} tkp={tkp}></Sq>
      </div>
      <div>
        <Sq cl="black" r="8" c="1"  clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="8" c="2"  clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="8" c="3"  clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="8" c="4"  clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="8" c="5" pos="23" clk={clk} tkp={tkp}></Sq>
        <Sq cl="coral" r="8" c="6" pos="50" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="8" c="7" pos="15" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="8" c="8"  clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="8" c="9"  clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="8" c="10"  clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="8" c="11"  clk={clk} tkp={tkp}></Sq>
      </div>
      <div>
        <Sq cl="black" r="9" c="1"  clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="9" c="2"  clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="9" c="3"  clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="9" c="4"  clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="9" c="5" pos="22" clk={clk} tkp={tkp}></Sq>
        <Sq cl="coral" r="9" c="6" pos="49" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="9" c="7" pos="16" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="9" c="8"  clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="9" c="9"  clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="9" c="10"  clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="9" c="11"  clk={clk} tkp={tkp}></Sq>
      </div>
      <div>
        <Sq cl="red" r="10" c="1" pos="-12" clk={clk} tkp={tkp}></Sq>
        <Sq cl="red" r="10" c="2" pos="-9" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="10" c="3"  clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="10" c="4"  clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="10" c="5" pos="21" clk={clk} tkp={tkp}></Sq>
        <Sq cl="coral" r="10" c="6" pos="48" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="10" c="7" pos="17" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="10" c="8"  clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="10" c="9"  clk={clk} tkp={tkp}></Sq>
        <Sq cl="yellow" r="10" c="10" pos="-8" clk={clk} tkp={tkp}></Sq>
        <Sq cl="yellow" r="10" c="11" pos="-5" clk={clk} tkp={tkp}></Sq>
      </div>
      <div>
        <Sq cl="red" r="1" c="1" pos="-11" clk={clk} tkp={tkp}></Sq>
        <Sq cl="red" r="1" c="2" pos="-10" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="1" c="3"  clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="1" c="4"  clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" txt="↑" r="1" c="5" pos="20" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="1" c="6" pos="19" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="1" c="7" pos="18" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="1" c="8"  clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="1" c="9"  clk={clk} tkp={tkp}></Sq>
        <Sq cl="yellow" r="1" c="10" pos="-7" clk={clk} tkp={tkp}></Sq>
        <Sq cl="yellow" r="1" c="11" pos="-6" clk={clk} tkp={tkp}></Sq>
      </div>
      <div className={styles.control_bar}>
      <Sq cl="black" r="1" c="11" pos="-100" txt="🎲" clk={clk} tkp={tkp}></Sq>
      <div><a>You got a </a><a>{6}</a></div>

  </div>
    </div>
  );
}