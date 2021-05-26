import Link from "next/link";

export default function MobileNav() {
  return (
    <section className="flex flex-col items-center p-20">
      <Link href="/">
        <a className="mt-4 text-4xl uppercase hover:bg-green-200 rounded px-2">
          Sean Patrick
        </a>
      </Link>
      <Link href="/projects">
        <a className="mt-4 text-4xl uppercase hover:bg-green-200 rounded px-2">
          Projects
        </a>
      </Link>
      <Link href="/about">
        <a className="mt-4 text-4xl uppercase hover:bg-green-200 rounded px-2">
          About
        </a>
      </Link>
    </section>
  );
}
