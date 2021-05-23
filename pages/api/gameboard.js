import gb from "../../styles/gb.module.css";
import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";

function getAllIndices(arr, val) {
  var indices = [],
    i;
  for (i = 0; i < 16; i++) if (arr[i] === val) indices.push(i);
  return indices;
}

const cmdReq = (cmd) => ({
  method: "POST",
  headers: {
    cmd: cmd,
  },
});

const startReq = {
  method: "POST",
  headers: {
    cmd: "s",
  },
};

var locked = true;
var cmd = "s";

var token_pos = [];
// document.querySelector("div[r='1'][c='1']")
// document.querySelector("div[pos='1']")
const token_emojis = [
  "🐟",
  "🐬",
  "🐳",
  "🐋",
  "🥖",
  "🥐",
  "🧀",
  "🧇",
  "🦑",
  "🦐",
  "🦞",
  "🦀",
  "🥦",
  "🥬",
  "🥒",
  "🍏",
  "🎲",
];

function InfoBar(props) {
  // const locked = props.locked;
  const setInfo = props.setInfo;
  const auto_move = props.m;
  const dice = props.dice;
  const setLock = props.unlock;
  const [toss, showDice] = useState("Click Here to Toss");
  const clk = () => {
    locked = false;
    console.log(auto_move);
    if (auto_move == -2) {
      setInfo("Dice: " + dice + "\n There's no token to move");
      setTimeout(() => {
        props.clk(cmdReq(auto_move));
        console.log("req done");
      }, 1000);
    } else {
      setInfo("Dice: " + dice);
    }
  };
  return (
    <div className={gb.info} onClick={clk}>
      <p href="javascript:void(0);">{props.info}</p>
    </div>
  );
}
function PlayerBox(props) {
  colors = ["blue", "yellow", "red", "green"];
  return (
    <div className={gb.dice} style={{ backgroundColor: colors[props.cl] }}>
      <a href="javascript:void(0);">{toss}</a>
    </div>
  );
}
function Tk(props) {
  const reqOpt = {
    method: "POST",
    headers: {
      cmd: props.tk_id,
    },
  };
  const clk = () => {
    props.tk_clk(reqOpt);
    console.log("token " + props.tk_id + " clicked");
  };
  return (
    <a
      href="javascript:void(0);"
      class={gb.tk}
      onClick={clk}
      href="javascript:void(0);"
    >
      {token_emojis[props.tk_id]}
    </a>
  );
}
function Sq(props) {
  const tkp = props.tkp;
  const pos = props.pos == undefined ? -99 : Number(props.pos);
  const tokens = getAllIndices(tkp, pos);
  const orig = props.txt;
  return (
    <div
      className={gb.square}
      r={props.r}
      c={props.c}
      pos={props.pos}
      style={{ backgroundColor: props.cl }}
    >
      <a class={gb.tk}>{orig}</a>
      {tokens.map((token) => (
        <Tk tk_clk={props.clk} tk_id={token}></Tk>
      ))}
    </div>
  );
}

export default function GameBoard(props) {
  const [started, getStarted] = useState(false);
  const [tkp, setTkp] = useState([]);
  const [m, setM] = useState(-2);
  const [info, setInfo] = useState("Click here to toss");
  // const [locked, setLock] = useState(true);
  // const unlock = () => setLock(false);
  // const lock = () => setLock(true);
  const clk = function (reqOpt) {
    if (!locked) {
      fetch("../api/exchange", reqOpt)
        .then(async (res) => res.json())
        .then((json) => {
          console.log(json);
          var tokens = [];
          for (var i = 0; i < 16; i++)
            tokens.push(json[i] == undefined ? -420 : json[i]);
          setTkp(tokens);
          //valid
          if (json["v"] == 1) {
            setInfo("Player " + json["p"] + " has moved");
            var m = json["m"];
            var d = json["d"];
            var p = json["p"];
            if (m >= 0) {
              console.log((Date.now() / 1000) % 60);
              setInfo("Player " + p + "(AI) got " + d);
              setTimeout(
                () => setInfo("Player " + p + "(AI) moves " + token_emojis[m]),
                1000
              );
              setTimeout(() => clk(cmdReq(m)), 1000);
            }
            if (json["m"] == -1) {
              console.log((Date.now() / 1000) % 60);
              setInfo(
                "Player " +
                  p +
                  "(AI) got " +
                  d +
                  "\nPlayer " +
                  p +
                  " has no movable tokens"
              );
              setTimeout(() => clk({}), 1000);
            }
            if (json["m"] == -2) {
              console.log((Date.now() / 1000) % 60);
              setM(-2);
              setDice(d);
              setInfo("Now turn for player " + p + "\nClick here to toss");
              // setLock(true);
              // setTimeout(() => clk({}), 1000);
            } else {
              console.log((Date.now() / 1000) % 60);
              setM(-3);
              // setLock(true);
              setDice(d);
              setInfo(
                "Now turn for player " + json["p"] + "\nClick here to toss"
              );
            }
          }
          if (json["v"] == 0)
            setInfo(
              "Invalid move for player " + json["p"] + "\nDice: " + json["d"]
            );
          else if (json["v"] == 3) setInfo("Game done!");
        });
    }
  };

  //Game Initialization
  const [dice, setDice] = useState(420);

  if (!started)
    fetch("http://localhost:6942/api/exchange", startReq)
      .then(async (res) => res.json())
      .then((json) => {
        getStarted(true);
        console.log("initial fetch successful");
        var tokens = [];
        for (var i = 0; i < 16; i++)
          tokens.push(json[i] == undefined ? -420 : json[i]);
        setTkp(tokens);
        setDice(json["d"]);
        console.log(json);
      })
      .catch((e) => {
        console.error(e);
        console.log("Initial fetch fails");
      });

  return (
    <div>
      <div>
        <Sq cl="green" r="1" c="1" pos="-16" clk={clk} tkp={tkp}></Sq>
        <Sq cl="green" r="1" c="2" pos="-13" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="1" c="3" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="1" c="4" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="1" c="5" pos="38" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="1" c="6" pos="39" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="1" c="7" pos="0" txt="↓" clk={clk} tkp={tkp}></Sq>
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
        <Sq cl="black" r="3" c="1" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="3" c="2" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="3" c="3" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="3" c="4" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="3" c="5" pos="36" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightblue" r="3" c="6" pos="41" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="3" c="7" pos="2" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="3" c="8" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="3" c="9" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="3" c="10" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="3" c="11" clk={clk} tkp={tkp}></Sq>
      </div>
      <div>
        <Sq cl="black" r="4" c="1" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="4" c="2" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="4" c="3" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="4" c="4" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="4" c="5" pos="35" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightblue" r="4" c="6" pos="42" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="4" c="7" pos="3" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="4" c="8" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="4" c="9" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="4" c="10" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="4" c="11" clk={clk} tkp={tkp}></Sq>
      </div>
      <div>
        <Sq
          cl="lightgrey"
          txt="→"
          r="5"
          c="1"
          pos="30"
          clk={clk}
          tkp={tkp}
        ></Sq>
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
        <Sq cl="black" r="6" c="6" pos="420" clk={clk} tkp={tkp}></Sq>
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
        <Sq
          cl="lightgrey"
          txt="←"
          r="7"
          c="11"
          pos="10"
          clk={clk}
          tkp={tkp}
        ></Sq>
      </div>
      <div>
        <Sq cl="black" r="8" c="1" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="8" c="2" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="8" c="3" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="8" c="4" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="8" c="5" pos="23" clk={clk} tkp={tkp}></Sq>
        <Sq cl="coral" r="8" c="6" pos="50" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="8" c="7" pos="15" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="8" c="8" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="8" c="9" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="8" c="10" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="8" c="11" clk={clk} tkp={tkp}></Sq>
      </div>
      <div>
        <Sq cl="black" r="9" c="1" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="9" c="2" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="9" c="3" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="9" c="4" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="9" c="5" pos="22" clk={clk} tkp={tkp}></Sq>
        <Sq cl="coral" r="9" c="6" pos="49" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="9" c="7" pos="16" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="9" c="8" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="9" c="9" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="9" c="10" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="9" c="11" clk={clk} tkp={tkp}></Sq>
      </div>
      <div>
        <Sq cl="red" r="10" c="1" pos="-12" clk={clk} tkp={tkp}></Sq>
        <Sq cl="red" r="10" c="2" pos="-9" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="10" c="3" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="10" c="4" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="10" c="5" pos="21" clk={clk} tkp={tkp}></Sq>
        <Sq cl="coral" r="10" c="6" pos="48" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="10" c="7" pos="17" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="10" c="8" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="10" c="9" clk={clk} tkp={tkp}></Sq>
        <Sq cl="yellow" r="10" c="10" pos="-8" clk={clk} tkp={tkp}></Sq>
        <Sq cl="yellow" r="10" c="11" pos="-5" clk={clk} tkp={tkp}></Sq>
      </div>
      <div>
        <Sq cl="red" r="1" c="1" pos="-11" clk={clk} tkp={tkp}></Sq>
        <Sq cl="red" r="1" c="2" pos="-10" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="1" c="3" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="1" c="4" clk={clk} tkp={tkp}></Sq>
        <Sq
          cl="lightgrey"
          txt="↑"
          r="1"
          c="5"
          pos="20"
          clk={clk}
          tkp={tkp}
        ></Sq>
        <Sq cl="lightgrey" r="1" c="6" pos="19" clk={clk} tkp={tkp}></Sq>
        <Sq cl="lightgrey" r="1" c="7" pos="18" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="1" c="8" clk={clk} tkp={tkp}></Sq>
        <Sq cl="black" r="1" c="9" clk={clk} tkp={tkp}></Sq>
        <Sq cl="yellow" r="1" c="10" pos="-7" clk={clk} tkp={tkp}></Sq>
        <Sq cl="yellow" r="1" c="11" pos="-6" clk={clk} tkp={tkp}></Sq>
      </div>
      <div className={styles.control_bar}>
        <InfoBar
          cl="white"
          r="1"
          c="11"
          clk={clk}
          info={info}
          // locked={lock}
          // unlock={setLock}
          dice={dice}
          m={m}
          setInfo={setInfo}
        ></InfoBar>
      </div>
    </div>
  );
}
