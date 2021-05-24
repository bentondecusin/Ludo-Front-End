import Head from "next/head";
import styles from "../styles/Home.module.css";
import gb from "../styles/gb.module.css";
import GameBoard from "./api/gameboard.js";
import React, { useEffect, useState } from "react";
import Header from "./header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ludo</title>
      </Head>
      <Header></Header>

      <main className={styles.main__dark}>
        <GameBoard></GameBoard>
      </main>
      <footer className={styles.footer}>
        By Benton, Melinda, Nickel, and Daniel
      </footer>
    </div>
  );
}
