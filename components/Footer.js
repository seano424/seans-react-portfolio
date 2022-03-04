import React from 'react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="font-light w-full h-[100px] flex justify-center items-center gap-8 text-2xl py-5 dark:bg-black">
      <a
        className="hover:text-primary transition-all ease-linear duration-300"
        href="https://github.com/OswalDev"
        target="_blank"
      >
        <FiGithub />
      </a>
      <a
        className="hover:text-primary transition-all ease-linear duration-500"
        href="https://www.linkedin.com/in/oswaldojaviersg/"
        target="_blank"
      >
        <FiLinkedin />
      </a>
    </footer>
  )
}
