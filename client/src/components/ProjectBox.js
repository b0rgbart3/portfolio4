import React, {useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./ProjectBox.css";

function ProjectBox(props) {
  const projImg = useRef();
 // const [hit, setHit] = useState(false);
  const [cardStyle, setCardStyle] = useState({
    transform: "rotateY(0deg)"
  });
  const [cardBackStyle, setCardBackStyle] = useState({
    transform: "rotateY(94deg)",
   
  });


  function goLive( url ) {
    window.open(url, "_blank");
  }
  function goGit( url ) {
    window.open(url, "_blank");
  }

  function unflip() {
    console.log("Unflipping");
    let myTimeout = setTimeout(function(){ 
      setCardStyle (
        {
          transform: "rotateY(-90deg)",
          opacity:"0",
          
        }
      );

      setCardBackStyle( {
        transform: "rotateY(270deg)",
        transition: "all .5s",
        display: "inline-block",
        opacity:"1"
      });
    }, 10);
    let my2ndTimeout = setTimeout(function() {
      setCardBackStyle( {
        display: "none"
      });
      setCardStyle( {
        transform: "rotateY(0deg)",
        transition: "all .5s",
        opacity:"1"
      });
    }, 500);

  }

  function flip() {
    setCardStyle( {
      transform: "rotateY(90deg)",
      transition: "all .5s"
    });

    let myTimeout = setTimeout(function(){ 
    
      setCardBackStyle( {
        opacity: "0",
        display: "inline-block",
        transition: "all .5s",
        transform: "rotateY(92deg)"
      });
    
      let my2ndTimeout = setTimeout(function() {
        setCardBackStyle( {
          transform: "rotateY(180deg)",
          opacity: "1",
          display: "inline-block"
        });
        setCardStyle( {
          opacity:"0",
          transition: "0s"
        })
  
 
      }, 500);
    
    }, 1);
  }

  function reactToProject(e) {
    
    e.stopPropagation();
    e.preventDefault();
     flip();
    
    }

    function reactToImage(e) {
    
      e.stopPropagation();
      e.preventDefault();
       unflip();
      
      }

      // const [highlightStyle, setHighlightStyle] = useState({
  //   left: "100px",
  //   top: "100px",
  //   backgroundColor: "#ffffff",
  //   borderRadius: "50%",
  //   transition: "all .5s",
  //   position: "absolute",
  //   opacity:"1",
  //   width: "50px",
  //   height: "50px",
  // });
  // const [infoStyle, setInfoStyle] = useState({
  //   top:"0px",
  // })

  // const [highlighter, setHighlighter] = useState(false);
    // let boundingBox = e.target.parentNode;

    // console.log("Parent: ", boundingBox);

// var canvas=e.target;

// example mousedown handler

// get the current canvas offsets using getBoundingClientRect
// var BB=canvas.getBoundingClientRect();
// var offsetX=BB.left;
// var offsetY=BB.top;        

// // calculate the current mouse position relative to the canvas
// // using e.client and the offsets calculated above
// var mouseX=parseInt(e.clientX-offsetX);
// var mouseY=parseInt(e.clientY-offsetY);


//console.log("x: ", mouseX, " y: ", mouseY);


  // setHighlightStyle( {
  //   left: mouseX-350 + "px", top:mouseY-350 + "px",
  //   width:"700px", height:"700px",
  //   backgroundColor: "#ffffff",
  //   borderRadius: "50%",
  //   opacity:"0",
  //   transition: "all .5s",
  //   position: "absolute",
  // });

//  let my4thTimeout = setTimeout(function(){ 

//   setHit(false);
//  }, 1000);



// setHighlightStyle( {
//   left: mouseX-25 + "px", top:mouseY-25 + "px",
//   backgroundColor: "#ffffff",
//   borderRadius: "50%",
//   transition: "all .00001s",
//   position: "absolute",
//   width:"50px", height:"50px",
//   opacity:"1"
// });

// console.log(projImg.current.height);
// let imageHeight = projImg.current.height+8;
// setInfoStyle( {
//   top:"-" + imageHeight + "px",
// })
//setHit(true);

  
  return (
    <div className="projectContainer">
    <div className="Project group" key={props.index} onMouseUp={reactToProject} style={cardStyle}>


      {/* { hit ? <div style={highlightStyle} ref={highlighter} className="highlighter"></div> : <div></div>} */}

   
   
              <div className="projectTitle">
                {props.project.title}
              </div>
              <div className="projectDescription">
                {props.project.description} 
              </div>
              <p class='techLabel'>Technology Stack:</p>
              <div className="projectTech">
                { props.project.tech.map( (tech, techIndex) => <div className='techIcon'>
                  <img className="techShieldIcon" src={require("../images/shields/" + props.project.shields[techIndex] + ".png")} />
                </div>) }
              </div>
      
             
       

          <div className="outsideLinks group">
              <div className="githubLink">
                <img  className="githubIcon" src={require("../images/icons/github_round.svg")} alt="github repo"/>
                <div className="projectGithubLink" onClick={()=>goGit(props.project.github)}>
                  Github Repo
                </div>
              </div>
 

              </div>
    </div>
    <div className="projectBack group" style={cardBackStyle}  onMouseUp={reactToImage}>
    <img ref={projImg} className="projectImage" src={ require("../images/work/" + props.project.images[0] )} alt={ "project: "+props.project.title }  />
    <div className="projectLiveLink" onClick={()=>goLive(props.project.live)}>
                    Live Demo
                  </div>
    </div>
    
    </div>
  );
}

export default ProjectBox;


// <img ref={projImg} className="projectImage" src={ require("../images/work/wide/" + props.project.images[0] )} alt={ "project: "+props.project.title }  />