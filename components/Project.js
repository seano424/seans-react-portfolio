import React, { useState } from 'react'
import { FaRegGem } from 'react-icons/fa'
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
    <section className="md:mb-10 mb-20 shadow px-20 py-5 flex flex-col items-center text-center">
      <article className="flex justify-between md:items-center">
        <div className="flex flex-col">
          <a
            title={site}
            href={site}
            aria-label={`Webite for project ${title}`}
            target="_blank"
            className="text-primary hover:underline mr-1 font-extrabold text-2xl"
          >
            {date} | {title}:{' '}
          </a>{' '}
          <span className="font-extrabold my-4">{description}</span>
        </div>
      </article>
      <article className="flex items-center">
        <p
          onClick={() => setOpen(!open)}
          className="mb-3 hover:underline hover:text-purple-500 cursor-pointer flex pt-2 items-center"
        >
          <BiShow className="mr-2" /> Preview Site
        </p>
        <a
          href={repo}
          title={repo}
          target="_blank"
          aria-label={`Github Repo for project ${title}`}
          className="pl-10 md:top-0 flex items-center gap-x-2"
        >
          <FaRegGem /> Github Repo
        </a>
      </article>
      {open && (
        <img
          style={imageStyles}
          className="rounded"
          alt={title}
          src={image}
          layout="responsive"
          width={900}
          height={700}
          objectFit="cover"
          objectPosition="top"
          priority="true"
        />
      )}
    </section>
  )
}
