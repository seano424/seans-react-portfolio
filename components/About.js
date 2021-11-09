import React from 'react'
import Avatar from './Avatar'
import styles from '@/styles/About.module.css'
function About() {
  return (
    <section className={styles.content}>
      <div className={`${styles.header} dark:text-white`}>
        About Sean...
        <Avatar image={'/images/avataaars.png'} />
      </div>
      <div>
        <p className={styles.description}>
          Hello! I'm a passionate Frontend Developer specializing in React and
          JavaScript. I am a graduate of the University of Kansas and more
          recently from the Le Wagon Coding Bootcamp where we built full stack
          apps in Ruby on Rails and JavaScript. Since then, I have been
          developing mainly with React and TailwindCSS. I am also experienced
          with the backend, having built sites using PostgreSQL and Ruby.
        </p>

        <p className={styles.description}>
          During my free time you can find me scuba diving 🤿, hiking 🏔,
          traveling 🐫, going to the beach 🐳, reading fiction and various
          publications about the newest technology trends and other programming
          languages, and dabbling in photography 📸. You can find out more about
          me on{' '}
          <a
            className="text-primary"
            href="https://www.instagram.com/sea.oreilly/"
          >
            Instagram
          </a>{' '}
          or{' '}
          <a className="text-primary" href="https://www.github.com/seano424">
            GitHub
          </a>
          .
        </p>
      </div>
    </section>
  )
}

export default About
