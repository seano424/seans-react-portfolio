import React from "react";
import Footer from "./Footer";
import styles from "../styles/Home.module.css";
import Navbar from "./Navbar";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sean Patrick OReilly - Developer, designer, maker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex flex-1 flex-col items-center">{children}</main>
      <Footer />
    </div>
  );
}
