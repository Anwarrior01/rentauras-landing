import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useDarkMode } from '../context/DarkModeContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const { darkMode } = useDarkMode();
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
        className={`flex items-center space-x-1 px-3 py-2 rounded-full text-sm transition-all duration-300 hover:scale-105 ${
          darkMode 
            ? 'text-white hover:bg-white hover:text-black' 
            : 'text-black hover:bg-black hover:text-white'
        }`}
      >
        <Globe className="w-4 h-4" />
        <span className="uppercase font-medium text-xs tracking-wider">{language}</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${
          languageDropdownOpen ? 'rotate-180' : ''
        }`} />
      </button>
      
      {languageDropdownOpen && (
        <div className={`absolute right-0 top-full mt-2 w-24 rounded-xl shadow-2xl border backdrop-blur-xl ${
          darkMode 
            ? 'bg-black/90 border-white/10' 
            : 'bg-white/90 border-black/10'
        }`}>
          {['en', 'ar', 'fr'].map((lang) => (
            <button
              key={lang}
              onClick={() => {
                setLanguage(lang);
                setLanguageDropdownOpen(false);
              }}
              className={`block w-full text-left px-3 py-2 text-sm hover:opacity-70 transition-all duration-200 first:rounded-t-xl last:rounded-b-xl ${
                language === lang ? 'font-semibold opacity-100' : 'opacity-70'
              }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;