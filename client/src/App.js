import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PortfolioProvider } from "./utils/GlobalState";
import Menu from "./components/Menu"
import Home from "./pages/Home"
import Projects from "./pages/Projects"

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
          
          </Switch>
          {/* </TransitionGroup> */}
        </PortfolioProvider>
      </div>
    </Router>
  );
}

export default App;
