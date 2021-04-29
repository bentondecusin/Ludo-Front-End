import Head from 'next/head'
import styles from '../styles/Home.module.css'
import gb from '../styles/gb.module.css'
import React, { useState } from 'react'

function Sq(prop){
  const orig = prop.txt
  const [token, setToken] = useState(orig)
  return (<div className={gb.square} r={prop.r} c={prop.c} style={{backgroundColor : prop.cl}} >
    {token}
  </div>)
}
function GameBoard() {
  return (
    <div>
      <div>
        <Sq cl="green" r="1"></Sq>
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

function ControlBar() {
  return (
  <div className={styles.control_bar}>
    <button>Toss</button>    
    <div><a>You got a </a><a>{6}</a></div>

  </div>);
}
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ludo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <GameBoard></GameBoard>
      <ControlBar></ControlBar>
      </main>

      <footer className={styles.footer}>
        By Benton, Melinda, Nickel, and Daniel
      </footer>
    </div>
  )
}
