import React, { createContext, useReducer, useContext } from "react";
import Projects from "../data/projects.json";

import {
    CLOSE_MENU,
    OPEN_MENU,
    SET_CLASS
  } from "./actions.js";


const PortfolioContext = createContext(
{
  projects: [
    {

    }
  ],

  menuOpen: false,
  menuClass: "MenuPanel group m_stage2"

}


);
const { Provider } = PortfolioContext;



const reducer = (state, action) => {
    switch (action.type) {
        case CLOSE_MENU:
            return {...state, menuOpen: false};
        case OPEN_MENU:
            return {...state, menuOpen: true};
        case SET_CLASS:
            return {...state, menuClass: action.menuClass};

    // case GET_ALL_BOOKS:
    //    return  {...state, savedBooks: action.savedBooks};
    
  
    // case SAVE_BOOK:
    //   let newSavedBookList = state.savedBooks ? state.savedBooks : [];
    //   newSavedBookList.concat(action.book);
      
    //   return {...state, savedBooks: newSavedBookList }
  
    // case DELETE_BOOK:

    //   return {...state, savedBooks: state.savedBooks.filter((book)=>{
         
    //       return book._id != action.id 
    //   }) };

    // case SEARCH_RESULTS:
    //   return {...state, searchResults:action.value }
  
    default:
      return state;
    }
  };

  const PortfolioProvider = ({ value = {}, ...props }) => {
    const [state, dispatch] = useReducer(reducer, {projects:Projects, menuOpen:false, menuClass:"MenuPanel group m_stage2" });
  
    //portfolio:[], menuOpen:true, menuClass:"MenuPanel group m_stage1"
    return <Provider value={[state, dispatch]} {...props} />;
  };
  
  const usePortfolioContext = () => {
    return useContext(PortfolioContext);
  };
  
  export { PortfolioProvider, usePortfolioContext };
  