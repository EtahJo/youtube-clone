import React, { useState, createContext } from 'react';

export const languageContext = createContext(null);

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('English');
  return (
    <languageContext.Provider value={{ language, setLanguage }}>
      {children}
    </languageContext.Provider>
  );
};

export default LanguageProvider;
