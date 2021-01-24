import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";
import { PortfolioProvider } from "./utils/GlobalState";
import Menu from "./components/MobileMenu"
import DesktopMenu from "./components/DesktopMenu"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Resume from "./pages/Resume"
import Contact from "./pages/Contact"
import Endorsements from "./pages/Endorsements"
import Skills from "./pages/Skills"
import NoMatch from "./pages/NoMatch";



// Portfolio Provider is our Global State 

function App() {
  return (
    <Router>
     <div className="App group">
        <PortfolioProvider> 
          <DesktopMenu />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/endorsements" component={Endorsements} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/BART_DORITY_resume.pdf" />
            <Route component={NoMatch} />
          </Switch>
          <Menu/>
        </PortfolioProvider>
      </div>
    </Router>
  );
}


export default App;
