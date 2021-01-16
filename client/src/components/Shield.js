import React, { useState, useEffect } from "react";
import "./Project.css";
import react from "../images/shields/react.png";
import express from "../images/shields/express.png";
import node from "../images/shields/node.png";
import sql from "../images/shields/sql.png";
import sequelize from "../images/shields/sequelize.png";


function Shield(props) {
  const [shieldStyle, setShieldStyle] = useState("state1");
  let shields = [ react, node, express, sql, sequelize ];
  let imageSource = shields[props.shieldNumber];

  useEffect(() => {
    let animTimer = setTimeout(function () {
      setShieldStyle("state2");
      clearTimeout(animTimer);
    }, (200 * props.shieldNumber) + 2000);
    // let React clear our timeout so we don't have a memory leak
    return () => clearTimeout(animTimer);
  });

  return (
    <div className={ "shieldContainer " + shieldStyle } key={props.index}>
      <img src={imageSource} className="shield" alt="shield"/>
    </div>
  );
}

export default Shield;
