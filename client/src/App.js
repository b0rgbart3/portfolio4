import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PortfolioProvider } from "./utils/GlobalState";
import Menu from "./components/Menu"


import './App.css';
    

function App() {

  return (
    <Router>
      <div className="App group">
        <PortfolioProvider>
          <Menu/>
          <div className="Home group">
          BART DORITY
          </div>
        </PortfolioProvider>
      </div>
    </Router>
  );
}

export default App;
