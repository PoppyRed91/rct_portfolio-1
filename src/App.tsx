import "./App.css"
import ProjectCard from "./components/ProjectCard";

export class Project {
  title: string;
  imageSrc: string;
  releaseYear: string;
  constructor(title:string, imageSrc:string, releaseYear: string) {
    this.title = title;
    this.imageSrc = imageSrc;
    this.releaseYear = releaseYear;
  }
}

export default function App() {
  
  const projectsList: Project[] = [];

  projectsList.push(new Project("Test project 1", "assets/something1.png", "2001"));
  projectsList.push(new Project("Test project 2", "assets/something2.png", "2002"));
  projectsList.push(new Project("Test project 3", "assets/something3.png", "2003"));
  
  return (
    <>
      <h1 className="title">Dino Cuturdic</h1>
      <section className="sidebar">
        <p>aboutme</p>
        <a href="https://github.com/d3noDL">github</a>
        <a href="https://www.linkedin.com/in/dino-cuturdic/">linkedin</a>
        <a href="mailto:dino@cuturdic.com">email</a>
      </section>
      <div className="projects">
        {
          projectsList.map((project) => {
            return <ProjectCard title={project.title} imageSrc={project.imageSrc} releaseYear={project.releaseYear}></ProjectCard>
          })
        }
      </div>
    </>
  )
}