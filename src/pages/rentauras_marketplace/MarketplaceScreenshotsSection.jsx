import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Check } from 'lucide-react';
import { 
  fadeInLeft, 
  fadeInRight,
  fadeInUp,
  staggerContainer, 
  staggerItems,
  textReveal
} from '../../utils/animations';

const MarketplaceScreenshotsSection = () => {
  const { t } = useLanguage();
  const screensRef = useRef(null);
  const screensInView = useInView(screensRef, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={screensRef}
      className="py-20 bg-gray-50"
      initial="hidden"
      animate={screensInView ? "visible" : "hidden"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Screenshot */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center"
          variants={staggerContainer}
        >
          <motion.div className="order-2 lg:order-1" variants={fadeInLeft}>
            <motion.h3
              className="text-3xl font-bold text-black mb-6"
              variants={textReveal}
            >
              {t.marketplaceBrowseBookTitle}
            </motion.h3>
            <motion.p
              className="text-lg text-gray-600 mb-8"
              variants={fadeInUp}
            >
              {t.marketplaceBrowseBookDesc}
            </motion.p>
            <motion.div
              className="flex items-center gap-4"
              variants={staggerContainer}
            >
              <motion.div
                className="flex items-center gap-2"
                variants={staggerItems}
                whileHover={{ scale: 1.05 }}
              >
                <Check className="w-5 h-5 text-[#0BB0CD]" />
                <span className="text-gray-700">{t.marketplaceInstantBooking}</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                variants={staggerItems}
                whileHover={{ scale: 1.05 }}
              >
                <Check className="w-5 h-5 text-[#0BB0CD]" />
                <span className="text-gray-700">{t.marketplaceNoHiddenFees}</span>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            variants={fadeInRight}
          >
            <motion.img
              src="assets/rentauras/payement-image-Rentauras-Marketplace.svg"
              alt="App Screenshot 1"
              className="max-w-sm rounded-3xl shadow-2xl"
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)",
              }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                y: { duration: 4, repeat: Infinity, repeatType: "reverse" },
              }}
            />
          </motion.div>
        </motion.div>

        {/* Second Screenshot */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
        >
          <motion.div className="flex justify-center" variants={fadeInLeft}>
            <motion.img
              src="assets/rentauras/search-car-rentauras-Marketpalce.svg"
              alt="App Screenshot 2"
              className="max-w-sm rounded-3xl shadow-2xl"
              whileHover={{
                scale: 1.05,
                rotateY: -5,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)",
              }}
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                y: { duration: 5, repeat: Infinity, repeatType: "reverse" },
              }}
            />
          </motion.div>
          <motion.div variants={fadeInRight}>
            <motion.h3
              className="text-3xl font-bold text-slate-800 mb-6"
              variants={textReveal}
            >
              {t.marketplaceSecureSimpleTitle}
            </motion.h3>
            <motion.p
              className="text-lg text-gray-600 mb-8"
              variants={fadeInUp}
            >
              {t.marketplaceSecureSimpleDesc}
            </motion.p>
            <motion.div
              className="flex items-center gap-4"
              variants={staggerContainer}
            >
              <motion.div
                className="flex items-center gap-2"
                variants={staggerItems}
                whileHover={{ scale: 1.05 }}
              >
                <Check className="w-5 h-5 text-[#0BB0CD]" />
                <span className="text-gray-700">{t.marketplaceVerifiedHosts}</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                variants={staggerItems}
                whileHover={{ scale: 1.05 }}
              >
                <Check className="w-5 h-5 text-[#0BB0CD]" />
                <span className="text-gray-700">{t.marketplaceSecurePaymentsFeature}</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MarketplaceScreenshotsSection;