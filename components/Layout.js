import React from 'react'
import Footer from './Footer'
import styles from '@/styles/Layout.module.css'
import Navbar from './Navbar'
import Meta from './Meta'
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
}

export default function Layout({ children }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <Meta />
      <div className="min-h-screen flex flex-col justify-center items-center">
        <Navbar />
        <main className="dark:bg-black flex flex-col justify-center items-center px-10 lg:px-80 ">
          {children}
        </main>
        <Footer />
      </div>
    </motion.div>
  )
}
