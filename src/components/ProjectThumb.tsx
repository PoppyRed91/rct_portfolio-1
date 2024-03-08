import { Project } from "../App";

interface Props {
    project: Project,
    onclick: (project: Project) => void;
}

export default function ProjectCard({project, onclick}: Props) {
    return(
        <>
            <p>{project.title}</p>
            <img onClick={() => onclick(project)} src={project.thumbSrc}></img>
            <p>{project.releaseYear}</p>
        </>
    )
}