
import React from "react";
import "./Logo.css";


function Logo(props) {
    return (<>
              <div className="BDlogo">BART
              { props.stacked==="true" ? <br />: <span></span> } DORITY</div>
              <div className="BDtag nobr">Full Stack Developer</div>
            </>
          )}

export default Logo;
