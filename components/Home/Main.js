import Avatar from '@/components/Avatar'
import { v4 as uuidv4 } from 'uuid'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { scrollTo } from '@/utils/scroller'
import projects from '@/lib/projectData'
import ProjectCard from '@/components/ProjectCard'
import Technologies from '../Technologies'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/solid'

export default function Main() {
  const colorChange = true
  return (
    <>
      <section
        name="top"
        className="lg:w-7/12 w-6/7 text-center mb-16 mt-2 lg:mb-20"
      >
        <Avatar image={'/images/mebw.jpg'} />
        <h2 className="text-6xl font-bold my-4 tracking-tighter animate-tracking-in-expand">
          Sean Patrick
        </h2>
        <article className="flex justify-center gap-x-4 text-base my-2">
          <a
            className={`hover:text-primary transition-all duration-200 ease-linear ${
              colorChange && 'text-blue-500'
            }`}
            href="https://twitter.com/sea_oreilly"
            target="_blank"
          >
            <FiTwitter />
          </a>
          <a
            className={`hover:text-primary transition-all duration-300 ease-linear ${
              colorChange && ' text-green-800'
            }`}
            href="https://github.com/seano424"
            target="_blank"
          >
            <FiGithub />
          </a>
          <a
            className={`hover:text-secondary transition-all duration-500 ease-linear ${
              colorChange && 'text-primary'
            }`}
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
                I am a Frontend Developer specializing in React and bringing
                forth beautiful UI.
              </p>
              <p className="m-1">
                I commonly make websites and apps with NextJS, and JAMstack
                architecture. Experienced in using JavaScript and JS frameworks,
                Ruby on Rails, and HTML/CSS. Lately, I have been learning to use
                Firebase and Recoil as an alternative to Redux in smaller
                projects.
              </p>
            </div>
            <div className="h-20 flex justify-center items-center">
              <a
                onClick={() => scrollTo('myElement')}
                className="p-4 mt-2 rounded-full text-center self-center cursor-pointer text-xl sm:px-4 font-black shadow-xl dark:bg-gray-50 dark:text-gray-900 transition-all duration-200 ease-linear hover:text-2xl  hover:text-primary"
              >
                <ArrowDownIcon className="h-6" />
              </a>
            </div>
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
            <ProjectCard {...p} key={uuidv4()} />
          ))}
        </article>
        <Technologies />
        <article className="flex justify-center mb-4">
          <a
            onClick={() => scrollTo('top')}
            className="p-4 mt-4 rounded-full text-center self-center cursor-pointer text-xl sm:px-4 font-black shadow-xl dark:bg-gray-50 dark:text-gray-900 transition-all duration-200 ease-linear hover:text-2xl  hover:text-primary"
          >
            <ArrowUpIcon className="h-6" />
          </a>
        </article>
      </section>
    </>
  )
}
