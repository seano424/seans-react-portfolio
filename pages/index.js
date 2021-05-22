import Head from "next/head";
import Layout from "../components/Layout";
import { FiGithub, FiLinkedin, FiExternalLink } from "react-icons/fi";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Sean Patrick OReilly - Developer, designer, maker</title>
        <link rel="icon" href="favicon.png" />
      </Head>

      <section className="mt-5 lg:w-3/7 w-5/7">
        <p className="pl-1">Hi, My name is </p>
        <h1 className="text-6xl font-bold py-3">Sean OReilly</h1>
        <article className="flex pb-6 pl-1">
          <a
            className="flex items-center pr-10"
            href="https://github.com/seano424"
            target="_blank"
          >
            <FiGithub /> <p className="px-2">Github</p>
            <FiExternalLink />
          </a>
          <a
            className="flex items-center"
            href="https://www.linkedin.com/in/sea-oreilly/"
            target="_blank"
          >
            <FiLinkedin /> <p className="px-2">LinkedIn</p>
            <FiExternalLink />
          </a>
        </article>

        <article className="py-5 px-1">
          <p className="pb-7">
            I am a Frontend web developer specializing in building creative and
            problem-solving modules and applications. Currently, I am focused on
            improving the general web experience with web accessibility and web
            standards.
          </p>

          <p>
            I am currently building the{" "}
            <a
              className="hover:underline hover:text-red-500 dark:hover:text-green-300"
              href="https://www.karriemariebaxley.com"
              target="_blank"
            >
              artist portfolio for Karrie Marie Baxley
            </a>
            , a simple web app utilizing Sanity's CMS, Next, and TailwindCSS.
          </p>
        </article>
        <button className="rounded bg-gradient-to-tr dark:from-yellow-200 dark:to-pink-600 p-1">
          <a
            href="mailto:soreilly424@gmail.com"
            className="flex items-center border-2 border-purple-400
            dark:border-transparent dark:bg-dark-soft py-4 px-6 rounded
            dark:text-gray-100 font-medium dark:bg-black"
          >
            {" "}
            Get in touch
          </a>
        </button>
      </section>
    </Layout>
  );
}
