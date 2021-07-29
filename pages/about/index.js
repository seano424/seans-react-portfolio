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
  SiStrapi,
  SiPostgresql,
  SiBootstrap,
} from 'react-icons/si'
import { IoLogoVercel } from 'react-icons/io'

export default function About() {
  return (
    <Layout>
      <section className="mt-8 w-6/7 xl:w-6/12">
        <article>
          <h2 className="font-bold dark:text-white text-black text-6xl tracking-wider">
            About
          </h2>
          <aside>
            <p className="my-8 tracking-wider leading-relaxed text-lg font-light">
              I'm a Le Wagon Bootcamp Graduate currently freelancing and
              building projects on the side. I have decided to take advantage of
              the strange times and take the exciting plunge into developing a
              new career!
            </p>
            <p className="my-8 tracking-wider leading-relaxed text-lg font-light">
              Since 2020, I've been living in Playa del Carmen and working
              freelance as a Jamstack and Rails Developer. I was previously a
              front-end intern for the design and engineering company, Odd Camp,
              and before that I worked as a teacher.
            </p>
            <p className="my-8 tracking-wider leading-relaxed text-lg font-light">
              During my free time I enjoy diving, hiking, travelling, going to
              the beach, reading fiction and various publications about the
              newest technology trends and other programming languages, and
              photography. You can find out more about me on my{' '}
              <a href="https://www.instagram.com/sea.oreilly/">Instagram</a> or{' '}
              <a href="https://www.github.com/seano424">GitHub</a>.
            </p>
          </aside>
        </article>
        <article className="my-16">
          <h3 className="font-black mb-16 dark:text-white text-black text-5xl">
            Technologies I frequently use
          </h3>
          <aside className="text-3xl grid grid-cols-6 gap-8">
            <button className="flex justify-center">
              <SiNextDotJs />
            </button>
            <button className="flex justify-center">
              <SiReact />
            </button>
            <button className="flex justify-center">
              <SiRuby />
            </button>
            <button className="flex justify-center">
              <SiRails />
            </button>
            <button className="flex justify-center">
              <SiSass />
            </button>
            <button className="flex justify-center">
              <SiTailwindcss />
            </button>
            <button className="flex justify-center">
              <SiJavascript />
            </button>
            <button className="flex justify-center">
              <SiHeroku />
            </button>
            <button className="flex justify-center">
              <SiNetlify />
            </button>
            <button className="flex justify-center">
              <SiStrapi />
            </button>
            <button className="flex justify-center">
              <SiPostgresql />
            </button>
            <button className="flex justify-center">
              <SiBootstrap />
            </button>
          </aside>
        </article>
      </section>
    </Layout>
  )
}
