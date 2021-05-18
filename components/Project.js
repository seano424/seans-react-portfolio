import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { BsFillStarFill } from "react-icons/bs";
import Image from "next/image";

export default function Project({ title, description, repo, site, image }) {
  return (
    <div className="my-5 mx-auto shadow-lg px-6">
      <div className="mb-4">
        <h5 className="flex items-center text-xs opacity-80 py-1 dark:text-gray-400">
          <BsFillStarFill />
          <span className="pl-2"> Featured Project</span>
        </h5>
        <h1 className="text-2xl font-bold">
          <a target="_blank" href={site}>
            {title}
          </a>
        </h1>
        <Image
          src={image}
          alt={title}
          width={500}
          height={200}
          objectFit="cover"
          objectPosition="top"
          priority={true}
        />
      </div>
      <div className=" xl:p-5 rounded xl:h-40">
        <p>{description}</p>
      </div>
      <div className="flex items-center dark:text-gray-300 py-4">
        <a href={repo} target="_blank" className="pr-4 text-xl">
          <FiGithub />
        </a>
        <span className="text-xl">
          <a href={site} target="_blank">
            <FiExternalLink />
          </a>
        </span>
      </div>
    </div>
  );
}
