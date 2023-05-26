import React, { useState, createContext } from 'react';

export const language$CountryContext = createContext(null);

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('English');
  const [country, setCountry] = useState('Cameroon');
  return (
    <language$CountryContext.Provider value={{ language, setLanguage, country, setCountry }}>
      {children}
    </language$CountryContext.Provider>
  );
};

export default LanguageProvider;
