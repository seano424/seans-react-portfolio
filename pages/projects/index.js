import Layout from "../../components/Layout";
import Project from "../../components/Project";
import { v4 as uuidv4 } from "uuid";
import projects from "../../lib/projectData";

export default function Projects({ data }) {
  const projectDisplay = data.map((p) => <Project {...p} key={uuidv4()} />);

  return (
    <Layout>
      <section className="xl:w-5/12 mx-10 md:mx-0">
        <h1 className="text-3xl font-bold mb-8">
          Projects I've worked on recently ...
        </h1>
        {projectDisplay}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = projects;

  return {
    props: { data },
  };
}
