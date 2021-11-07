import { FaGithub } from 'react-icons/fa'
import { BiShow } from 'react-icons/bi'
import Image from 'next/image'
import Link from 'next/link'

export default function Project({ title, description, repo, site, image }) {
  const linkStyles =
    'flex items-center gap-x-1 lg:px-6 lg:py-3 group rounded cursor-pointer lg:bg-gray-200 lg:hover:bg-gray-300 lg:hover:text-pink-100 transition-all duration-150 ease-linear text-primary font-bold'

  return (
    <section className="mb-10 rounded-lg p-4 lg:px-6 flex flex-col dark:bg-black bg-gray-100 bg-opacity-70">
      <a
        href={site}
        target="_blank"
        className="transform hover:scale-105 duration-150"
      >
        <Image
          className="object-cover object-top block rounded-lg "
          alt={title}
          src={image}
          layout="responsive"
          width={10}
          height={6}
        />
      </a>

      <article className="lg:h-40">
        <div className="flex flex-col lg:py-4">
          <a
            title={site}
            href={site}
            aria-label={`Webite for project ${title}`}
            target="_blank"
            className="transition-all duration-300 ease-linear pt-3 pb-1 tracking-wide items-start flex flex-col"
          >
            <h3 className="text-primary dark:hover:text-white text-xs font-bold">
              {title}
            </h3>

            <p className="dark:text-white pt-2 md:text-lg">{description}</p>
          </a>{' '}
        </div>
      </article>
      <article className="flex gap-x-4 pt-2 lg:pt-8 justify-between">
        <Link href={site}>
          <a target="_blank" className={linkStyles}>
            <BiShow className="text-2xl" />
            <span className="transform group dark:group-hover:text-gray-100 transition-all duration-100 ease-linear">
              Visit Site
            </span>
          </a>
        </Link>
        <a
          href={repo}
          title={repo}
          target="_blank"
          aria-label={`Github Repo for project ${title}`}
          className={linkStyles}
        >
          <span className="transform group dark:group-hover:text-gray-100 transition-all duration-100 ease-linear">
            GitHub
          </span>{' '}
          <FaGithub className="text-2xl" />
        </a>
      </article>
    </section>
  )
}
