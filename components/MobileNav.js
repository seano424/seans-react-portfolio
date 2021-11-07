import Link from 'next/link'

const linkStyles =
  'text-6xl font-black tracking-tight py-4 uppercase rounded px-2'

export default function MobileNav() {
  return (
    <section className="flex flex-col items-center">
      <Link href="/">
        <a className={linkStyles}>Home</a>
      </Link>
      <Link href="/about">
        <a className={linkStyles}>About</a>
      </Link>
      {/* <Link href="/posts">
        <a className={linkStyles}>Blog</a>
      </Link> */}

      <a href="mailto:soreilly424@gmail.com" className={linkStyles}>
        contact
      </a>
      <a href="/images/resume--sean.pdf" target="_blank" className={linkStyles}>
        resume
      </a>
    </section>
  )
}
