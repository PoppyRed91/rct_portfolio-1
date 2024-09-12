import { Project } from "../App";

interface Props {
  project: Project;
}

export default function ProjectDetails({ project }: Props) {
  return (
    <section className="project_details">
      <p className="project_details_title">{project.title}</p>
      <p className="project_details_description">{project.description}</p>
      <p className="project_details_roles">{project.roles}</p>
      <div className="project_details_img_container">
        {project.screenshots.map((screenshot) => {
          return <img src={screenshot} className="project_details_img"></img>;
        })}
      </div>
      <div className="project_details_link_container">
        <a href={project.videoLink} className="project_details_video">
          Video
        </a>
        <a href={project.downloadLink} className="project_details_download">
          Download
        </a>
      </div>
    </section>
  );
}
