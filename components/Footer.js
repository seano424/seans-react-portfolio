import React from "react";
import styles from "../styles/Home.module.css";

export default function Footer() {
  return (
    <footer className={`${styles.footer} font-light dark:bg-dark`}>
      <p className="text-sm">&copy; Designed and Built by</p>
      <a
        className="text-sm px-1 underline"
        href="https://github.com/seano424"
        target="_blank"
      >
        @seano424
      </a>
    </footer>
  );
}
