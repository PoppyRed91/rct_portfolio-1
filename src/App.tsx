import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import { NavLink } from "react-router-dom";
import ProjectsJson from "../public/projects.json";
import HomeIcon from "./icons/home.svg";
import DiscordIcon from "./icons/discord.svg";
import GithubIcon from "./icons/github.svg";
import LinkedinIcon from "./icons/linkedin.svg";
import MailIcon from "./icons/mail.svg";
import CvIcon from "./icons/cv.svg";
import ProjectDetails from "./Pages/ProjectDetailsPage";
import { useState } from "react";

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

export let projectsList: Project[] = [];

export default function App() {
  projectsList = [];
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

  const navigate = useNavigate();
  function handleThumbClick(project: Project) {
    setCurrentProject(project);
    navigate(`${project.id}`);
  }

  return (
    <>
      <section className="title_container">
        <NavLink to="/">
          <img
            src={"/assets/title/title.png"}
            alt="aDenoGame Logo"
            className="title_logo"
          />
        </NavLink>
        <section className="icons_container">
          <NavLink to="/">
            <img src={HomeIcon} className="icons"></img>
          </NavLink>
          <a href="https://discordapp.com/users/d3nodl" target="_blank">
            <img src={DiscordIcon} className="icons"></img>
          </a>
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
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              onclick={handleThumbClick}
              projectsList={projectsList}
            />
          }
        ></Route>
        <Route
          path="/:id"
          element={<ProjectDetails projectToDisplay={currentProject} />}
        ></Route>
      </Routes>
    </>
  );
}
