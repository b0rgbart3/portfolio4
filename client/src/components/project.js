import React from "react";
import { Link, useLocation } from "react-router-dom";


function Project(props) {
  const location = useLocation();

  function goLive( url ) {
    window.open(url, "_blank");
  }
  function goGit( url ) {
    window.open(url, "_blank");
  }
  
  return (
    <div className="Project group" key={props.index}>
    <img className="projectImage" src={ require("../images/work/wide/" + props.project.images[0] )} alt={ "project: "+props.project.title }/>
    <div className="projectInfo group">
    <div className="projectTitle">
       {props.project.title} 
    </div>
    <div className="projectDescription">
       {props.project.description} 
    </div>
    <div className="projectLiveLink" onClick={()=>goLive(props.project.live)}>
       Live Demo
    </div>
    <div className="githubLink">
    <img  className="githubIcon" src={require("../images/icons/github_round.svg")} alt="github repo"/>
    <div className="projectGithubLink" onClick={()=>goGit(props.project.github)}>
      Github Repo
    </div>
    </div>
     </div>
     </div> 
  );
}

export default Project;
