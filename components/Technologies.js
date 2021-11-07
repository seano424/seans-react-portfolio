import {
  SiNextDotJs,
  SiReact,
  SiRails,
  SiJavascript,
  SiRuby,
  SiTailwindcss,
  SiSass,
  SiHeroku,
  SiPostgresql,
  SiRedux,
} from 'react-icons/si'
const technologies = [
  {
    icon: <SiNextDotJs />,
    name: 'NextJS',
  },
  {
    icon: <SiTailwindcss />,
    name: 'TailwindCSS',
  },
  {
    icon: <SiReact />,
    name: 'React',
  },
  {
    icon: <SiRedux />,
    name: 'Redux',
  },
  {
    icon: <SiRails />,
    name: 'Ruby on Rails',
  },
  {
    icon: <SiJavascript />,
    name: 'JavaScript',
  },
  {
    icon: <SiPostgresql />,
    name: 'PostgreSQL',
  },
]

export default function Technologies() {
  return (
    <div
      name="technologies"
      className="flex flex-col my-10 justify-center items-center"
    >
      <h3 className="font-black text-center mb-8 md:mb-16 dark:text-white text-black text-3xl md:text-5xl bg-secondary bg-opacity-20 py-2 px-2">
        Technologies I frequently use...
      </h3>
      <div className="flex flex-col md:flex-row flex-wrap gap-10 font-mono justify-center items-center w-10/12">
        {technologies.map((item) => (
          <div
            key={item.name}
            className="flex justify-center items-center gap-2 text-xl md:text-3xl"
          >
            <span className="md:text-4xl">{item.icon}</span>{' '}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
