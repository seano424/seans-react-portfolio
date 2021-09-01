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

export default function Technologies() {
  return (
    <article
      name="technologies"
      className="flex flex-col justify-center items-center"
    >
      <h3 className="font-black mb-16 dark:text-white text-black text-5xl">
        Technologies I frequently use
      </h3>
      <aside className="flex flex-wrap text-2xl font-mono gap-10 justify-center items-center w-9/12">
        <div className="flex justify-center items-center gap-2">
          <SiNextDotJs /> <span>NextJS</span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <SiReact /> <span>React</span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <SiRedux /> <span>Redux</span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <SiTailwindcss /> <span>TailwindCSS</span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <SiJavascript /> <span>Vanilla JavaScript</span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <SiSass /> <span>Sass</span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <SiHeroku /> <span>Heroku</span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <SiPostgresql /> <span>PostgreSQL</span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <SiRuby /> <span>Ruby</span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <SiRails /> <span>Rails</span>
        </div>
      </aside>
    </article>
  )
}
