import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { BiMoon, BiSun } from 'react-icons/bi'
import MobileNav from '../components/MobileNav'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const button = (
    <button
      aria-label="Button for toggling dark mode"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="ml-4 rounded text-xl focus:outline-none"
    >
      {theme === 'dark' ? (
        <BiSun className="hover:text-yellow-600 transition-all duration-500 ease-linear" />
      ) : (
        <BiMoon className="hover:text-purple-600 transition-all duration-500 ease-linear" />
      )}
    </button>
  )
  return (
    <>
      <nav className="sticky z-20 dark:bg-dark top-0 backdrop-filter backdrop-blur flex w-screen px-8 justify-between items-center py-6 lg:px-48 my-0">
        <aside className="lg:hidden pl-2">{button}</aside>
        <aside className="flex items-center">
          <img
            src="/images/kanizsa-triangle.png"
            height="30px"
            width="30px"
            alt="Kanizsa Triangle Logo"
            className="mr-4 hidden lg:block dark:bg-gray-200 rounded-lg"
          />
          <Link className="py-1 mt-1 pl-0 text-sm" href="/">
            <a className="hidden lg:flex font-bold text-2xl hover:text-primary animate-pulse-slow">
              Sean Patrick
            </a>
          </Link>
        </aside>
        <div className="hidden lg:flex">
          <Link href="/projects">
            <a className="py-1 px-2 text-sm sm:text-base sm:px-4 dark:text-gray-300">
              Projects
            </a>
          </Link>
          <Link href="/posts">
            <a className="py-1 px-2 text-sm sm:text-base sm:px-4 dark:text-gray-300">
              Posts
            </a>
          </Link>
          <Link href="/about">
            <a className="py-1 px-2 text-sm sm:text-base sm:px-4 dark:text-gray-300">
              About
            </a>
          </Link>
          <Link href="/contact">
            <a className="py-1 px-2 text-sm sm:text-base sm:px-4 dark:text-gray-300">
              Contact
            </a>
          </Link>
          {button}
        </div>
        <article
          onClick={() => setOpen(!open)}
          className="lg:hidden cursor-pointer flex flex-col justify-center p-3"
        >
          <div
            className={`w-8 h-1 bg-gray-900 dark:bg-gray-50 rounded-lg transition-all duration-150 ease-linear relative ${
              open ? `transform rotate-45 mt-2` : `transform rotate-0 mt-1`
            }`}
          />
          <div
            className={`w-8 h-1 bg-gray-900 dark:bg-gray-50 rounded-lg transition-all duration-150 ease-linear relative ${
              open
                ? `transform translate-x-5 opacity-0`
                : `transform translate-x-0 opacity-100 mt-1 `
            }`}
          />
          <div
            className={`w-8 h-1 bg-gray-900 dark:bg-gray-50 rounded-lg transition-all duration-150 ease-linear relative ${
              open
                ? `transform -rotate-45 -mt-2 mb-3`
                : `transform rotate-0 mt-1 `
            }`}
          />
        </article>
      </nav>
      <section
        className={`fixed z-10 top-20 bottom-0 w-full bg-white dark:bg-gray-900  ${
          open ? 'opacity-100 h-full' : 'opacity-0 h-0'
        }`}
      >
        {open && <MobileNav />}
      </section>
    </>
  )
}
