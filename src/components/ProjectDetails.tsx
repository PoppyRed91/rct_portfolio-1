import { Project } from "../App";

interface Props {
    project: Project;
}

export default function ProjectDetails({project}: Props) {
    return(
        <>
            <p>{project.title}</p>
            <p>{project.description}</p>
            <p>{project.roles}</p>
            <div>
                {project.screenshots.map((screenshot) => {
                    return <img src={screenshot}></img>
                })}
            </div>
            <a href={project.videoLink}>Video</a>
            <a href={project.downloadLink}>Download</a>
        </>
    )
}