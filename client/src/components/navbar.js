import React from "react";
import { Link, useLocation } from "react-router-dom";

const Styles = {
    nav: {
        fontWeight: 900,
        fontSize: "26px"
    }
}
function Navbar() {
  const location = useLocation();

  return (
    <nav>
  <div className="nav-wrapper #1976d2 blue darken-2">
    <Link to="/" className="left" style={Styles.nav}>Books</Link>
    <ul className="right hide-on-med-and-down">

    {/* to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"} */}
    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"} >
      <li> Search</li></Link>
    <Link to="/saved" className={location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
      <li>Saved</li></Link>

    </ul>
  </div>
</nav>
  );
}

export default Navbar;
