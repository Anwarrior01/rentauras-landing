import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ChallengeSection from './components/ChallengeSection';
import OurServicesSection from './components/OurServicesSection';
import SafetySection from './components/SafetySection';
import RightNowSection from './components/RightNowSection';
import JourneySection from './components/JourneySection';
import DownloadPage from './pages/DownloadPage';
import Footer from './components/Footer';
import RentaurasMarketplacePage from './pages/Marketplace';
import RentaurasXPage from './pages/RentaurasX';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ChallengeSection />
      <OurServicesSection />
      <SafetySection />
      <RightNowSection />
      <JourneySection />
    </>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-white text-black transition-all duration-300">
          
          <Navbar />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/marketplace" element={<RentaurasMarketplacePage />} />
            <Route path="/rentaurasx" element={<RentaurasXPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/download" element={<DownloadPage />} />
          </Routes>
          
          <Footer />
          
          <style jsx>{`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap');
            
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

            * {
              font-family: var(--primary-font, 'Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif');
            }
          `}</style>
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;