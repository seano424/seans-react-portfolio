import React from 'react'
import Footer from './Footer'
import styles from '../styles/Home.module.css'
import Navbar from './Navbar'
import Meta from './Meta'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className={styles.container}>
        <Navbar />
        <main className="flex flex-1 flex-col items-center dark:bg-dark w-full">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
