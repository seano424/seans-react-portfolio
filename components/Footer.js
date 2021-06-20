import React from 'react'
import styles from '../styles/Home.module.css'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className={`${styles.footer} font-light dark:bg-dark`}>
      <section className="flex gap-8 text-2xl py-5">
        <a
          className=" hover:text-primary transition-all duration-200 ease-linear"
          href="https://twitter.com/sea_oreilly"
          target="_blank"
        >
          <FiTwitter />
        </a>
        <a
          className="hover:text-primary transition-all duration-300 ease-linear"
          href="https://github.com/seano424"
          target="_blank"
        >
          <FiGithub />
        </a>
        <a
          className="hover:text-primary transition-all duration-500 ease-linear"
          href="https://www.linkedin.com/in/sea-oreilly/"
          target="_blank"
        >
          <FiLinkedin />
        </a>
      </section>
    </footer>
  )
}
