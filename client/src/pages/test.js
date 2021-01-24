
import React, { useEffect, useState } from "react";
import mug from "../images/bartdority_pic2.jpg";
import "./test.css";

function Test() {
    const [mugClass, setMugClass] = useState("");
    useEffect( () => {
        let mugTimer = setTimeout(() => {
            setMugClass("visible");
        }, 1800);

    });
    return (
      <img src={mug} className={"mugPic " + mugClass} alt="Bart Dority" />
    )
}

export default Test;
