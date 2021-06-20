import React, { useState } from 'react'
import { FaRegGem, FaGithub } from 'react-icons/fa'
import { BiShow } from 'react-icons/bi'
import Image from 'next/image'
import Link from 'next/link'

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

  return (
    <section className="mb-10 dark:bg-gray-800 rounded-3xl shadow px-10 py-5 flex flex-col ">
      <article className="flex justify-center text-center md:items-center">
        <div className="flex flex-col py-4">
          <p className="text-gray-300 font-bold">{date}</p>
          <a
            title={site}
            href={site}
            aria-label={`Webite for project ${title}`}
            target="_blank"
            className="text-primary transition-all duration-300 ease-linear pt-3 pb-1 dark:hover:text-primary dark:hover:text-opacity-90 dark:text-white hover:underline mr-1 font-extrabold text-2xl"
          >
            {title}
          </a>{' '}
          <span className="font-semibold dark:text-gray-500">
            {description}
          </span>
        </div>
      </article>
      {open && (
        <Image
          style={imageStyles}
          className="rounded"
          alt={title}
          src={image}
          layout="responsive"
          width={9}
          height={4}
          objectFit="cover"
          objectPosition="top"
          unoptimized={true}
          priority={true}
        />
      )}
      <article className="flex gap-x-4 py-4 justify-between">
        <Link href={site}>
          <a
            target="_blank"
            className="flex items-center gap-x-1 dark:bg-green-400 px-6 py-3 group rounded-full cursor-pointer"
          >
            <BiShow className="text-2xl" />
            <span className="transform group dark:group-hover:text-gray-100 group-hover:text-gray-300 transition-all duration-100 ease-linear">
              Visit Site
            </span>
          </a>
        </Link>
        <a
          href={repo}
          title={repo}
          target="_blank"
          aria-label={`Github Repo for project ${title}`}
          className="flex gap-x-1 items-center dark:bg-purple-400 px-6 py-3 rounded-full cursor-pointer group"
        >
          <span className="transform group group-hover:text-gray-300 dark:group-hover:text-gray-100 transition-all duration-100  ease-linear">
            GitHub
          </span>{' '}
          <FaGithub className="text-2xl" />
        </a>
      </article>
    </section>
  )
}
