import React, {useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Project.css";

function Project(props) {
  const location = useLocation();
  const highlighter = useRef();
  const projImg = useRef();
  const [hit, setHit] = useState(false);
  const [highlightStyle, setHighlightStyle] = useState({
    left: "100px",
    top: "100px",
    backgroundColor: "#ffffff",
    borderRadius: "50%",
    transition: "all .5s",
    position: "absolute",
    opacity:"1",
    width: "50px",
    height: "50px",
  });
  const [infoStyle, setInfoStyle] = useState({
    top:"0px",
  })

  // const [highlighter, setHighlighter] = useState(false);

  function goLive( url ) {
    window.open(url, "_blank");
  }
  function goGit( url ) {
    window.open(url, "_blank");
  }

  function reactToImage(e) {
    
    e.stopPropagation();
    e.preventDefault();

    // let boundingBox = e.target.parentNode;

    // console.log("Parent: ", boundingBox);

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


//console.log("x: ", mouseX, " y: ", mouseY);
 let myTimeout = setTimeout(function(){ 

  setHighlightStyle( {
    left: mouseX-350 + "px", top:mouseY-350 + "px",
    width:"700px", height:"700px",
    backgroundColor: "#ffffff",
    borderRadius: "50%",
    opacity:"0",
    transition: "all .5s",
    position: "absolute",
  });

 let my2ndTimeout = setTimeout(function(){ 

  setHit(false);
 }, 1000);

 }, 1);

setHighlightStyle( {
  left: mouseX-25 + "px", top:mouseY-25 + "px",
  backgroundColor: "#ffffff",
  borderRadius: "50%",
  transition: "all .00001s",
  position: "absolute",
  width:"50px", height:"50px",
  opacity:"1"
});

console.log(projImg.current.height);
let imageHeight = projImg.current.height+8;
setInfoStyle( {
  top:"-" + imageHeight + "px",
})
setHit(true);
  }
  
  return (
    <div className="Project group" key={props.index} onClick={reactToImage}>
       <div className="infoContainer">
      <img ref={projImg} className="projectImage" src={ require("../images/work/wide/" + props.project.images[0] )} alt={ "project: "+props.project.title }  />
      { hit ? <div style={highlightStyle} ref={highlighter} className="highlighter"></div> : <div></div>}

   
          <div className="projectInfo group" style={infoStyle}>
              <div className="projectTitle">
                {props.project.title}
              </div>
              <div className="projectDescription">
                {props.project.description} 
              </div>
      
              <div className="outsideLinks">
              <div className="githubLink">
                <img  className="githubIcon" src={require("../images/icons/github_round.svg")} alt="github repo"/>
                <div className="projectGithubLink" onClick={()=>goGit(props.project.github)}>
                  Github Repo
                </div>
              </div>
              <div className="projectLiveLink" onClick={()=>goLive(props.project.live)}>
                    Live Demo
                  </div>

              </div>
          </div>
      </div>
      </div>
      

  );
}

export default Project;
