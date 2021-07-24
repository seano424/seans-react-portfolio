import React from 'react'
import Layout from '../../components/Layout'
import {
  SiNextDotJs,
  SiReact,
  SiRails,
  SiJavascript,
  SiRuby,
  SiTailwindcss,
  SiSass,
  SiHeroku,
  SiNetlify,
  SiPostgresql,
  SiBootstrap,
} from 'react-icons/si'
import { IoLogoVercel } from 'react-icons/io5'

const buttonStyles =
  'flex justify-center hover:shadow-xl hover:bg-white transition-all duration-200 ease-linear p-8 rounded-lg dark:hover:text-black'

export default function About() {
  return (
    <Layout>
      <section className="mt-8 w-6/7 xl:w-6/12">
        <article className="mb-20">
          <h2 className="font-bold text-black text-6xl tracking-wider dark:text-white">
            About
          </h2>
          <aside>
            <p className="my-8 tracking-wider leading-relaxed text-lg font-light">
              I'm a Le Wagon Bootcamp Graduate currently freelancing and
              studying computer science from open sourced resources. I started
              working as a freelance developer the last two years.
            </p>
            <p className="my-8 tracking-wider leading-relaxed text-lg font-light">
              Since 2020, I've been living in Playa del Carmen and working
              freelance as a Jamstack Developer. I was found previously as a
              front-end intern for the design and engineering company, Odd Camp.
            </p>
            <p className="my-8 tracking-wider leading-relaxed text-lg font-light">
              During my free time I enjoy diving, hiking, travelling, going to
              the beach, reading fiction and various publications about the
              newest technology trends and other programming languages, and
              photography.
            </p>
          </aside>
        </article>
        <article className="mb-20">
          <h3 className="font-bold my-20 text-black text-5xl tracking-tighter dark:text-white">
            Technologies I frequently use ...
          </h3>
          <aside className="text-3xl grid grid-cols-6 gap-8">
            <a
              href="https://nextjs.org/"
              target="_blank"
              className={buttonStyles}
            >
              <SiNextDotJs />
            </a>
            <a
              href="https://create-react-app.dev/"
              target="_blank"
              className={buttonStyles}
            >
              <SiReact />
            </a>
            <a
              href="https://www.ruby-lang.org/en/"
              target="_blank"
              className={buttonStyles}
            >
              <SiRuby />
            </a>
            <a
              href="https://rubyonrails.org/"
              target="_blank"
              className={buttonStyles}
            >
              <SiRails />
            </a>
            <a
              href="https://sass-lang.com/"
              target="_blank"
              className={buttonStyles}
            >
              <SiSass />
            </a>
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              className={buttonStyles}
            >
              <SiTailwindcss />
            </a>
            <a
              href="https://www.javascript.com/"
              target="_blank"
              className={buttonStyles}
            >
              <SiJavascript />
            </a>
            <a
              href="https://www.heroku.com/"
              target="_blank"
              className={buttonStyles}
            >
              <SiHeroku />
            </a>
            <a
              href="https://www.netlify.com/"
              target="_blank"
              className={buttonStyles}
            >
              <SiNetlify />
            </a>
            <a
              href="https://vercel.com/"
              target="_blank"
              className={buttonStyles}
            >
              <IoLogoVercel />
            </a>
            <a
              href="https://www.postgresql.org/"
              target="_blank"
              className={buttonStyles}
            >
              <SiPostgresql />
            </a>
            <a
              href="https://getbootstrap.com/"
              target="_blank"
              className={buttonStyles}
            >
              <SiBootstrap />
            </a>
          </aside>
        </article>
      </section>
    </Layout>
  )
}
