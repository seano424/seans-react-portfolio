import { useEffect, useState } from 'react'
import Avatar from '@/components/Avatar'
import { v4 as uuidv4 } from 'uuid'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { scrollTo } from '@/utils/scroller'
import projects from '@/lib/projectData'
import ProjectCard from '@/components/ProjectCard'
import Technologies from './Technologies'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/solid'
import styles from '@/styles/Main.module.css'

export default function Main() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <section name="top" className={styles.topContainer}>
        <Avatar image={'/images/mebw.jpg'} />
        <h2
          className={`text-6xl h-16 tracking-tight font-bold my-4 ${
            !loading && 'animate-tracking-in-expand'
          }`}
        >
          {!loading && 'Sean Patrick'}
        </h2>
        <div className={styles.icons}>
          <a
            className="hover:text-primary transition-all duration-200 ease-linear text-blue-500 dark:text-white"
            href="https://twitter.com/sea_oreilly"
            target="_blank"
          >
            <FiTwitter />
          </a>
          <a
            className="hover:text-primary transition-all duration-300 ease-linear text-green-500 dark:text-green-200"
            href="https://github.com/seano424"
            target="_blank"
          >
            <FiGithub />
          </a>
          <a
            className="hover:text-secondary transition-all duration-500 ease-linear text-primary dark:text-blue-200"
            href="https://www.linkedin.com/in/sea-oreilly/"
            target="_blank"
          >
            <FiLinkedin />
          </a>
        </div>
        <div className={styles.bio}>
          <div className="my-4">
            <p className="m-1">
              I am a Frontend Developer specializing in React and bringing forth
              beautiful UI.
            </p>
            <p className="m-1">
              I commonly make websites and apps with NextJS, and JAMstack
              architecture. Experienced in using JavaScript and JS frameworks,
              Ruby on Rails, and HTML/CSS. Lately, I have been learning to use
              Firebase and Recoil as an alternative to Redux in smaller
              projects.
            </p>
          </div>
          <div className={styles.buttonDownContainer}>
            <a onClick={() => scrollTo('myElement')} className={styles.button}>
              <ArrowDownIcon className="h-6" />
            </a>
          </div>
        </div>
      </section>

      <hr />

      <section>
        <article name="myElement" className={styles.projectsContainer}>
          {projects.map((p) => (
            <ProjectCard {...p} key={uuidv4()} />
          ))}
        </article>
        <Technologies />
        <article className={styles.techContainer}>
          <a onClick={() => scrollTo('top')} className={styles.button}>
            <ArrowUpIcon className="h-6" />
          </a>
        </article>
      </section>
    </>
  )
}
