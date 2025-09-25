/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import RentaurasXHeroSection from './rentaurasx/RentaurasXHeroSection';
import RentaurasXDescriptionSection from './rentaurasx/RentaurasXDescriptionSection';
import RentaurasXStepsSection from './rentaurasx/RentaurasXStepsSection';
import RentaurasXWhyChooseSection from './rentaurasx/RentaurasXWhyChooseSection';
import RentaurasXEVCollectionSection from './rentaurasx/RentaurasXEVCollectionSection';
import RentaurasXScreenshotsSection from './rentaurasx/RentaurasXScreenshotsSection';
import RentaurasXSecuritySection from './rentaurasx/RentaurasXSecuritySection';
import RentaurasXFAQSection from './rentaurasx/RentaurasXFAQSection';

const RentaurasXPage = () => {
  return (
    <motion.div
      className="min-h-screen bg-white pt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <RentaurasXHeroSection />
      <RentaurasXDescriptionSection />
      <RentaurasXStepsSection />
      <RentaurasXWhyChooseSection />
      <RentaurasXEVCollectionSection />
      <RentaurasXScreenshotsSection />
      <RentaurasXSecuritySection />
      <RentaurasXFAQSection />
    </motion.div>
  );
};

export default RentaurasXPage;