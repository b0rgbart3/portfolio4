import React from "react";
import "./Projects.scss";
import Project from "../components/Project";
import { usePortfolioContext } from "../utils/GlobalState";

function Projects() {
  const [state ] = usePortfolioContext();


  return (
    <div className="Projects group">

        {state.projects.map( (project, index) => (
          <Project project={project} key={index} number={index}/>
        ))}
        
  
    </div>
  )
}

export default Projects