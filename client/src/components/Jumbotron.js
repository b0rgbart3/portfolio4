import React from "react";
const jumbotronStyle = {
  paddingBottom: "150px",
  boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
  
};
const textStyle = {
    fontWeight: 900,
    fontSize: "30px"
}
function Jumbotron() {
  return (
    <div className="container">
      <div
        className="card-panel grey lighten-2 "
        style={jumbotronStyle}
      >
        <div className="container">
          <h1>(React) Google Books Search</h1>
          <p style={textStyle}>Search and Save Books of Interest</p>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
