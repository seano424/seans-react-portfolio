import React from 'react'
import Footer from './Footer'
import styles from '@/styles/Layout.module.css'
import Navbar from './Navbar'
import Meta from './Meta'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className={styles.container}>
        <Navbar />
        <main className={`${styles.main} dark:bg-dark`}>{children}</main>
        <Footer />
      </div>
    </>
  )
}
