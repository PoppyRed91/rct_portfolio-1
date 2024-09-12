import "./App.css";
import ProjectsJson from "../public/projects.json";
import ProjectThumb from "./components/ProjectThumb";
import ProjectDetails from "./components/ProjectDetails";
import { useRef, useState } from "react";

import HomeIcon from "./icons/home.svg";
import DiscordIcon from "./icons/discord.svg";
import GithubIcon from "./icons/github.svg";
import LinkedinIcon from "./icons/linkedin.svg";
import MailIcon from "./icons/mail.svg";
import CvIcon from "./icons/cv.svg";

export class Project {
  id: string;
  title: string;
  thumbSrc: string;
  description: string;
  roles: string[];
  screenshots: string[];
  releaseYear: string;
  videoLink: string;
  downloadLink: string;
  constructor(
    id: string,
    title: string,
    thumbSrc: string,
    description: string,
    roles: string[],
    screenshots: string[],
    releaseYear: string,
    videoLink: string,
    downloadLink: string
  ) {
    this.id = id;
    this.title = title;
    this.thumbSrc = thumbSrc;
    this.description = description;
    this.roles = roles;
    this.screenshots = screenshots;
    this.releaseYear = releaseYear;
    this.videoLink = videoLink;
    this.downloadLink = downloadLink;
  }
}

export default function App() {
  const projectsList: Project[] = [];

  for (const project of ProjectsJson) {
    projectsList.push(
      new Project(
        project.id,
        project.title,
        project.thumbSrc,
        project.description,
        project.roles,
        project.screenshots,
        project.releaseYear,
        project.videoLink,
        project.downloadLink
      )
    );
  }

  const [currentProject, setCurrentProject] = useState<Project>(
    new Project("", "", "", "", [], [], "", "", "")
  );

  const [canShowDetails, setCanShowDetails] = useState(false);

  function handleThumbClick(project: Project) {
    setCurrentProject(project);
    setCanShowDetails(true);
  }

  return (
    <>
      <section className="title_container">
        <img
          src={"/assets/title/title.png"}
          alt="aDenoGame Logo"
          className="title_logo"
        />
        <section className="icons_container">
          <img src={HomeIcon} className="icons"></img>
          <img src={DiscordIcon} className="icons"></img>
          <a href="https://github.com/d3noDL" target="_blank">
            <img src={GithubIcon} className="icons"></img>
          </a>
          <a href="https://www.linkedin.com/in/dino-cuturdic/" target="_blank">
            <img src={LinkedinIcon} className="icons"></img>
          </a>
          <a href="mailto:dino@cuturdic.com" target="_blank">
            <img src={MailIcon} className="icons"></img>
          </a>
          <a
            href="./assets/cv/DinoCuturdic_Developer_CV.pdf"
            download={"DinoCuturdic_Developer_CV.pdf"}
          >
            <img src={CvIcon} className="icons"></img>
          </a>
        </section>
      </section>

      <section className="description_container">
        <p className="description">
          Hi, my name is Dino, I'm a
          <span className="span_unity"> Unity developer</span>,
          <span className="span_gamedev"> game programmer</span>,
          <span className="span_network"> network programmer</span> and
          <span className="span_designer"> technical designer</span>. <br></br>I
          excel at prototyping in Unity, developing game-play systems and tools
          to bridge the gap between designers and developers. Games, gaming and
          the gaming industry were and still are my passion and obsession.
        </p>
      </section>
      <p className="project-thumbs_projects">Projects</p>
      <section className="project-thumbs_container">
        {projectsList.map((project) => {
          return (
            <ProjectThumb
              project={project}
              onclick={handleThumbClick}
            ></ProjectThumb>
          );
        })}
      </section>
      <section>
        {canShowDetails && (
          <ProjectDetails project={currentProject}></ProjectDetails>
        )}
      </section>
    </>
  );
}
