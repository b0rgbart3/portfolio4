/*
   This is our Global State Provider
   -- originally this was used to keep state
      for the menu - but that has now been refactored
      as a local state
   -- For now, our Global State simply holds the 
      Project JSON data
*/

import React, { createContext, useReducer, useContext } from "react";
import Projects from "../data/projects.json";
import {
    // CLOSE_MENU,
    // OPEN_MENU,
    // SET_CLASS,
  } from "./actions.js";

const PortfolioContext = createContext(
{
  projects: [{}],
  // menuOpen: false,
  // menuClass: "MenuPanel group m_stage2",
  // currentPage: "main"
}

);
const { Provider } = PortfolioContext;


const reducer = (state, action) => {
    switch (action.type) {
        // case CLOSE_MENU:
        //     return {...state, menuOpen: false};
        // case OPEN_MENU:
        //     return {...state, menuOpen: true};
        // case SET_CLASS:
        //     return {...state, menuClass: action.menuClass};
  
    default:
      return state;
    }
  };

  const PortfolioProvider = ({ value = {}, ...props }) => {
    const [state, dispatch] = useReducer(reducer, {projects:Projects });
  
    return <Provider value={[state, dispatch]} {...props} />;
  };
  
  const usePortfolioContext = () => {
    return useContext(PortfolioContext);
  };
  
  export { PortfolioProvider, usePortfolioContext };
  