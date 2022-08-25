import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Inicio de anime noticias" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
