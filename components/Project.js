import React, { useState } from 'react'
import { FaRegGem, FaGithub } from 'react-icons/fa'
import { BiShow } from 'react-icons/bi'
import Image from 'next/image'
import Link from 'next/link'
import link from 'next/link'

export default function Project({
  title,
  description,
  repo,
  site,
  image,
  date,
}) {
  const [open, setOpen] = useState(true)

  const imageStyles = {
    height: '16em',
    objectFit: 'cover',
    objectPosition: 'top',
  }

  const linkStyles =
    'flex items-center gap-x-1 lg:px-6 lg:py-3 group rounded cursor-pointer lg:bg-gray-200 lg:hover:bg-gray-300 lg:hover:text-white transition-all duration-150 ease-linear text-red-300'

  return (
    <section className="mb-10 rounded-3xl px-10 py-5 flex flex-col dark:bg-white bg-gray-100 bg-opacity-70">
      {open && (
        <div className="bg-gray-600 dark:bg-opacity-100 dark:bg-white bg-opacity-10 hover:bg-opacity-10 lg:p-10 rounded-xl transform hover:scale-105 transition-all duration-200 ease-linear cursor-pointer">
          <Image
            style={imageStyles}
            className="rounded-xl"
            alt={title}
            src={image}
            layout="responsive"
            width={10}
            height={6}
            objectFit="cover"
            objectPosition="top"
            priority={true}
          />
        </div>
      )}
      <article className="lg:h-32">
        <div className="flex flex-col lg:py-4">
          {/* <p className="text-gray-300 font-bold">{date}</p> */}
          <a
            title={site}
            href={site}
            aria-label={`Webite for project ${title}`}
            target="_blank"
            className="text-black transition-all duration-300 ease-linear pt-3 pb-1 dark:hover:text-primary dark:hover:text-opacity-90 dark:text-black font-bold lg:text-2xl uppercase tracking-wide items-start flex flex-col"
          >
            {title}
            <span className="dark:text-gray-500 pt-2 text-sm hidden lg:flex">
              {description}
            </span>
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
