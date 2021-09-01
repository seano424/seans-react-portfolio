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
              I'm a Le Wagon Bootcamp Graduate currently freelancing and
              building projects on the side. I have decided to take advantage of
              the strange times and take the exciting plunge into developing a
              new career!
            </p>
            <p className="my-8 tracking-wider leading-relaxed text-lg font-light">
              Since 2020, I've been living in Playa del Carmen and working
              freelance as a Jamstack and Rails Developer. I was previously a
              front-end intern for the design and engineering company, Odd Camp,
              and before that I worked as a teacher.
            </p>
            <p className="my-8 tracking-wider leading-relaxed text-lg font-light">
              During my free time I enjoy diving, hiking, travelling, going to
              the beach, reading fiction and various publications about the
              newest technology trends and other programming languages, and
              photography. You can find out more about me on my{' '}
              <a href="https://www.instagram.com/sea.oreilly/">Instagram</a> or{' '}
              <a href="https://www.github.com/seano424">GitHub</a>.
            </p>
          </aside>
        </article>
        <article className="my-16">
          <Technologies />
        </article>
      </section>
    </Layout>
  )
}
