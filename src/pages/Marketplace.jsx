import React from 'react';
import { motion } from 'framer-motion';
import MarketplaceHeroSection from './rentauras_marketplace/MarketplaceHeroSection';
import MarketplaceDescriptionSection from './rentauras_marketplace/MarketplaceDescriptionSection';
import MarketplaceStepsSection from './rentauras_marketplace/MarketplaceStepsSection';
import MarketplaceWhyChooseSection from './rentauras_marketplace/MarketplaceWhyChooseSection';
import MarketplaceScreenshotsSection from './rentauras_marketplace/MarketplaceScreenshotsSection';
import MarketplaceSecuritySection from './rentauras_marketplace/MarketplaceSecuritySection';
import MarketplaceFAQSection from './rentauras_marketplace/MarketplaceFAQSection';

const MarketplacePage = ({ setCurrentPage }) => {
  return (
    <motion.div
      className="min-h-screen bg-white pt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <MarketplaceHeroSection setCurrentPage={setCurrentPage} />
      <MarketplaceDescriptionSection />
      <MarketplaceStepsSection />
      <MarketplaceWhyChooseSection />
      <MarketplaceScreenshotsSection />
      <MarketplaceSecuritySection setCurrentPage={setCurrentPage} />
      <MarketplaceFAQSection />
    </motion.div>
  );
};

export default MarketplacePage;