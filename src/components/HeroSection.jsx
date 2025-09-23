import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { 
  fadeInUp, 
  fadeInLeft, 
  fadeInRight, 
  staggerContainer, 
  staggerItems, 
  buttonHover, 
  buttonTap, 
  imageReveal,
  statsCounter
} from '../utils/animations';

const HeroSection = ({ setCurrentPage }) => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const statsData = [
    { label: t.cities, value: t.citiesCount },
    { label: t.countries, value: t.countriesCount },
    { label: t.downloads, value: t.downloadsCount }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            className="text-center lg:text-left"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight"
              variants={fadeInUp}
            >
              {t.heroTitle}{' '}
              <motion.span 
                className="inline-block px-2 py-1 font-bold rounded-xl text-white"
                style={{ backgroundColor: '#0BB0CD' }}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                {t.heroTitleHighlight}
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-sm text-gray-600 mb-8 max-w-2xl w-lg"
              variants={fadeInUp}
            >
              {t.heroDescription}
            </motion.p>

            {/* CTA Button */}
            <motion.button
              onClick={() => setCurrentPage('download')}
              className="bg-black text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
                transition: { duration: 0.2 }
              }}
              whileTap={buttonTap}
            >
              {t.downloadTheApp}
            </motion.button>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-0 mt-12"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {statsData.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  variants={statsCounter}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div 
                    className="text-sm font-medium text-gray-500 mb-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    {stat.label}
                  </motion.div>
                  <motion.div 
                    className="text-lg sm:text-xl font-bold text-black"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: 0.8 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    {stat.value}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
          >
            <motion.div 
              className="relative w-full max-w-xl"
              variants={imageReveal}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {/* Background decorative circle */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#0BB0CD]/10 to-blue-200/20 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              />
              
              {/* Floating decorative elements */}
              <motion.div
                className="absolute top-10 right-10 w-4 h-4 bg-[#0BB0CD] rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  delay: 1.2, 
                  type: "spring", 
                  stiffness: 400 
                }}
                // animate={{
                //   y: [0, -10, 0],
                // }}
                // transition={{
                //   duration: 2,
                //   repeat: Infinity,
                //   repeatType: "reverse"
                // }}
              />
              
              <motion.div
                className="absolute bottom-20 left-10 w-3 h-3 bg-blue-400 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  delay: 1.4, 
                  type: "spring", 
                  stiffness: 400 
                }}
                // animate={{
                //   y: [0, -8, 0],
                // }}
                // transition={{
                //   duration: 2.5,
                //   repeat: Infinity,
                //   repeatType: "reverse",
                //   delay: 0.5
                // }}
              />

              <motion.img
                src="/src/assets/hero/driving-cuate.svg"
                alt="Driving"
                className="w-full h-auto relative z-10"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.8, 
                  duration: 0.8, 
                  ease: "easeOut" 
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background animated elements */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 border-2 border-[#0BB0CD]/20 rounded-full"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ 
          delay: 2,
          duration: 20,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute bottom-40 right-20 w-16 h-16 border-2 border-blue-300/20 rounded-full"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: -360 }}
        transition={{ 
          delay: 2.5,
          duration: 25,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear"
        }}
      />
    </section>
  );
};

export default HeroSection;