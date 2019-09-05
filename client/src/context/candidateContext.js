import React, { createContext, useState } from 'react';

export const CandidateContext = createContext();

const CandidateContextProvider = props => {
  const [ selected, setSelected ] = useState([]);

  return(
    <CandidateContext.Provider value={{ selected, setSelected }}>
      { props.children }
    </CandidateContext.Provider>
  );
};

export default CandidateContextProvider;
