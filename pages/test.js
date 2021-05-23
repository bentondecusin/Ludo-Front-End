import Head from 'next/head'
import styles from '../styles/Home.module.css'
import gb from '../styles/gb.module.css'
import GameBoard from './api/gameboard.js'
import React, { useEffect, useState } from 'react'

function ControlBar() {

  return (
  <div className={styles.control_bar}>
    <button>Toss</button>    
    <div><a>You got a </a><a>{6}</a></div>

  </div>);
}
export default function Home() {
  const [state, setState] = useState('');


  return (
    
    <div className={styles.container}>
      <Head>
        <title>Ludo</title>
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
