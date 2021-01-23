import React from "react";
import "./TechChart.css";
// import sql from "../images/shields/sql.png";
// import express from "../images/shields/express.png";
// import react from "../images/shields/react.png";
// import node from "../images/shields/node.png";
// import sequelize from "../images/shields/sequelize.png";
import { Link } from "react-router-dom";
import Shield from "../components/Shield";

function TechChart() {
  const techObjects = [
    {
    "tech": "React",
    "shield": "react",
    "duration": "1 year",
    "projects": "ImageShoppr, My Google Bookshelf, SpaceForce"
    },
    {
      "tech": "Redux",
      "shield": "redux",
      "duration": "1 month",
      "projects": "SpaceForce"
    },    
    {
      "tech": "Javascript",
      "shield": "js",
      "duration": "15+ years",
      "projects": "All"
      },
    {
    "tech": "Node",
    "shield": "node",
    "duration": "2 years",
    "projects": "My Google Bookshelf, ImageShoppr, The Loom"
    },
    {
    "tech": "Express",
    "shield": "express",
    "duration": "2 years",
    "projects": "My Google Bookshelf, ImageShoppr, The Loom"
    },
    {
    "tech": "Mongo",
    "shield": "mongo",
    "duration": "2 years",
    "projects": "My Google Bookshelf, The Loom, Name List, Memory Lane"
    },
    {
    "tech": "Mongoose",
    "shield": "mongoose",
    "duration": "1 year",
    "projects": "My Google Bookshelf, Name List, Memory Lane"
    },
    {
        "tech": "MySQL",
        "shield": "sql",
        "duration": "5 years",
        "projects": "ImageShoppr, The Loom, MiddleGround, Suppr, JerryFrost.com"
    },
    {
        "tech": "Angular2+",
        "shield": "angular",
        "duration": "2 years",
        "projects": "The Loom" 
    },
    {
        "tech": "Flutter",
        "shield": "flutter",
        "duration": "1 year",
        "projects": "Light Burst 2.0"  
    },
    {
        "tech": "Dart",
        "shield": "dart",
        "duration": "1 year",
        "projects": "Light Burst 2.0"   
    },
    {
        "tech": "Objective C",
        "shield": "objc",
        "duration": "2 years",
        "projects": "Light Burst"   
    },
    {
        "tech": "PHP",
        "shield": "php",
        "duration": "7 years",
        "projects": "Jerry Frost.com, DDWorks.org"   
    },
    {
        "tech": "HTML 5",
        "shield": "html",
        "duration": "15+ years",
        "projects": "All"  
    },
    {
        "tech": "CSS 3",
        "shield": "css",
        "duration": "15+ years",
        "projects": "All"   
    }

  ];


  return (
    <div className="tcBox">
     <Link to="/">
      <h1>BART DORITY</h1>
      <h2>
        <span className="nobr">Full Stack Developer</span>
      </h2></Link>
      <br></br>
      <h2 id="endH2">Technical Skills</h2>
      <div className="tech">
        <div className='techShield'></div>
        <div className='techName label'>Technology</div>
        <div className='techYears label'>Experience</div>
        <div className='techYears label'>Projects</div>
      </div>
      {techObjects.map((techObj, index) => (
       <div className={index%2===0 ? "tech" : "tech alt" } key={index}>
       
        <div className="techShield">
        <img
                  className="techShieldIcon"
                  src={require("../images/shields/" +
                    techObj["shield"] +
                    ".png")} />
                    {/* <Shield shieldNumber={index} animate="false" /> */}
                    </div>
        <div className="techName">{techObj["tech"]}</div>
        <div className="techYears">{techObj["duration"]}</div>
        <div className="techProject">{techObj["projects"]}</div>

       </div>
        
      ))}
    </div>
  );
}

export default TechChart;

