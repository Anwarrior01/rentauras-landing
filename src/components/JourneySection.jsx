import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  fadeInUp, 
  fadeInLeft, 
  fadeInRight,
  staggerContainer, 
  staggerItems, 
  imageReveal,
  textReveal,
  buttonHover,
  buttonTap
} from '../utils/animations';

const JourneySection = ({ setCurrentPage }) => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section 
      ref={ref}
      className="py-20 bg-black/95 text-white overflow-hidden relative"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Background Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.05 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="w-full h-full bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
      </motion.div>

      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-[#0BB0CD]/10 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
          x: [0, 20, 0],
          y: [0, -10, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div
        className="absolute top-40 right-20 w-20 h-20 bg-white/5 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.05, 0.2, 0.05],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute bottom-32 left-32 w-16 h-16 bg-[#0BB0CD]/5 rounded-full"
        animate={{
          y: [0, -30, 0],
          opacity: [0.1, 0.4, 0.1],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold mb-6 leading-tight"
              variants={textReveal}
            >
              {t.journeyTitle1}
              <br />
              <motion.span
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {t.journeyTitle2}
              </motion.span>
              <br />
              <motion.span 
                className="text-white bg-[#0BB0CD] px-2 py-1 rounded"
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 4px 20px rgba(11, 176, 205, 0.5)",
                  transition: { duration: 0.2 }
                }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(11, 176, 205, 0.3)",
                    "0 0 30px rgba(11, 176, 205, 0.5)",
                    "0 0 20px rgba(11, 176, 205, 0.3)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                {t.journeyHighlight}
              </motion.span>
            </motion.h2>

            <motion.p 
              className="text-xl mb-8 opacity-90 leading-relaxed"
              variants={fadeInLeft}
              animate={isInView ? {
                opacity: [0.9, 1, 0.9]
              } : {}}
              transition={{
                opacity: { duration: 4, repeat: Infinity, repeatType: "reverse" }
              }}
            >
              {t.journeyDescription}
            </motion.p>

            <motion.button
              onClick={() => setCurrentPage('download')}
              className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors duration-200 relative overflow-hidden"
              variants={fadeInUp}
              whileHover={{
                ...buttonHover,
                boxShadow: "0 8px 25px rgba(255, 255, 255, 0.3)"
              }}
              whileTap={buttonTap}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-[#0BB0CD]/20 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className="relative z-10"
                animate={{
                  color: ["#000000", "#0BB0CD", "#000000"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                {t.downloadTheApp}
              </motion.span>
            </motion.button>

            {/* Floating text elements */}
            <motion.div
              className="absolute -left-8 top-16 text-xs text-white/20 font-light"
              animate={{
                opacity: [0.2, 0.5, 0.2],
                x: [0, 10, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              Fast • Reliable • Secure
            </motion.div>
          </motion.div>

          {/* Right Content - App Screens */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            variants={staggerContainer}
          >
            <motion.div 
              className="relative"
              variants={imageReveal}
            >
              <motion.img
                src="assets/app_screens.png"
                alt="App Screens"
                className="w-full max-w-md h-full relative z-10"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />

              {/* Background decorative elements with enhanced animations */}
              <motion.div 
                className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1],
                  rotate: [0, 90, 180, 270, 360]
                }}
                transition={{
                  scale: { duration: 4, repeat: Infinity, repeatType: "reverse" },
                  opacity: { duration: 3, repeat: Infinity, repeatType: "reverse" },
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
              />
              
              <motion.div 
                className="absolute -z-10 -bottom-10 -left-10 w-60 h-60 bg-white opacity-5 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.05, 0.15, 0.05],
                  x: [0, 10, -5, 0],
                  y: [0, -5, 10, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }}
              />

              {/* Additional floating elements */}
              <motion.div
                className="absolute top-20 -left-8 w-4 h-4 bg-[#0BB0CD] rounded-full"
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.2, 0.5],
                  x: [0, 20, 0],
                  y: [0, -15, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5
                }}
              />
              
              <motion.div
                className="absolute bottom-32 -right-6 w-3 h-3 bg-white rounded-full"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.5, 0.8],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1.5
                }}
              />

              <motion.div
                className="absolute top-8 right-12 w-2 h-2 bg-[#0BB0CD]/70 rounded-full"
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 2
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Additional animated background elements */}
      <motion.div
        className="absolute bottom-10 right-10 text-xs text-white/10 font-light"
        animate={{
          opacity: [0.1, 0.3, 0.1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        Drive • Dream • Deliver
      </motion.div>
    </motion.section>
  );
};

export default JourneySection;