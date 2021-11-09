import React from 'react'
import styles from '@/styles/Footer.module.css'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className={`${styles.footer} dark:bg-dark`}>
      <a
        className={`${styles.icons} duration-200`}
        href="https://twitter.com/sea_oreilly"
        target="_blank"
      >
        <FiTwitter />
      </a>
      <a
        className={`${styles.icons} duration-300`}
        href="https://github.com/seano424"
        target="_blank"
      >
        <FiGithub />
      </a>
      <a
        className={`${styles.icons} duration-500`}
        href="https://www.linkedin.com/in/sea-oreilly/"
        target="_blank"
      >
        <FiLinkedin />
      </a>
    </footer>
  )
}
