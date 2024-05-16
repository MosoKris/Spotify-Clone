import React, { createContext, useContext, useReducer } from "react";

// Create the context
export const DataLayerContext = createContext();

// Create the DataLayer component
export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

// Custom hook to use the DataLayer value
export const useDataLayerValue = () => useContext(DataLayerContext);
