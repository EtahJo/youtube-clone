import React, { createContext, useState } from 'react';

export const restrictedContext = createContext(null);

const RestrictedProvider = ({ children }) => {
  const [mode, setMode] = useState(false);
  return (
    <restrictedContext.Provider value={{ mode, setMode }}>{children}</restrictedContext.Provider>
  );
};

export default RestrictedProvider;
