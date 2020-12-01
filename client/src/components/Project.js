import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Project.css";

function Project(props) {
  const location = useLocation();
  const highlighter = useRef();
  const projImg = useRef();
  const projImgContainer = useRef();
  const [hit, setHit] = useState(false);
  const [up, setUp] = useState(false);
  const [highlightStyle, setHighlightStyle] = useState({
    left: "100px",
    top: "100px",
    backgroundColor: "#ffffff",
    borderRadius: "50%",
    transition: "all .5s",
    position: "absolute",
    opacity: "1",
    width: "50px",
    height: "50px",
  });
  const [infoStyle, setInfoStyle] = useState({
    top: "0px",
  });

  // const [highlighter, setHighlighter] = useState(false);

  function goLive(url) {
    window.open(url, "_blank");
  }
  function goGit(url) {
    window.open(url, "_blank");
  }

  function reactToInfo(e) {
    console.log("reacting.");
    e.stopPropagation();
    e.preventDefault();


    setInfoStyle({
      top: "0px",
      marginTop: "300px"
    });
    setHit(false);
    setUp(false);


  }
  function reactToImage(e) {
    e.stopPropagation();
    e.preventDefault();

    // let boundingBox = e.target.parentNode;

    // console.log("Parent: ", boundingBox);

    var canvas = e.target;

    // example mousedown handler

    // get the current canvas offsets using getBoundingClientRect
    var BB = canvas.getBoundingClientRect();
    var offsetX = BB.left;
    var offsetY = BB.top;

    // calculate the current mouse position relative to the canvas
    // using e.client and the offsets calculated above
    var mouseX = parseInt(e.clientX - offsetX);
    var mouseY = parseInt(e.clientY - offsetY);

    //console.log("x: ", mouseX, " y: ", mouseY);
    let myTimeout = setTimeout(function () {
   
      setHighlightStyle({
        left: mouseX - 350 + "px",
        top: mouseY - 350 + "px",
        width: "700px",
        height: "700px",
        backgroundColor: "#ffffff",
        borderRadius: "50%",
        opacity: "0",
        transition: "all .5s",
        position: "absolute",
      });

      let my2ndTimeout = setTimeout(function () {
        setHit(false);
      }, 1000);
    }, 1);

    setUp(false);

    setHighlightStyle({
      left: mouseX - 25 + "px",
      top: mouseY - 25 + "px",
      backgroundColor: "#ffffff",
      borderRadius: "50%",
      transition: "all .00001s",
      position: "absolute",
      width: "50px",
      height: "50px",
      opacity: "1",
    });

    
    let imageHeight = projImg.current.height + 8;
    let imageContainerHeight = projImgContainer;
    console.log(projImgContainer.current);

    if (!hit) {
      setInfoStyle({
        top: "0px",
        marginTop: "0px"
      });
      setHit(true);
      setUp(true);
    } 
  }




  return (
    <div className="Project group" key={props.index}>
      <div className="infoContainer group">
        <div className="pImageContainer group" ref={projImgContainer}>
          <img
            ref={projImg}
            className="projectImage"
            src={require("../images/work/" + props.project.images[0])}
            alt={"project: " + props.project.title}
            onClick={reactToImage}
          />
          {hit ? (
            <div
              style={highlightStyle}
              ref={highlighter}
              className="highlighter"
            ></div>
          ) : (
            <div></div>
          )}
        </div>

        <div className="projectInfo group" style={infoStyle} onClick={reactToInfo}>

        <div className="projectTitle">
                {props.project.title}
                { up ? ( <div className='closer'></div>) : ( <div></div>) }
              </div>

         
              <div className="projectDescription">
                {props.project.description} 
              </div>
              <p className="techLabel">Tech Stack:</p>
        <div className="projectTech">
          {props.project.tech.map((tech, techIndex) => (
            <div className="techIcon" key={techIndex}>
              <img
                className="techShieldIcon"
                src={require("../images/shields/" +
                  props.project.shields[techIndex] +
                  ".png")}
                alt={tech}
              />
            </div>
          ))}
        </div>

              {/* <p class='techLabel'>Technology Stack:</p>
              <div className="projectTech">
                { props.project.tech.map( (tech, techIndex) => <div className='techIcon'>
                  <img className="techShieldIcon" src={require("../images/shields/" + props.project.shields[techIndex] + ".png")} />
                </div>) }
              </div> */}

          <div className="outsideLinks">
  
              <div
                className="st_button projectGithubLink"
                onClick={() => goGit(props.project.github)}
              >Repo</div>
            <div
              className="st_button projectLiveLink"
              onClick={() => goLive(props.project.live)}
            > Live Demo</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;