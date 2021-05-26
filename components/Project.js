import React, { useState } from "react";
import { FaRegGem } from "react-icons/fa";
import { BiShow } from "react-icons/bi";
import Image from "next/image";

export default function Project({
  title,
  description,
  repo,
  site,
  image,
  date,
}) {
  const [open, setOpen] = useState(false);

  return (
    <section className="md:mb-10 mb-20">
      <article className="flex justify-between md:items-center">
        <div>
          <a
            title={site}
            href={site}
            aria-label={`Webite for project ${title}`}
            target="_blank"
            className="text-primary hover:underline mr-1"
          >
            {date} | {title}:{" "}
          </a>{" "}
          <span>{description}</span>
        </div>
        <a
          href={repo}
          title={repo}
          target="_blank"
          aria-label={`Github Repo for project ${title}`}
          className="relative top-1 md:top-0"
        >
          <FaRegGem />
        </a>
      </article>
      <article>
        <p
          onClick={() => setOpen(!open)}
          className="mb-3 hover:underline hover:text-purple-500 cursor-pointer flex pt-2 items-center border-t-2"
        >
          <BiShow className="mr-2" /> Preview Site
        </p>
        {open && (
          <img
            alt={title}
            src={image}
            layout="responsive"
            width={900}
            height={700}
            objectFit="cover"
            objectPosition="top"
            priority={true}
          />
        )}
      </article>
    </section>
  );
}
