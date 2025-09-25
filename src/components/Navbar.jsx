import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Globe, ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex-shrink-0">
            <button 
              onClick={() => handleNavigation('/')}
              className="text-xl font-semibold tracking-wider text-black hover:opacity-70 transition-opacity duration-200"
            >
              RENTAURAS
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavigation('/marketplace')}
              className={`text-sm font-normal hover:opacity-70 transition-opacity duration-200 ${
                isActive('/marketplace') ? 'opacity-100 font-medium text-[#0BB0CD]' : 'opacity-80 text-black'
              }`}
            >
              {t.rentACar}
            </button>
            
            <button
              onClick={() => handleNavigation('/rentaurasx')}
              className={`text-sm font-normal hover:opacity-70 transition-opacity duration-200 ${
                isActive('/rentaurasx') ? 'opacity-100 font-medium text-[#0BB0CD]' : 'opacity-80 text-black'
              }`}
            >
              {t.rentaurasX}
            </button>
            
            <button
              onClick={() => handleNavigation('/about')}
              className={`text-sm font-normal text-black hover:opacity-70 transition-opacity duration-200 ${
                isActive('/about') ? 'opacity-100 font-medium text-[#0BB0CD]' : 'opacity-80'
              }`}
            >
              {t.aboutUs}
            </button>
            
            <button
              onClick={() => handleNavigation('/contact')}
              className={`text-sm font-normal text-black hover:opacity-70 transition-opacity duration-200 ${
                isActive('/contact') ? 'opacity-100 font-medium text-[#0BB0CD]' : 'opacity-80'
              }`}
            >
              {t.contact}
            </button>
            
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-1 px-3 py-2 text-sm font-normal text-black hover:opacity-70 transition-opacity duration-200"
              >
                <Globe className="w-4 h-4" />
                <span className="uppercase font-medium text-xs tracking-wide">{language}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${
                  isLanguageOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              {isLanguageOpen && (
                <div className="absolute right-0 top-full mt-2 w-20 bg-white rounded-lg shadow-lg border border-gray-100">
                  {['en', 'ar', 'fr'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setIsLanguageOpen(false);
                      }}
                      className={`block w-full text-left px-3 py-2 text-sm hover:bg-gray-50 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                        language === lang ? 'font-semibold text-[#0BB0CD]' : 'text-black opacity-70'
                      }`}
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <button
              onClick={() => handleNavigation('/download')}
              className="bg-black text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              {t.downloadTheApp}
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-black hover:opacity-70 transition-opacity duration-200 p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg animate-fade-in-down">
            <div className="px-4 py-6 space-y-4">
              
              <button
                onClick={() => handleNavigation('/marketplace')}
                className={`block w-full text-left py-3 px-4 rounded-lg text-base font-normal hover:bg-gray-50 transition-all duration-200 ${
                  isActive('/marketplace') ? 'font-medium text-[#0BB0CD] bg-gray-50' : 'text-black'
                }`}
              >
                {t.rentACar}
              </button>
              
              <button
                onClick={() => handleNavigation('/rentaurasx')}
                className={`block w-full text-left py-3 px-4 rounded-lg text-base font-normal hover:bg-gray-50 transition-all duration-200 ${
                  isActive('/rentaurasx') ? 'font-medium text-[#0BB0CD] bg-gray-50' : 'text-black'
                }`}
              >
                {t.rentaurasX}
              </button>
              
              <button
                onClick={() => handleNavigation('/about')}
                className={`block w-full text-left py-3 px-4 rounded-lg text-base font-normal hover:bg-gray-50 transition-all duration-200 ${
                  isActive('/about') ? 'font-medium text-[#0BB0CD] bg-gray-50' : 'text-black'
                }`}
              >
                {t.aboutUs}
              </button>
              
              <button
                onClick={() => handleNavigation('/contact')}
                className={`block w-full text-left py-3 px-4 rounded-lg text-base font-normal hover:bg-gray-50 transition-all duration-200 ${
                  isActive('/contact') ? 'font-medium text-[#0BB0CD] bg-gray-50' : 'text-black'
                }`}
              >
                {t.contact}
              </button>
              
              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center space-x-2 px-4 py-2">
                  <Globe className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-500">Language:</span>
                </div>
                <div className="flex space-x-2 px-4">
                  {['en', 'ar', 'fr'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 ${
                        language === lang 
                          ? 'bg-[#0BB0CD] text-white font-semibold' 
                          : 'bg-gray-100 text-black hover:bg-gray-200'
                      }`}
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-4">
                <button
                  onClick={() => handleNavigation('/download')}
                  className="w-full bg-black text-white py-3 px-4 rounded-lg text-base font-medium hover:bg-gray-800 transition-colors duration-200"
                >
                  {t.downloadTheApp}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <style jsx>{`
        .animate-fade-in-down {
          animation: fadeInDown 0.3s ease-out;
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;