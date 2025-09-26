// context/LanguageContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations/data';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const getBrowserLanguage = () => {
  const browserLang = navigator.language || navigator.userLanguage;
  const langCode = browserLang.split('-')[0];
  return translations[langCode] ? langCode : 'en';
};

const getSavedLanguage = () => {
  try {
    const saved = localStorage.getItem('rentauras_language');
    if (saved && translations[saved]) {
      return saved;
    }
    return getBrowserLanguage();
  } catch (error) {
    return getBrowserLanguage();
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(getSavedLanguage);

  useEffect(() => {
    try {
      localStorage.setItem('rentauras_language', language);
    } catch (error) {
      console.warn('Could not save language preference:', error);
    }
  }, [language]);

  useEffect(() => {
    const root = document.documentElement;
    if (language === 'ar') {
      root.style.setProperty('--primary-font', 'Cairo, system-ui, sans-serif');
      document.body.style.fontFamily = 'Cairo, system-ui, sans-serif';
    } else {
      root.style.setProperty('--primary-font', 'Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif');
      document.body.style.fontFamily = 'Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
    }
  }, [language]);

  const setLanguage = (newLanguage) => {
    if (translations[newLanguage]) {
      setLanguageState(newLanguage);
    }
  };

  const t = translations[language];

  const value = {
    language,
    setLanguage,
    t,
    availableLanguages: Object.keys(translations)
  };

  return (
    <LanguageContext.Provider value={value}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};