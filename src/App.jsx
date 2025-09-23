import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ChallengeSection from './components/ChallengeSection';
import OurServicesSection from './components/OurServicesSection';
import SafetySection from './components/SafetySection';
import RightNowSection from './components/RightNowSection';
import JourneySection from './components/JourneySection';
import DownloadPage from './pages/DownloadPage';
// import AboutPage from './pages/About';
// import ContactPage from './pages/Contact';
import Footer from './components/Footer';
import RentaurasMarketplacePage from './pages/Marketplace';
import RentaurasXPage from './pages/RentaurasX';

// import HowRentaurasWorks from './pages/rentauras_marketplace/HowRentauras';
// import CoreValues from './pages/rentauras_marketplace/CoreValues';
// import WhyChooseRentauras from './pages/rentauras_marketplace/WhyRentauras';
// import DownloadSection from './pages/rentauras_marketplace/DownloadRentauras';

const AppContent = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPageContent = () => {
    switch (currentPage) {
      // case 'about':
      //   return <AboutPage />;
      // case 'contact':
      //   return <ContactPage />;
      case 'download':
        return <DownloadPage />;
      case 'marketplace':
        return (
          <>
            {/* <HeroSection setCurrentPage={setCurrentPage} /> */}
            <div id="how-it-works">
              <RentaurasMarketplacePage />
              {/* <HowRentaurasWorks /> */}
            </div>
            {/* <DownloadPage /> */}
            {/* <CoreValues /> */}
            {/* <DownloadPage /> */}
            {/* <WhyChooseRentauras /> */}
            <div id="download-section">
              {/* <DownloadPage /> */}
              {/* <DownloadSection /> */}
            </div>
          </>
        );
      case 'rentaurasX':
        // You can create a separate RentaurasX page later
        return (
         <RentaurasXPage/>
        );
      case 'home':
      default:
        return (
          <>
            <HeroSection setCurrentPage={setCurrentPage} />
            <ChallengeSection />
            <OurServicesSection setCurrentPage={setCurrentPage} />
            <SafetySection />
            <RightNowSection />
            <JourneySection setCurrentPage={setCurrentPage} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-black transition-all duration-300" 
         style={{ fontFamily: 'Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}>
      
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {renderPageContent()}
      
      <Footer setCurrentPage={setCurrentPage} />
      
      {/* Custom Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap');
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        .backdrop-blur-xl {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        /* RTL Support for Arabic */
        .rtl {
          direction: rtl;
          text-align: right;
        }
        
        .rtl .text-left {
          text-align: right;
        }
        
        .rtl .text-right {
          text-align: left;
        }
      `}</style>
    </div>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;