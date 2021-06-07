import React from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import { BsCaretRight } from "react-icons/bs";

export default function About(props) {
  return (
    <Layout>
      <section className="mt-20 w-6/7 xl:w-3/7">
        <article className="flex flex-col items-center justify-center mb-16">
          <Image
            className="rounded-full"
            src="/images/mebw.jpg"
            alt="Image of Sean OReilly"
            height={100}
            width={100}
            objectFit="cover"
            objectPosition="center"
            priority
          />
          <h1 className="font-bold text-base tracking-wider mt-6 mb-3 uppercase">
            Sean OReilly
          </h1>
          <div>
            <a
              className="uppercase text-sm text-blue-400"
              href="https://github.com/seano424"
              target="_blank"
            >
              Github
            </a>
            <span> · </span>
            <a
              className="uppercase text-sm text-blue-400"
              href="https://twitter.com/sea_oreilly"
              target="_blank"
            >
              Twitter
            </a>
            <span> · </span>
            <a
              className="uppercase text-sm text-blue-400"
              href="https://www.instagram.com/sea.oreilly/"
              target="_blank"
            >
              Instagram
            </a>
          </div>
        </article>
        <article>
          <h2 className="font-bold text-5xl tracking-wider">About</h2>
          <p className="my-12">
            I was a Software Engineer previously found at OddCamp, where I
            primarily worked on front end engineering using Gatsby, Rails, and
            TailwindCSS as my toolkit. I enjoy solving complicated problems
            using open-source software.
          </p>
          <p className="my-12">
            I was born in Kansas City, went to University in Kansas, and then
            promptly moved to Thailand upon graduation to become a teacher and
            travel the world for a few years. Since early 2015 I’ve been setting
            up in such varied cities as Bangkok, Ho Chi Minh City, Huelva and
            Murcia, Spain, and Playa del Carmen, Mexico where I currently
            reside. I have had the incredible privledge to travel and see more
            of the world than most can dream of. Although I loved teaching and
            was deeply passionate about my students success, I am so excited to
            be taking on a new creative endeavor to push me even further and one
            that can challenge me and my desire for problem solving and going
            beyond what I already know.
          </p>
          <p className="my-12">
            I am currently focused on turning myself into a front end developer
            creating clean user interfaces with web accessibility in mind. I'm
            fascinated by creative UI and love to create visually immersive user
            experiences with design and code.
          </p>
          <p className="my-12">
            For the last two years, I have been mostly working on transitioning
            into the world of tech, while building projects using Javascript and
            developing web apps using React. Recently I made a switch to Next.js
            from CRA and I'm loving the experience so far.
          </p>
          <p className="my-12">
            In October 2020 I decided to take the big jump and began my studies
            as a web developer by joining the team at Le Wagon Mexico, a highly
            rated full stack web development bootcamp with locations based all
            over the world. In the bootcamp we focused on building apps using
            Ruby on Rails, Bootstrap, PostgreSQL, and Heroku for deployment.
            Since then I have been dabbling in other technologies, specifically
            React and JS - building client websites using a combination of Next
            JS, TailwindCSS, and Sanity CMS.
          </p>
          <p className="my-12">
            Few things that I am currently learning and getting comfortable in
            are Typescript and Test-Driven React application development.
          </p>
          <div className="my-12">
            <p className="mb-4">
              Here are a few technologies I've been working with lately:
            </p>
            <aside className="grid grid-cols-2">
              <div>
                <p className="flex items-center">
                  <BsCaretRight /> <span>Javascript (ES6+) </span>
                </p>
              </div>
              <div>
                <p className="flex items-center">
                  <BsCaretRight /> <span>TailwindCSS </span>
                </p>
              </div>
              <div>
                <p className="flex items-center">
                  <BsCaretRight /> <span>React </span>
                </p>
              </div>
              <div>
                <p className="flex items-center">
                  <BsCaretRight /> <span>Next</span>
                </p>
              </div>
              <div>
                <p className="flex items-center">
                  <BsCaretRight /> <span>Sanity CMS</span>
                </p>
              </div>
              <div>
                <p className="flex items-center">
                  <BsCaretRight /> <span>Ruby on Rails</span>
                </p>
              </div>
            </aside>
          </div>
        </article>
        <article className="mb-20">
          <h3 className="text-3xl font-bold my-10">Where I've worked - </h3>
          <h5 className=" font-semibold mt-5 opacity-90 text-lg">
            Frontend engineer (intern) -{" "}
            <a
              className=" hover:text-green-300 hover:underline transit duration-100 ease-linear"
              href="https://www.oddcamp.com/"
            >
              Oddcamp
            </a>
          </h5>
          <p className="mb-5 opacity-60">January 2021 - May 2021</p>
          <p className="flex items-center mb-2">
            <BsCaretRight />{" "}
            <span>
              Worked on the design and prototype of the main landing page
            </span>
          </p>
          <p className="flex items-center mb-2">
            <BsCaretRight />{" "}
            <span>
              Improved the overall SEO optimization and worked on deployements
            </span>
          </p>
          <p className="flex items-center mb-2">
            <BsCaretRight />{" "}
            <span>Implemented Google Analytics 4 and Ahoy tracking</span>
          </p>
        </article>
      </section>
    </Layout>
  );
}
