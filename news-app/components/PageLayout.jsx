import React from "react";
import Head from "next/head";

export default function PageLayout({ children, title = "WallStreet" }) {
  return (
    <div className="page-layout">
      <Head>
        <title>{title}</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css"
        />
        <meta name="description" content="Las mejores noticias de anime" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </div>
  );
}
