import { Project } from "../App";

interface Props {
  project: Project;
  onclick: (project: Project) => void;
}

export default function ProjectCard({ project, onclick }: Props) {
  return (
    <div className="project_thumb_card">
      <p className="project_thumb_title">{project.title}</p>
      <img
        onClick={() => onclick(project)}
        src={project.thumbSrc}
        className="project_thumb_img"
      ></img>
      <p className="project_thumb_year">{project.releaseYear}</p>
    </div>
  );
}
