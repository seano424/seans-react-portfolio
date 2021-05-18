import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { BsMoon, BsSun } from "react-icons/bs";
import MobileNav from "../components/MobileNav";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const button = (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="bg-gray-200 dark:bg-gray-800 ml-4 rounded p-3 h-10 w-10 focus:outline-none"
    >
      {theme === "dark" ? <BsSun /> : <BsMoon />}
    </button>
  );
  return (
    <>
      <nav className="sticky z-20 dark:bg-gray-900 top-0 bg-white xl:backdrop-filter backdrop-blur flex w-screen px-8 justify-between items-center py-6 lg:px-48 my-0">
        <div className="lg:hidden pl-2">{button}</div>
        <Link className="py-1 mt-1 pl-0 text-sm" href="/">
          <a className="hidden lg:flex">Home</a>
        </Link>
        <div className="hidden lg:flex">
          <Link href="/projects">
            <a className="py-1 px-2 text-sm sm:text-base sm:px-4 dark:text-gray-300">
              Projects
            </a>
          </Link>
          <Link href="/about">
            <a className="py-1 px-2 text-sm sm:text-base sm:px-4 dark:text-gray-300">
              About
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
          open ? "opacity-100 h-full" : "opacity-0 h-0"
        }`}
      >
        {open && <MobileNav />}
      </section>
    </>
  );
}
