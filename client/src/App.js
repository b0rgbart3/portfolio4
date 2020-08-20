import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PortfolioProvider } from "./utils/GlobalState";
import Menu from "./components/Menu"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Resume from "./pages/Resume"
import Contact from "./pages/Contact"
import './App.css';
    

function App() {

  return (
    <Router>
      <div className="App group">
        <PortfolioProvider>
        {/* <TransitionGroup>
        <CSSTransition key="first">
           
        </CSSTransition> */}
        <Menu/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
          {/* </TransitionGroup> */}
        </PortfolioProvider>
      </div>
    </Router>
  );
}

export default App;
