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

  projectsList.push(new Project("The Black Mass", "assets/mass.png", "202X"));
  projectsList.push(new Project("Evolytes VR", "assets/evolytes.png", "2023"));
  projectsList.push(new Project("Dreamers: Echo in the Night", "assets/dreamers.png", "2022"));
  projectsList.push(new Project("Echo in the Night", "assets/echo.png", "2022"));
  projectsList.push(new Project("Knightboy", "assets/knightboy.png", "2018"));
  projectsList.push(new Project("The Incredible Whippersnappers", "assets/whippersnappers.png", "2018"));
  projectsList.push(new Project("A Synthetic Nation", "assets/synthetic.png", "2017"));
  projectsList.push(new Project("The Winship Conundrum", "assets/winship.png", "2017"));
  projectsList.push(new Project("Boxy Quest", "assets/boxy.png", "2015"));
  
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