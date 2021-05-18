import Layout from "../../components/Layout";
import Project from "../../components/Project";
import { v4 as uuidv4 } from "uuid";
import projects from "../../lib/projectData";

export default function Projects() {
  const projectDisplay = projects.map((p) => <Project {...p} key={uuidv4()} />);

  return (
    <Layout>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 gap-y-0 w-9/12">
        {projectDisplay}
      </section>
    </Layout>
  );
}
