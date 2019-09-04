import React, { createContext } from 'react';

export const candidatesContext = createContext();

const candidatesContextProvider = props => {
  const fetchCandidates = () => {
    
  };

  return(
    <candidatesContext.Provider value={{ fetchCandidates }}>
      { props.children }
    </candidatesContext.Provider>
  );
};

export default candidatesContextProvider;
