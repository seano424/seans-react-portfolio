import { useState } from 'react'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import { FiMoon, FiSun } from 'react-icons/fi'
import Link from 'next/link'
import MobileNav from '../components/MobileNav'
import styles from '@/styles/Navbar.module.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { setTheme, theme } = useTheme()
  const router = useRouter()

  return (
    <>
      {/* 1st Section is Desktop and 2nd is Mobile */}
      <nav className={`${styles.nav} dark:bg-dark`}>
        {/* Logo and Name */}
        <h1 className={styles.logo}>
          <img
            src="/images/kanizsa-triangle.png"
            height="30px"
            width="30px"
            alt="Kanizsa Triangle Logo"
            className={`${styles.logoImg} dark:bg-gray-200`}
          />
          <Link href="/">
            <a className={styles.logoName}>Sean Patrick</a>
          </Link>
        </h1>

        {/* Desktop / Ipad Home and About Links */}
        <div className={`${styles.navLinksContainer} dark:bg-black`}>
          <Link href="/">
            <a
              className={`${
                styles.navLink
              } dark:text-white dark:hover:text-gray-50 ${
                router.pathname === '/' &&
                'bg-white rounded-3xl dark:bg-gray-900'
              }`}
            >
              home
            </a>
          </Link>
          <Link href="/about">
            <a
              className={`${
                styles.navLink
              } dark:text-white dark:hover:text-gray-50 ${
                router.pathname === '/about' &&
                'bg-white rounded-3xl dark:bg-gray-900'
              }`}
            >
              about
            </a>
          </Link>
        </div>

        {/* Resume & Contact & Dark Icon */}
        <div className={styles.right}>
          <a
            href="/images/resume--sean.pdf"
            target="_blank"
            className={`${styles.rightLinks} dark:text-white`}
          >
            <span>resume</span>
          </a>
          <a
            href="mailto:soreilly424@gmail.com"
            className={`${styles.rightLinks} dark:text-white`}
          >
            contact
          </a>

          <button
            aria-label="Button for toggling dark mode"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={styles.themeBtn}
          >
            {theme === 'dark' ? (
              <FiSun className="hover:text-yellow-600 transition-all duration-500 ease-linear" />
            ) : (
              <FiMoon className="hover:text-purple-600 transition-all duration-500 ease-linear" />
            )}
          </button>
        </div>
        <div className={styles.smallerSize}>
          <div onClick={() => setOpen(!open)} className={styles.hamburger}>
            <div
              className={`${styles.hamburgerBar} dark:bg-gray-50 ${
                open ? `transform rotate-45 mt-2` : `transform rotate-0 mt-1`
              }`}
            />
            <div
              className={`${styles.hamburgerBar} dark:bg-gray-50 ${
                open
                  ? `transform translate-x-5 opacity-0`
                  : `transform translate-x-0 opacity-100 mt-1 `
              }`}
            />
            <div
              className={`${styles.hamburgerBar} dark:bg-gray-50 ${
                open
                  ? `transform -rotate-45 -mt-2 mb-3`
                  : `transform rotate-0 mt-1 `
              }`}
            />
          </div>

          <button
            aria-label="Button for toggling dark mode"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={styles.smallerSizeThemeBtn}
          >
            {theme === 'dark' ? (
              <FiSun className="hover:text-yellow-600 transition-all duration-500 ease-linear" />
            ) : (
              <FiMoon className="hover:text-purple-600 transition-all duration-500 ease-linear" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navbar Section */}
      <nav
        className={`${styles.mobileSection} dark:bg-dark  ${
          open ? 'opacity-100 h-full' : 'opacity-0 h-0'
        }`}
      >
        {open && <MobileNav />}
      </nav>
    </>
  )
}
