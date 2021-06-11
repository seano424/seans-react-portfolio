import React, { useState } from 'react'
import { FaRegGem, FaGithub } from 'react-icons/fa'
import { BiShow } from 'react-icons/bi'
import Image from 'next/image'

export default function Project({
  title,
  description,
  repo,
  site,
  image,
  date,
}) {
  const [open, setOpen] = useState(false)

  const imageStyles = {
    height: '16em',
    objectFit: 'cover',
    objectPosition: 'top',
  }

  return (
    <section className="mb-10 dark:bg-gray-800 rounded-3xl shadow px-10 py-5 flex flex-col ">
      <article className="flex justify-between md:items-center">
        <div className="flex flex-col">
          <span className="font-semibold dark:text-gray-500">
            {description}
          </span>
          <a
            title={site}
            href={site}
            aria-label={`Webite for project ${title}`}
            target="_blank"
            className="text-primary transition-all duration-300 ease-linear pt-3 pb-1 dark:hover:text-primary dark:hover:text-opacity-90 dark:text-white hover:underline mr-1 font-extrabold text-2xl"
          >
            {date} | {title}:{' '}
          </a>{' '}
        </div>
      </article>
      <article className="flex gap-x-4 pb-4">
        <p
          onClick={() => setOpen(!open)}
          className="flex items-center gap-x-1 dark:bg-green-400 px-4 py-2 rounded-full cursor-pointer"
        >
          <BiShow className="text-2xl" />
          <span>Preview</span>
        </p>
        <a
          href={repo}
          title={repo}
          target="_blank"
          aria-label={`Github Repo for project ${title}`}
          className="flex gap-x-1 items-center dark:bg-purple-400 px-4 py-2 rounded-full cursor-pointer"
        >
          <span>GitHub</span> <FaGithub className="text-2xl" />
        </a>
      </article>
      {open && (
        <Image
          style={imageStyles}
          className="rounded"
          alt={title}
          src={image}
          layout="responsive"
          width={9}
          height={7}
          objectFit="cover"
          objectPosition="top"
          priority={true}
        />
      )}
    </section>
  )
}
