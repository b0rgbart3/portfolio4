import React, {useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Project.css";

function Project(props) {
  const location = useLocation();
  const [hit, setHit] = useState(false);
  const [highlighter, setHighlighter] = useState(false);

  function goLive( url ) {
    window.open(url, "_blank");
  }
  function goGit( url ) {
    window.open(url, "_blank");
  }

  function reactToImage(e) {
    
    e.stopPropagation();
    let boundingBox = e.target.parentNode;

    console.log("Parent: ", boundingBox);
    // let objectX = e.target.offsetLeft;
    // let objectY = e.target.offsetTop;

    // let mousex = e.screenX;
    // let mousey = e.screenY;

    // //console.log(objectX, ":x , ", objectY, ":y");
    // let relativePositionX = mousex - objectX;
    // let relativePositionY = mousey - objectY;

    // console.log("Object x: ", objectX, ", Object y: ", objectY);
    // console.log("Mouse x: ", mousex, ", Mouse y: ", mousey);
    // console.log("x: ", relativePositionX, " , y: ", relativePositionY);

    // get a reference to your canvas element at the start of your app
var canvas=e.target;

// example mousedown handler

// get the current canvas offsets using getBoundingClientRect
var BB=canvas.getBoundingClientRect();
var offsetX=BB.left;
var offsetY=BB.top;        

// calculate the current mouse position relative to the canvas
// using e.client and the offsets calculated above
var mouseX=parseInt(e.clientX-offsetX);
var mouseY=parseInt(e.clientY-offsetY);
setHit(true);

//console.log("x: ", mouseX, " y: ", mouseY);
let myTimeout = setTimeout(function(){ setHit(false); }, 1000);

let highlighter = document.getElementById('highlighter');
console.log(highlighter);


  }
  
  return (
    <div className="Project group" key={props.index}>
    <img className="projectImage" src={ require("../images/work/wide/" + props.project.images[0] )} alt={ "project: "+props.project.title } onClick={reactToImage}/>
    { hit ? <div className='highlighter' style={highlighter} id='highlighter'></div> : <div></div>}
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
