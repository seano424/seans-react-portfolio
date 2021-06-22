import React from 'react'
import Layout from '../../components/Layout'

export default function About() {
  return (
    <Layout>
      <section className="mt-8 w-6/7 xl:w-6/12">
        <article>
          <h2 className="font-bold text-gray-300 text-5xl tracking-wider">
            About
          </h2>

          <aside>
            <p className="my-4 leading-relaxed">
              I am a fullstack developer previously found at OddCamp, where I
              worked as a front-end engineer using React, Rails, and
              TailwindCSS as my toolkit. I enjoy solving complicated problems
              using open-source software.{' '}
            </p>
            <p className="my-4 leading-relaxed">
              I earned my bachelor's degree in History and Sociology at the
              University in Kansas. Afterward, I worked as an English educator
              in Thailand, Vietnam, and Spain. I loved teaching and was deeply
              passionate about my students' success. Now, I hope to apply my
              experiences to a new creative endeavor to push me even further and
              one that can challenge me and my desire for problem-solving and
              going beyond what I already know.
            </p>
            <p className="my-4 leading-relaxed">
              Currently, I am focused on turning myself into a fullstack
              developer, creating clean user interfaces with web accessibility
              in mind. I'm fascinated by creative UI and love to create visually
              immersive user experiences with design and code.
            </p>
            <p className="my-4 leading-relaxed">
              For the last two years, I have been transitioning into the world
              of software engineering while building projects using Javascript
              and developing web apps using React. Recently, I have developed
              with jam stack architecture, and I love the experience.
            </p>
            <p className="my-4 leading-relaxed">
              In October 2020, I decided to take the big jump and began my
              studies as a web developer by joining the team at Le Wagon Mexico,
              a highly rated full-stack development bootcamp with locations
              based all over the world. The bootcamp focused on Ruby on Rails,
              Bootstrap, PostgreSQL, and JavaScript.{' '}
            </p>
            <p className="my-4 leading-relaxed">
              Since then, I have been dabbling in other technologies,
              specifically, React and JS - building client websites using a
              combination of NextJS, APIs, TailwindCSS, and Sanity CMS.
            </p>
          </aside>
        </article>
      </section>
    </Layout>
  )
}
