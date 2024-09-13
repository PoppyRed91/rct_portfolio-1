import { useParams } from "react-router-dom";
import { Project, projectsList } from "../App";

interface Props {
  projectToDisplay: Project;
}

export default function ProjectDetails({ projectToDisplay }: Props) {
  const projectId = useParams().toString();

  console.log(projectId);
  console.log(projectToDisplay);
  return (
    <section className="project_details">
      <p className="project_details_title">{projectToDisplay?.title}</p>
      <p className="project_details_description">
        {projectToDisplay?.description}
      </p>
      <p className="project_details_roles">{projectToDisplay?.roles}</p>
      <div className="project_details_img_container">
        {projectToDisplay?.screenshots.map((screenshot) => {
          return <img src={screenshot} className="project_details_img"></img>;
        })}
      </div>
      <div className="project_details_link_container">
        <a
          href={projectToDisplay?.videoLink}
          className="project_details_video"
          target="_blank"
        >
          Video
        </a>
        <a
          href={projectToDisplay?.downloadLink}
          className="project_details_download"
          target="_blank"
        >
          Download
        </a>
      </div>
    </section>
  );
}
