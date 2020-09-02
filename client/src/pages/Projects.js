import React from "react";
import "./Projects.css";
import Project from "../components/project";
import { usePortfolioContext } from "../utils/GlobalState";

function Projects() {
  const [state, dispatch] = usePortfolioContext();


  return (
    <div className="Projects group">
        <div className="projectslogo">
          BART DORITY<br/>
          PROJECTS
        </div>


        {state.projects.map( (project, index) => (
          <Project project={project} index={index}/>
        ))}
        
  
    </div>
  )
}

export default Projects