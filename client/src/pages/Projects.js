import React from "react";
import "./Projects.css";
import { usePortfolioContext } from "../utils/GlobalState";

function Projects() {
  const [state, dispatch] = usePortfolioContext();

  function goLive( url ) {
    window.open(url, "_blank");
  }
  function goGit( url ) {
    window.open(url, "_blank");
  }
  return (
    <div className="Projects group">
        <div className="projectslogo">
          BART DORITY<br/>
          PROJECTS
        </div>


        {state.projects.map( (project, index) => (
          <div className="Project group" key={index}>
          <img className="projectImage"src={ require("../images/work/wide/" + project.images[0] )}/>
          <div className="projectInfo group">
          <div className="projectTitle">
             {project.title} 
          </div>
          <div className="projectDescription">
             {project.description} 
          </div>
          <div className="projectLiveLink" onClick={()=>goLive(project.live)}>
             Live Demo
          </div>
          <div className="githubLink">
          <img  className="githubIcon" src={require("../images/icons/github_round.svg")}/>
          <div className="projectGithubLink" onClick={()=>goGit(project.github)}>
            Github Repo
          </div>
          </div>
           </div>
           </div> 

        ))}
        
  
    </div>
  )
}

export default Projects