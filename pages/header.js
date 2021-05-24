import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <a href="https://cornell.edu/">
          <img
            src="https://brand.cornell.edu/assets/images/downloads/logos/cornell_seal_simple/cornell_seal_simple.svg"
            className={styles.bcylicon}
          ></img>
        </a>
      </div>
      <div>
        <a>Ludo - CS 3110 Final Project </a>
      </div>
      <div className={styles.header__right}>
        <a href="/">Play</a>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <a href="/about">About</a>
      </div>
    </header>
  );
}
