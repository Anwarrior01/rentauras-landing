import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { textReveal, fadeInUp, cardHover } from '../../utils/animations';

const RentaurasXDescriptionSection = () => {
  const { t } = useLanguage();
  const descRef = useRef(null);
  const descInView = useInView(descRef, { once: true, amount: 0.5 });

  return (
    <motion.section
      ref={descRef}
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800"
      initial="hidden"
      animate={descInView ? "visible" : "hidden"}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Video Section */}
        <motion.div 
          className="mb-16 flex justify-center"
          variants={fadeInUp}
        >
          <motion.div 
            className="relative w-full max-w-4xl bg-gradient-to-br from-gray-800 to-black rounded-3xl p-6 shadow-2xl"
            whileHover={cardHover}
            animate={{
              boxShadow: [
                "0 20px 40px rgba(11, 176, 205, 0.1)",
                "0 30px 60px rgba(11, 176, 205, 0.2)",
                "0 20px 40px rgba(11, 176, 205, 0.1)"
              ]
            }}
            transition={{
              boxShadow: {
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          >
            {/* Decorative elements around video */}
            <motion.div
              className="absolute -top-4 -left-4 w-8 h-8 bg-[#0BB0CD]/20 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            <motion.div
              className="absolute -bottom-4 -right-4 w-6 h-6 bg-white/10 rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.1, 0.4, 0.1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1
              }}
            />

            <motion.video
              className="w-full h-auto rounded-2xl shadow-xl"
              autoPlay
              loop
              muted
              playsInline
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <source 
                src="/assets/rentaurasx/3d-Video-for-RentaurasX.mp4" 
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </motion.video>

            {/* Video overlay with subtle gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl pointer-events-none"
              animate={{
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </motion.div>
        </motion.div>

        {/* Main Title - Now larger and centered */}
        <div className="text-center relative">
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
            variants={textReveal}
            animate={
              descInView
                ? {
                    backgroundImage: [
                      "linear-gradient(90deg, #fff 0%, #fff 100%)",
                      "linear-gradient(90deg, #fff 0%, #0BB0CD 50%, #fff 100%)",
                      "linear-gradient(90deg, #fff 0%, #fff 100%)",
                    ],
                  }
                : {}
            }
            style={{ 
              backgroundClip: "text", 
              WebkitBackgroundClip: "text",
              textShadow: "0 4px 20px rgba(11, 176, 205, 0.3)"
            }}
            transition={{
              backgroundImage: {
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          >
            {t.ridingRedefined}{' '}
            <motion.span 
              className="text-[#0BB0CD]"
              animate={{
                textShadow: [
                  "0 0 20px rgba(11, 176, 205, 0.5)",
                  "0 0 40px rgba(11, 176, 205, 0.8)",
                  "0 0 20px rgba(11, 176, 205, 0.5)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              {t.redefined}
            </motion.span>
          </motion.h2>

          {/* Floating decorative elements */}
          <motion.div
            className="absolute top-1/2 left-10 w-4 h-4 bg-[#0BB0CD]/30 rounded-full"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />

          <motion.div
            className="absolute top-1/4 right-16 w-3 h-3 bg-white/20 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1.5
            }}
          />

          <motion.div
            className="absolute bottom-1/4 right-20 w-2 h-2 bg-[#0BB0CD]/40 rounded-full"
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, repeatType: "reverse", delay: 2 }
            }}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default RentaurasXDescriptionSection;