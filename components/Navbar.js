import Link from "next/link";
import { useTheme } from "next-themes";
import { BsMoon, BsSun } from "react-icons/bs";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="sticky z-10 top-0 backdrop-filter backdrop-blur flex w-full justify-between items-center py-6 px-48 my-0">
      <Link className="py-1 mt-1 pl-0 text-sm" href="/">
        <a>Home</a>
      </Link>
      <div>
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
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="bg-gray-200 dark:bg-gray-800 ml-4 rounded p-3 h-10 w-10 focus:outline-none"
        >
          {theme === "dark" ? <BsSun /> : <BsMoon />}
        </button>
      </div>
    </nav>
  );
}
