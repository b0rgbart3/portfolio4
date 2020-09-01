import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { PortfolioProvider } from "./utils/GlobalState";
import Menu from "./components/Menu"
import Main from "./pages/Main"
import Projects from "./pages/Projects"
import Resume from "./pages/Resume"
import Contact from "./pages/Contact"
import NoMatch from "./pages/NoMatch";



function App() {
  return (
    <Router>
     <div className="App group">
        <PortfolioProvider>
        <Menu/>

          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
   
        </PortfolioProvider>
      </div>
    </Router>
  );
}


export default App;
