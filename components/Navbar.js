import { useState } from 'react'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import { BiMoon, BiSun } from 'react-icons/bi'
import Link from 'next/link'
import MobileNav from '../components/MobileNav'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const router = useRouter()

  console.log(router.pathname === '/')

  const button = (
    <button
      aria-label="Button for toggling dark mode"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="ml-4 rounded text-3xl lg:text-xl focus:outline-none"
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
      <nav className="sticky z-20 dark:bg-dark top-0 backdrop-filter backdrop-blur w-screen pt-4 px-8 py-6 lg:px-12 lg:grid grid-cols-3">
        <article className="flex items-center">
          <img
            src="/images/kanizsa-triangle.png"
            height="30px"
            width="30px"
            alt="Kanizsa Triangle Logo"
            className="mr-4 hidden lg:block dark:bg-gray-200 rounded-lg"
          />
          <Link className="py-1 mt-1 pl-0 text-sm" href="/">
            <a className="hidden lg:flex font-bold text-2xl text-primary hover:text-secondary dark:text-secondary dark:hover:text-primary animate-pulse-slow">
              Sean Patrick
            </a>
          </Link>
        </article>
        <article className="hidden lg:flex gap-4 justify-center capitalize text-gray-900 font-bold bg-gray-400 bg-opacity-10 py-2 px-4 rounded-3xl">
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
          <a
            href="/images/resume.pdf"
            target="_blank"
            className={`p-2 hover:text-gray-800 dark:text-white w-40 text-center ${
              router.pathname === '/projects' &&
              'bg-white rounded-3xl dark:bg-gray-500'
            }`}
          >
            resume
          </a>
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
          <Link href="/projects">
            <a
              className={`p-2 hover:text-gray-800 dark:text-white w-40 text-center ${
                router.pathname === '/projects' &&
                'bg-white rounded-3xl dark:bg-gray-500'
              }`}
            >
              projects
            </a>
          </Link>
        </article>
        <article className="hidden lg:flex justify-end">
          <a
            href="mailto:soreilly424@gmail.com"
            className={`p-2 hover:text-gray-800 capitalize dark:text-white self-center`}
          >
            contact
          </a>
          {button}{' '}
        </article>
        <section className="flex items-center justify-between">
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
          <article className="flex lg:hidden">{button}</article>
        </section>
      </nav>
      <section
        className={`fixed z-10 top-20 bottom-0 w-full bg-white dark:bg-dark  ${
          open ? 'opacity-100 h-full' : 'opacity-0 h-0'
        }`}
      >
        {open && <MobileNav />}
      </section>
    </>
  )
}
