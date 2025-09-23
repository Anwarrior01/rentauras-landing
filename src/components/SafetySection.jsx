import React from "react";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from "../context/LanguageContext";
import { 
  fadeInUp, 
  fadeInLeft, 
  fadeInRight,
  staggerContainer, 
  staggerItems, 
  imageReveal,
  textReveal,
  buttonHover,
  buttonTap,
  cardHover
} from '../utils/animations';

const SafetySection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section 
      ref={ref}
      className="py-20 bg-white"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
          className="text-center mb-4"
          variants={staggerContainer}
        >
          <motion.p 
            className="text-sm uppercase tracking-wider text-gray-500 mb-4"
            variants={fadeInUp}
          >
            {t.safetySubtitle}
          </motion.p>
          
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-black mb-6"
            variants={textReveal}
          >
            {t.safetyTitle1}{" "}
            <motion.span 
              className="bg-[#0BB0CD] text-white px-2 py-1 rounded"
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 4px 20px rgba(11, 176, 205, 0.4)",
                transition: { duration: 0.2 }
              }}
            >
              {t.safetyHighlight}
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-sm text-gray-600 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            {t.safetySubtitleText}
          </motion.p>
        </motion.div>

        {/* Main Content Card */}
        <motion.div 
          className="bg-gray-50 rounded-3xl p-8 lg:p-12 overflow-hidden relative"
          variants={fadeInUp}
          whileHover={{
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.08)",
            transition: { duration: 0.3 }
          }}
        >
          {/* Background decorative elements */}
          <motion.div
            className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#0BB0CD]/5 to-transparent rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          
          <motion.div
            className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-blue-100/30 to-transparent rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            
            {/* Left Content */}
            <motion.div variants={staggerContainer}>
              <motion.h3 
                className="text-2xl font-bold text-black mb-6"
                variants={textReveal}
              >
                {t.safetyCardTitle}
              </motion.h3>
              
              <motion.p 
                className="text-sm text-gray-600 mb-8 leading-relaxed"
                variants={fadeInLeft}
              >
                {t.safetyCardDescription}
              </motion.p>

              <motion.button
                className="bg-black text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors duration-200 relative overflow-hidden"
                variants={fadeInUp}
                whileHover={buttonHover}
                whileTap={buttonTap}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-[#0BB0CD] to-blue-600 opacity-0"
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">{t.learnMore}</span>
              </motion.button>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              className="flex justify-center lg:justify-end"
              variants={staggerContainer}
            >
              <motion.div 
                className="relative"
                variants={imageReveal}
              >
                {/* Background decoration with enhanced animation */}
                <motion.div 
                  className="absolute -z-10 top-8 right-8 w-full h-full bg-[#0BB0CD] rounded-3xl opacity-20"
                  initial={{ scale: 0.8, rotate: 0 }}
                  animate={isInView ? { 
                    scale: 1, 
                    rotate: 3,
                    y: [0, -5, 0],
                    x: [0, 2, 0]
                  } : { scale: 0.8, rotate: 0 }}
                  transition={{ 
                    scale: { delay: 0.3, duration: 0.6 },
                    rotate: { delay: 0.5, duration: 0.8 },
                    y: { duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 },
                    x: { duration: 6, repeat: Infinity, repeatType: "reverse", delay: 1.5 }
                  }}
                />
                
                {/* Main image with hover effects */}
                <motion.img
                  src="/src/assets/Business-deal-cuate.svg"
                  alt="Safety"
                  className="w-full max-w-lg h-auto relative z-10"
                  variants={imageReveal}
                  whileHover={{
                    scale: 1.05,
                    rotate: [-1, 1, -1, 0],
                    transition: { 
                      scale: { duration: 0.3 },
                      rotate: { duration: 0.8 }
                    }
                  }}
                />

                {/* Floating elements around the image */}
                <motion.div
                  className="absolute -top-4 -left-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0 }}
                  // animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  // transition={{ delay: 1, duration: 0.5 }}
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    y: { duration: 3, repeat: Infinity, repeatType: "reverse" },
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                  }}
                >
                  <div className="w-3 h-3 bg-[#0BB0CD] rounded-full"></div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-br from-blue-400 to-[#0BB0CD] rounded-full opacity-80 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0 }}
                  // animate={isInView ? { opacity: 0.8, scale: 1 } : { opacity: 0, scale: 0 }}
                  // transition={{ delay: 1.2, duration: 0.6 }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 0.6, 0.8]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </motion.div>

                <motion.div
                  className="absolute top-1/2 -left-8 w-6 h-6 bg-yellow-400 rounded-full opacity-70"
                  initial={{ opacity: 0, x: -20 }}
                  // animate={isInView ? { opacity: 0.7, x: 0 } : { opacity: 0, x: -20 }}
                  // transition={{ delay: 1.5, duration: 0.7 }}
                  animate={{
                    x: [0, 10, 0],
                    scale: [1, 1.3, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 2
                  }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Additional floating particles */}
          <motion.div
            className="absolute top-12 right-20 w-2 h-2 bg-[#0BB0CD] rounded-full"
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.5
            }}
          />
          
          <motion.div
            className="absolute bottom-20 left-16 w-3 h-3 bg-blue-300 rounded-full"
            animate={{
              y: [0, -15, 0],
              opacity: [0.4, 0.9, 0.4]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1.5
            }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SafetySection;