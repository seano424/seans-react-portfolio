import Avatar from '@/components/Avatar'
import { v4 as uuidv4 } from 'uuid'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { scrollTo } from '@/utils/scroller'
import projects from '@/lib/projectData'
import Project from '@/components/Project'
import Technologies from '../Technologies'

export default function Main() {
  return (
    <>
      <section
        name="top"
        className="lg:w-7/12 w-6/7 text-center mb-16 mt-2 lg:mb-20"
      >
        <Avatar image={'/images/mebw.jpg'} />
        <h1 className="text-6xl font-bold my-4 tracking-tighter animate-tracking-in-expand">
          Sean Patrick
        </h1>
        <article className="flex justify-center gap-x-4 text-base my-2">
          <a
            className=" hover:text-primary transition-all duration-200 ease-linear"
            href="https://twitter.com/sea_oreilly"
            target="_blank"
          >
            <FiTwitter />
          </a>
          <a
            className="hover:text-primary transition-all duration-300 ease-linear"
            href="https://github.com/seano424"
            target="_blank"
          >
            <FiGithub />
          </a>
          <a
            className="hover:text-primary transition-all duration-500 ease-linear"
            href="https://www.linkedin.com/in/sea-oreilly/"
            target="_blank"
          >
            <FiLinkedin />
          </a>
        </article>
        <article className="text-lg tracking-wider">
          <div className="flex flex-col leading-relaxed">
            <div className="my-4">
              <p className="m-1">
                I am a fullstack developer specializing in bringing forth
                beautiful UI.
              </p>
              <p className="m-1">
                I commonly make websites and apps with NextJS, and JAMstack
                architecture. Currently, I am building using Hasura and
                PostgreSQL in the backend and TailwindCSS in the frontend.
              </p>
            </div>
            <a
              onClick={() => scrollTo('myElement')}
              className="p-4 mt-2 rounded-full text-center self-center cursor-pointer text-xl sm:px-4 font-black shadow-xl dark:bg-gray-50 dark:text-gray-900 transition-all duration-200 ease-linear hover:text-2xl  hover:text-primary"
            >
              Projects...
            </a>
            {/* <a
              onClick={() => scrollTo('technologies')}
              className="p-4 mt-2 rounded-full text-center self-center cursor-pointer text-xl sm:px-4 font-black shadow-xl dark:bg-gray-50 dark:text-gray-900 transition-all duration-200 ease-linear hover:text-2xl  hover:text-primary"
            >
              Tech I know...
            </a> */}
          </div>
        </article>
      </section>

      <hr />

      <section>
        <article
          name="myElement"
          className="grid md:grid-cols-2 gap-x-10 mx-10 lg:mx-32"
        >
          {projects.map((p) => (
            <Project {...p} key={uuidv4()} />
          ))}
        </article>
        <article className="my-10">
          <Technologies />
        </article>
        <article className="flex justify-center mb-4">
          <a
            onClick={() => scrollTo('top')}
            className="p-4 mt-4 rounded-full text-center self-center cursor-pointer text-xl sm:px-4 font-black shadow-xl dark:bg-gray-50 dark:text-gray-900 transition-all duration-200 ease-linear hover:text-2xl  hover:text-primary"
          >
            Back to the top...
          </a>
        </article>
      </section>
    </>
  )
}
