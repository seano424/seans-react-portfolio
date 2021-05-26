import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Sean Patrick OReilly - Developer, designer, maker</title>
        <link rel="icon" href="favicon.png" />
      </Head>

      <section className="lg:w-4/7 w-6/7 text-center">
        <Image
          className="rounded-full"
          src="/images/mebw.jpg"
          alt="Image of Sean OReilly"
          height={250}
          width={250}
          objectFit="cover"
          objectPosition="top"
          priority
        />
        <h1 className="text-6xl font-bold py-3">Sean Patrick</h1>

        <article className="px-1">
          <section>
            <p className="pb-7">
              I am a Frontend web developer specializing in building creative
              and problem-solving modules and applications. Currently, I am
              focused on improving the general web experience with web
              accessibility and web standards. I am currently building the{" "}
              <a
                className="hover:underline underline hover:text-red-500 dark:hover:text-green-300"
                href="https://www.karriemariebaxley.com"
                target="_blank"
              >
                artist portfolio for Karrie Marie Baxley
              </a>
              , a simple web app utilizing Sanity's CMS, Next, and TailwindCSS.
            </p>
          </section>
          <section className="flex gap-4 text-2xl justify-center py-5">
            <a
              className="flex items-center"
              href="https://twitter.com/sea_oreilly"
              target="_blank"
            >
              <FiTwitter />
            </a>
            <a
              className="flex items-center"
              href="https://github.com/seano424"
              target="_blank"
            >
              <FiGithub />
            </a>
            <a
              className="flex items-center"
              href="https://www.linkedin.com/in/sea-oreilly/"
              target="_blank"
            >
              <FiLinkedin />
            </a>
          </section>
        </article>
      </section>
    </Layout>
  );
}
