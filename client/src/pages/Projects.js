import React from "react";
import "./Projects.css";
import { usePortfolioContext } from "../utils/GlobalState";

function Projects() {
  const [state, dispatch] = usePortfolioContext();

  return (
    <div className="Projects group">
        <div className="projectslogo">
          BART DORITY<br/>
          PROJECTS
        </div>


        {state.projects.map( (project) => (
          <div className="Project">
          <img className="projectImage"src={ "images/work/" + project.images[0]}/>
          <div className="projectTitle">
           {project.title} 
          </div>
          <div className="projectDescription">
          {project.description} 
          </div>
           
           </div> 

        ))}
        
  
    </div>
  )
}

export default Projects