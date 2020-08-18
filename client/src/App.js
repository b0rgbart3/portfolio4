import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PortfolioProvider } from "./utils/GlobalState";
import Menu from "./components/Menu"
import Home from "./pages/Home"

import './App.css';
    

function App() {

  return (
    <Router>
      <div className="App group">
        <PortfolioProvider>
          <Menu/>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </PortfolioProvider>
      </div>
    </Router>
  );
}

export default App;
