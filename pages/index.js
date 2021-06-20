import Head from 'next/head'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'
import * as Scroll from 'react-scroll'

import Layout from '../components/Layout'
import Project from '../components/Project'
import projects from '../lib/projectData'

export default function Home() {
  const projectDisplay = projects.map((p) => <Project {...p} key={uuidv4()} />)
  let scroller = Scroll.scroller

  const scrollTo = () => {
    scroller.scrollTo('myElement', {
      duration: 1000,
      delay: 50,
      smooth: true,
      offset: -150,
    })
  }

  return (
    <Layout>
      <Head>
        <title>Sean Patrick OReilly - Developer, designer, maker</title>
        <link rel="icon" href="favicon.png" />
      </Head>

      <section className="lg:w-7/12 w-6/7 text-center lg:mt-8 mb-20">
        <Image
          className="rounded-full m-auto"
          src="/images/mebw.jpg"
          alt="Image of Sean OReilly"
          height={150}
          width={150}
          priority={true}
          objectFit="cover"
        />
        <h1 className="text-6xl font-bold py-8">Sean Patrick</h1>

        <article className="lg:px-36 text-lg">
          <div className="flex flex-col">
            <p className="leading-relaxed">
              I am a front-end developer specializing in bringing forth
              beautiful and clean designs. I make websites and apps with React,
              JavaScript (ES6+), NextJS, JAMstack architecture, and Ruby on
              Rails. Currently, I am building using the jam stack. Other
              technologies under my belt include JS(ES6+), Ruby on Rails,
              PostgreSQL, APIs, and CMS implementation.
            </p>
            <a
              onClick={scrollTo}
              className="p-2 w-2/7 mt-4 rounded-full text-center self-center cursor-pointer text-sm sm:text-base sm:px-4 dark:text-gray-300 bg-gray-200"
            >
              Projects...
            </a>
          </div>
        </article>
      </section>

      <hr />

      <section>
        <article
          name="myElement"
          className="grid xl:grid-cols-2 gap-x-10 mx-10 lg:mx-56"
        >
          {projectDisplay}
        </article>
      </section>
    </Layout>
  )
}
