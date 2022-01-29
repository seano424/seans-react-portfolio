import Layout from '../../components/Layout'
import Project from '../../components/ProjectCard'
import { v4 as uuidv4 } from 'uuid'
import projects from '../../lib/projectData'

export default function Projects() {
  return (
    <Layout>
      <section className="flex flex-col items-center">
        <h1 className="text-6xl font-bold mt-16 tracking-wide">Projects</h1>
        <p className="my-10 text-xl dark:text-gray-400 text-gray-700 lg:w-3/12 text-center">
          I'm always working on new projects. You can find them on my{' '}
          <a
            href="https://github.com/seano424"
            target="_blank"
            className="text-black hover:text-primary dark:text-white font-bold leading-loose transition-all duration-150 ease-linear border-b-2 border-black pb-1"
          >
            GitHub
          </a>
          .
        </p>
        <article className="grid lg:grid-cols-2 gap-10">
          {projects.map((p) => (
            <Project {...p} key={uuidv4()} />
          ))}
        </article>
      </section>
    </Layout>
  )
}
