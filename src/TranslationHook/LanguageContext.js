import React, { createContext, useContext, useState} from 'react';

const LanguageContext = createContext(
  undefined,
);
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};



export const LanguageProvider= ({
  children,
}) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const changeLanguage = (newLanguage) => {
    setCurrentLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{currentLanguage, changeLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
};

