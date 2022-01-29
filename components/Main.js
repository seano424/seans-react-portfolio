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
import { motion } from 'framer-motion'

export default function Main() {
  return (
    <>
      <section
        name="top"
        className="text-center flex flex-col items-center my-5"
      >
        <Avatar image={'/images/mebw.jpg'} />
        <motion.h2
          initial={{
            letterSpacing: '-0.5em',
            opacity: '0',
          }}
          animate={{
            opacity: 1,
            letterSpacing: '-0.025em',
          }}
          transition={{
            delay: 0.3,
            duration: 0.5,
          }}
          className={`text-6xl h-16 tracking-tight font-bold mt-10 mb-4 `}
        >
          Sean Patrick
        </motion.h2>

        <div className="flex justify-center gap-x-4">
          <a
            className="hover:text-primary transition-all duration-200 ease-linear text-blue-500 dark:text-white"
            href="https://twitter.com/sea_oreilly"
            target="_blank"
          >
            <FiTwitter className="h-5 w-5" />
          </a>
          <a
            className="hover:text-primary transition-all duration-300 ease-linear text-green-500 dark:text-green-200"
            href="https://github.com/seano424"
            target="_blank"
          >
            <FiGithub className="h-5 w-5" />
          </a>
          <a
            className="hover:text-secondary transition-all duration-500 ease-linear text-primary dark:text-blue-200"
            href="https://www.linkedin.com/in/sea-oreilly/"
            target="_blank"
          >
            <FiLinkedin className="h-5 w-5" />
          </a>
        </div>
        <div className="text-lg tracking-wider flex flex-col leading-relaxed">
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
            <a
              onClick={() => scrollTo('myElement')}
              className="p-4 mt-2 rounded-full text-center self-center cursor-pointer text-xl sm:px-4 font-black shadow-xl dark:bg-gray-50 dark:text-gray-900 transition-all duration-200 ease-linear hover:text-2xl  hover:text-primary animate-pulse"
            >
              <ArrowDownIcon className="h-6" />
            </a>
          </div>
        </div>
      </section>

      <hr />

      <section>
        <article
          name="myElement"
          className="grid md:grid-cols-2 mt-10 gap-x-10"
        >
          {projects.map((p) => (
            <ProjectCard {...p} key={uuidv4()} />
          ))}
        </article>
        <Technologies />
        <article className={styles.techContainer}>
          <a
            onClick={() => scrollTo('top')}
            className="p-4 mt-2 rounded-full text-center self-center cursor-pointer text-xl sm:px-4 font-black shadow-xl dark:bg-gray-50 dark:text-gray-900 transition-all duration-200 ease-linear hover:text-2xl  hover:text-primary animate-pulse"
          >
            <ArrowUpIcon className="h-6" />
          </a>
        </article>
      </section>
    </>
  )
}
