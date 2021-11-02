import React, { createContext, useContext, useReducer } from "react";
// Datalayer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//pull data
export const useStateValue = () => useContext(StateContext);
