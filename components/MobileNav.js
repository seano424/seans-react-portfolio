import Link from 'next/link'

const linkStyles =
  'text-6xl font-black tracking-tight py-4 uppercase rounded px-2 hover:text-primary transition duration-150'

export default function MobileNav() {
  return (
    <section className="flex flex-col items-center dark:bg-black h-screen pt-16">
      <Link href="/">
        <a className={`${linkStyles} mt-20`}>Home</a>
      </Link>
      <Link href="/about">
        <a className={linkStyles}>About</a>
      </Link>

      <a href="mailto:soreilly424@gmail.com" className={linkStyles}>
        contact
      </a>
      <a href="/images/seanresume.pdf" target="_blank" className={linkStyles}>
        resume
      </a>
    </section>
  )
}
