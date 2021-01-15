import React, { useState, useEffect, useRef } from "react";
import "./Project.css";

function Project(props) {
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
  const [infoStyle, setInfoStyle] = useState({top: "0px"});
  const [projectStyle, setProjectStyle] = useState("initialState");


  function gotoLive(url) {
    window.open(url, "_blank");
  }
  function gotoGit(url) {
    window.open(url, "_blank");
  }

  function reactToInfoClick(e) {
    if (!up) {
      console.log("Not yet hit, so reacting to image.");
      reactToImage(e);
    } else {
      console.log("reacting.");
      e.stopPropagation();
      e.preventDefault();

      setInfoStyle({
        top: "0px",
        marginTop: "300px",
      });
      setHit(false);
      setUp(false);
    }
  }
  function reactToImage(e) {
    e.stopPropagation();
    e.preventDefault();

    var canvas = e.target;

    // get the current canvas offsets using getBoundingClientRect
    var BB = canvas.getBoundingClientRect();
    var offsetX = BB.left;
    var offsetY = BB.top;

    // calculate the current mouse position relative to the canvas
    // using e.client and the offsets calculated above
    var mouseX = parseInt(e.clientX - offsetX);
    var mouseY = parseInt(e.clientY - offsetY);

    setHighlightStyle({
      left: mouseX - 25 + "px",
      top: mouseY - 25 + "px",
      backgroundColor: "#ffffff",
      borderRadius: "50%",
      transition: "all .002s",
      position: "absolute",
      width: "50px",
      height: "50px",
      opacity: "1",
    });

    let myTimeout = setTimeout(function () {
      // Setting this highlight style -- allows the white circle highlight
      // to animate to a full width that is larger than the containing box

      console.log("");
      console.log("mouseX:", mouseX);
      console.log("mouseY:", mouseY);
      console.log("");

      setHighlightStyle({
        left: mouseX - 350 + "px",
        top: mouseY - 350 + "px",
        width: "700px",
        height: "700px",
        backgroundColor: "#ffffff",
        borderRadius: "50%",
        opacity: "0",
        transition: "all .5s", // this determines the speed of the highlight animation
        position: "absolute",
      });

      let my2ndTimeout = setTimeout(function () {
        setHit(false);
        clearTimeout(my2ndTimeout);
      }, 1000);
      clearTimeout(myTimeout);
    }, 3);

    setUp(false);

    // let imageHeight = projImg.current.height + 8;
    // let imageContainerHeight = projImgContainer;

    if (!hit) {
      // this triggers the info box to animate upwards

      setInfoStyle({
        top: "0px",
        marginTop: "0px",
      });
      setHit(true);
      setUp(true);
    }
  }

  useEffect(() => {
    let revealTimer = setTimeout(function () {
      setProjectStyle("finalState");
    }, 500 + 200 * props.number);

    // let React clear our timeout so we don't have a memory leak
    return () => clearTimeout(revealTimer);
  });

  return (
    <div className={"Project group " + projectStyle} key={props.index}>
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

        <div
          className="projectInfo group"
          style={infoStyle}
          onClick={reactToInfoClick}
        >
          <div className="projectTitle">
            {props.project.title}
            {up ? <div className="closer"></div> : <div></div>}
          </div>

          <div className="projectDescription">{props.project.description}</div>
          <p className="techLabel">Tech Stack:</p>
          <div className="projectTech">
            {props.project.tech.map((tech, techIndex) => (
              <div className="techIcon" key={techIndex}>
                <img
                  className="techShieldIcon"
                  src={require("../images/shields/" +
                    props.project.shields[techIndex] +
                    ".png")}
                  alt={tech}/>
              </div>
            ))}
          </div>

          <div className="outsideLinks">
            <div className="st_button projectGithubLink"
              onClick={() => gotoGit(props.project.github)}>
              Repo
            </div>
            <div className="st_button projectLiveLink"
              onClick={() => gotoLive(props.project.live)}>
              {" "}
              Live Demo
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;

/* Old Host for SpaceForce:   "https://b0rgbart3.github.io/project-one/", */
