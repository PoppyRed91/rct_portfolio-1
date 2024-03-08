import "./App.css"
import ProjectsJson from "../public/projects.json";
import ProjectThumb from "./components/ProjectThumb";
import ProjectDetails from "./components/ProjectDetails";
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
    id:string, 
    title:string, 
    thumbSrc:string, 
    description:string, 
    roles:string[], 
    screenshots:string[], 
    releaseYear: string, 
    videoLink:string, 
    downloadLink:string) {
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
          )
  }

  const [currentProject, setCurrentProject] = useState<Project>(new Project("","","","",[],[],"","",""));

  function handleThumbClick(project: Project) {
    setCurrentProject(project)
  }

  return (
    <>
      <section> title
        
      </section>

      <section> side bar
        <p>aboutme</p>
        <a href="https://github.com/d3noDL">github</a>
        <a href="https://www.linkedin.com/in/dino-cuturdic/">linkedin</a>
        <a href="mailto:dino@cuturdic.com">email</a>
      </section>

      <section> project thumbs
        {
          projectsList.map((project) => {
            return <ProjectThumb project={project} onclick={handleThumbClick}></ProjectThumb>
          })
        }
      </section>
      <ProjectDetails project={currentProject}></ProjectDetails>
    </>
  )
}