import React from 'react';
import { motion } from 'framer-motion';
import RentaurasXHeroSection from './rentaurasX/RentaurasXHeroSection';
import RentaurasXDescriptionSection from './rentaurasX/RentaurasXDescriptionSection';
import RentaurasXStepsSection from './rentaurasX/RentaurasXStepsSection';
import RentaurasXWhyChooseSection from './rentaurasX/RentaurasXWhyChooseSection';
import RentaurasXEVCollectionSection from './rentaurasX/RentaurasXEVCollectionSection';
import RentaurasXScreenshotsSection from './rentaurasX/RentaurasXScreenshotsSection';
import RentaurasXSecuritySection from './rentaurasX/RentaurasXSecuritySection';
import RentaurasXFAQSection from './rentaurasX/RentaurasXFAQSection';


const RentaurasXPage = ({ setCurrentPage }) => {
  return (
    <motion.div
      className="min-h-screen bg-white pt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <RentaurasXHeroSection setCurrentPage={setCurrentPage} />
      
      <RentaurasXDescriptionSection />
      
      <RentaurasXStepsSection />
      
      <RentaurasXWhyChooseSection />
      
      <RentaurasXEVCollectionSection />
      
      <RentaurasXScreenshotsSection />
      
      <RentaurasXSecuritySection setCurrentPage={setCurrentPage} />
      
      <RentaurasXFAQSection />
    </motion.div>
  );
};

export default RentaurasXPage;