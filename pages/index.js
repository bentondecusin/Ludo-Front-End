import Head from 'next/head'
import styles from '../styles/Home.module.css'
import gb from '../styles/gb.module.css'
import GameBoard from './api/gameboard.js'
import React, { useEffect, useState } from 'react'


export default function Home() {
  const [state, setState] = useState('');


  return (
    
    <div className={styles.container}>
      <Head>
        <title>Ludo</title>
      </Head>
      <main className={styles.main}>
      <GameBoard></GameBoard>
      </main>
      <footer className={styles.footer}>
        By Benton, Melinda, Nickel, and Daniel
      </footer>
    </div>
  )
}
