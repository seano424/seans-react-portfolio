import React from "react";
import styles from "../styles/Home.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className="text-sm">Designed and Built by</p>
      <a
        className="text-sm px-1 underline text-red-500 font-bold"
        href="https://github.com/seano424"
        target="_blank"
      >
        @seano424
      </a>
    </footer>
  );
}
