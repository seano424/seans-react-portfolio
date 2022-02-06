import { scrollTo } from '@/utils/scroller'
import projects from '@/lib/projectData'
import ProjectCard from '@/components/ProjectCard'
import Technologies from '@/components/Technologies'
import { ArrowUpIcon } from '@heroicons/react/solid'

function ProjectCards() {
  return (
    <section>
      <div name="myElement" className="grid md:grid-cols-2 mt-10 gap-x-10">
        {projects.map((p) => (
          <ProjectCard {...p} key={p.title} />
        ))}
      </div>
      <Technologies />
      <div className="flex justify-center mb-4">
        <a
          onClick={() => scrollTo('top')}
          className="p-4 mt-2 rounded-full text-center self-center cursor-pointer text-xl sm:px-4 font-black shadow-xl dark:bg-gray-50 dark:text-gray-900 transition-all duration-200 ease-linear hover:text-2xl  hover:text-primary animate-pulse"
        >
          <ArrowUpIcon className="h-6" />
        </a>
      </div>
    </section>
  )
}

export default ProjectCards
