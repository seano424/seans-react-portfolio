import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/solid'
import { motion } from 'framer-motion'
import Image from 'next/image'

function Hero() {
  return (
    <section name="top" className="text-center flex flex-col items-center my-5">
      <div className="relative h-80 w-80">
        <Image
          className="rounded-full m-auto"
          src={'/images/mebw.jpg'}
          alt="Image of Oswaldo Soto"
          priority={true}
          objectFit="cover"
          layout="fill"
        />
      </div>

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
        className={`text-6xl tracking-tight font-bold mt-10 mb-4 `}
      >
        Hi! 👋 I'm Oswaldo Soto
      </motion.h2>

      <div className="flex justify-center gap-x-4">
        <a
          className="hover:text-primary transition-all duration-300 ease-linear text-green-500 dark:text-green-200"
          href="https://github.com/OswalDev"
          target="_blank"
        >
          <FiGithub className="h-5 w-5" />
        </a>
        <a
          className="hover:text-secondary transition-all duration-500 ease-linear text-primary dark:text-blue-200"
          href="https://www.linkedin.com/in/oswaldojaviersg/"
          target="_blank"
        >
          <FiLinkedin className="h-5 w-5" />
        </a>
      </div>
      <div className="text-lg tracking-wider flex flex-col leading-relaxed">
        <div className="my-4">
          <p className="m-1">
            The long name because well it was fricken hard to find my a domain
            that was perfect for me. You can just call me Sean :) I am a
            Frontend Developer specializing in React and bringing forth
            beautiful UI, and I love what I do!
          </p>
          <p className="m-1">
            I commonly make websites and apps with NextJS, and JAMstack
            architecture. Experienced in using JavaScript and JS frameworks,
            Ruby on Rails, and HTML/CSS. Lately, I have been learning to use
            Twig, Craft CMS, and Svelte. If you have any fun projects in mind
            feel free to reach out!
          </p>
        </div>
        <div className="h-20 flex justify-center items-center">
          <a
            onClick={() => scrollTo(0,800)}
            className="p-4 mt-2 rounded-full text-center self-center cursor-pointer text-xl sm:px-4 font-black shadow-xl dark:bg-gray-50 dark:text-gray-900 transition-all duration-200 ease-linear hover:text-2xl  hover:text-primary animate-pulse"
          >
            <ArrowDownIcon className="h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
