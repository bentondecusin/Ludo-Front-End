import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "./header";
function LeftBar() {
  return <div className={styles.leftbar}></div>;
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <main className={styles.main__light}>
        <h1>About this game</h1>
        <h3>
          Back-end: OCaml with cohttp (
          <a
            class={styles.ref}
            href="https://github.coecis.cornell.edu/cl2597/CS-3110-Final-Project/"
          >
            source code
          </a>
          )(NetID needed)
        </h3>
        <h3>
          Front-end: Next.js & Node.js{" "}
          <a
            class={styles.ref}
            href="https://github.com/bentondecusin/Ludo-Front-End"
          >
            (source code)
          </a>
        </h3>
      </main>
    </div>
  );
}
