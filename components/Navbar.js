import { useState } from 'react'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import { FiMoon, FiSun } from 'react-icons/fi'
import Link from 'next/link'
import MobileNav from '../components/MobileNav'
import { DownloadIcon } from '@heroicons/react/outline'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const router = useRouter()

  return (
    <>
      {/* 1st Section is Desktop and 2nd is Mobile */}
      <section className="sticky z-20 dark:bg-dark top-0 backdrop-filter backdrop-blur w-full pt-4 px-8 py-6 lg:px-12 lg:grid grid-cols-3">
        {/* Logo and Name */}
        <h1 className="flex items-center">
          <img
            src="/images/kanizsa-triangle.png"
            height="30px"
            width="30px"
            alt="Kanizsa Triangle Logo"
            className="mr-4 hidden lg:block dark:bg-gray-200 rounded-lg"
          />
          <Link className="py-1 mt-1 pl-0 text-sm" href="/">
            <a className="hidden lg:flex font-bold text-2xl text-primary">
              Sean Patrick
            </a>
          </Link>
        </h1>

        {/* Desktop / Ipad Navbar */}
        <nav className="hidden lg:flex gap-4 justify-center capitalize text-gray-900 font-bold bg-gray-400 bg-opacity-10 py-2 px-4 rounded-3xl">
          <Link href="/">
            <a
              className={`p-2 hover:text-gray-800 dark:text-white w-40 text-center ${
                router.pathname === '/' &&
                'bg-white rounded-3xl dark:bg-gray-500'
              }`}
            >
              home
            </a>
          </Link>
          <Link href="/about">
            <a
              className={`p-2 hover:text-gray-800 dark:text-white w-40 text-center ${
                router.pathname === '/about' &&
                'bg-white rounded-3xl dark:bg-gray-500'
              }`}
            >
              about
            </a>
          </Link>

          <Link href="/posts">
            <a
              className={`p-2 hover:text-gray-800 dark:text-white w-40 text-center ${
                router.pathname === '/posts' &&
                'bg-white rounded-3xl dark:bg-gray-500'
              }`}
            >
              blog
            </a>
          </Link>
        </nav>
        <div className="hidden lg:flex justify-end items-center">
          <a
            href="/images/resume--sean.pdf"
            target="_blank"
            className={`p-2 hover:text-gray-800 capitalize dark:text-white flex justify-center items-center`}
          >
            {/* <DownloadIcon className="w-5 h-5" /> */}
            <span>resume</span>
          </a>
          <a
            href="mailto:soreilly424@gmail.com"
            className={`p-2 hover:text-gray-800 capitalize dark:text-white self-center`}
          >
            contact
          </a>

          <button
            aria-label="Button for toggling dark mode"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="ml-4 rounded text-3xl lg:text-xl focus:outline-none"
          >
            {theme === 'dark' ? (
              <FiSun className="hover:text-yellow-600 transition-all duration-500 ease-linear" />
            ) : (
              <FiMoon className="hover:text-purple-600 transition-all duration-500 ease-linear" />
            )}
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div
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
          </div>
          <div className="flex lg:hidden">
            <button
              aria-label="Button for toggling dark mode"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="ml-4 rounded text-3xl lg:text-xl focus:outline-none"
            >
              {theme === 'dark' ? (
                <FiSun className="hover:text-yellow-600 transition-all duration-500 ease-linear" />
              ) : (
                <FiMoon className="hover:text-purple-600 transition-all duration-500 ease-linear" />
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Mobile Navbar Section */}
      <section
        className={`fixed z-10 bottom-0 top-20 w-full bg-white dark:bg-dark  ${
          open ? 'opacity-100 h-full' : 'opacity-0 h-0'
        }`}
      >
        {open && <MobileNav />}
      </section>
    </>
  )
}
