import Head from "next/head";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx>{`
        h1 {
          text-align: center;
          padding-top: 30px;
        }
      `}</style>
      <h1>Wall Street News</h1>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
