import Avatar from '../../components/Avatar'
import Layout from '../../components/Layout'
import Technologies from '@/components/Technologies'

export default function About() {
  return (
    <Layout>
      <section className="mt-8 w-6/7 xl:w-6/12">
        <article>
          <aside className="flex items-center justify-between">
            <h2 className="font-bold dark:text-white text-black text-6xl tracking-wider">
              About Sean...
            </h2>
            <Avatar image={'/images/avataaars.png'} />
          </aside>
          <aside>
            <p className="my-8 tracking-wider leading-relaxed text-lg font-light">
              Hello! I'm a passionate Frontend Developer specializing in React
              and JavaScript. I am a graduate of the University of Kansas and
              more recently from the Le Wagon Coding Bootcamp where we built
              full stack apps in Ruby on Rails and JavaScript. Since then, I
              have been developing mainly with React and TailwindCSS. I am also
              experienced with the backend, having built sites using PostgreSQL
              and Ruby.
            </p>

            <p className="my-8 tracking-wider leading-relaxed text-lg font-light">
              During my free time you can find me scuba diving 🤿, hiking 🏔,
              traveling 🐫, going to the beach 🐳, reading fiction and various
              publications about the newest technology trends and other
              programming languages, and dabbling in photography 📸. You can
              find out more about me on{' '}
              <a
                className="text-primary"
                href="https://www.instagram.com/sea.oreilly/"
              >
                Instagram
              </a>{' '}
              or{' '}
              <a
                className="text-primary"
                href="https://www.github.com/seano424"
              >
                GitHub
              </a>
              .
            </p>
          </aside>
        </article>
      </section>
      <article className="my-16">
        <Technologies />
      </article>
    </Layout>
  )
}
