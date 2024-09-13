import { Project } from "../App";
import ProjectThumb from "../components/ProjectThumb";

interface Props {
  onclick: (project: Project) => void;
  projectsList: Project[];
}

export default function LandingPage({ onclick, projectsList }: Props) {
  return (
    <>
      <section className="description_container">
        <p className="description">
          Hi, my name is Dino, I'm a
          <span className="span_unity"> Unity developer</span>,
          <span className="span_gamedev"> game programmer</span>,
          <span className="span_network"> network programmer</span> and
          <span className="span_designer"> technical designer</span>. <br></br>I
          excel at prototyping in Unity, developing game-play systems and tools
          to bridge the gap between designers and developers. <br></br>Games,
          gaming and the gaming industry were and still are my passion and
          obsession.
        </p>
      </section>
      <p className="project-thumbs_projects">Projects</p>
      <section className="project-thumbs_container">
        {projectsList.map((project) => {
          return (
            <ProjectThumb project={project} onclick={onclick}></ProjectThumb>
          );
        })}
      </section>
    </>
  );
}
