import React, { createContext, useState } from 'react';

export const CatContext = createContext();

const ContextProvider = ({ children }) => {
  const [catName, setCatName] = useState('All');
  return <CatContext.Provider value={{ catName, setCatName }}>{children}</CatContext.Provider>;
};
export default ContextProvider;
