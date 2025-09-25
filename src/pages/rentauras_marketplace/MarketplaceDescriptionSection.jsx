import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { textReveal } from '../../utils/animations';

const MarketplaceDescriptionSection = () => {
  const descRef = useRef(null);
  const descInView = useInView(descRef, { once: true, amount: 0.5 });

  return (
    <motion.section
      ref={descRef}
      className="py-20 bg-white"
      initial="hidden"
      animate={descInView ? "visible" : "hidden"}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-black mb-2"
          variants={textReveal}
          animate={
            descInView
              ? {
                  backgroundImage: [
                    "linear-gradient(90deg, #000 0%, #000 100%)",
                    "linear-gradient(90deg, #000 0%, #0BB0CD 50%, #000 100%)",
                    "linear-gradient(90deg, #000 0%, #000 100%)",
                  ],
                }
              : {}
          }
          style={{ backgroundClip: "text", WebkitBackgroundClip: "text" }}
          transition={{
            backgroundImage: {
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        >
          Rentauras makes car rental effortless. Built on trust, designed for
          simplicity, and available wherever your dreams take you.
        </motion.h2>
         <motion.h2
                  className="text-3xl sm:text-2xl font-bold text-[#0BB0CD] mb-2"
                  variants={textReveal}
                  animate={
                    descInView
                      ? {
                          backgroundImage: [
                            "linear-gradient(90deg, #000 0%, #000 100%)",
                            "linear-gradient(90deg, #000 0%, #0BB0CD 50%, #000 100%)",
                            "linear-gradient(90deg, #000 0%, #000 100%)",
                          ],
                        }
                      : {}
                  }
                  style={{ backgroundClip: "text", WebkitBackgroundClip: "text" }}
                  transition={{
                    backgroundImage: {
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                    },
                  }}
                >
                  How to use <span className="text-black">Rentauras Marketplace?</span> 
                </motion.h2>
      </div>
    </motion.section>
  );
};

export default MarketplaceDescriptionSection;