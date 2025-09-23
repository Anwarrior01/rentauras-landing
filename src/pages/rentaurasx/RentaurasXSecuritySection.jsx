import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Star, Heart, Shield } from 'lucide-react';
import { 
  scaleIn,
  textReveal,
  fadeInUp,
  buttonHover,
  buttonTap
} from '../../utils/animations';

const RentaurasXSecuritySection = ({ setCurrentPage }) => {
  const securityRef = useRef(null);
  const securityInView = useInView(securityRef, { once: true, amount: 0.5 });

  return (
    <motion.section
      ref={securityRef}
      className="py-20 bg-green-50"
      initial="hidden"
      animate={securityInView ? "visible" : "hidden"}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="bg-white rounded-3xl p-12 shadow-xl relative overflow-hidden"
          variants={scaleIn}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 30px 60px rgba(0, 0, 0, 0.15)",
          }}
        >
          {/* Animated background elements */}
          <motion.div
            className="absolute top-4 right-4 w-6 h-6"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Star className="w-6 h-6 text-[#0BB0CD] fill-current" />
          </motion.div>

          <motion.div
            className="text-xs text-[#0BB0CD] font-medium mb-4 uppercase tracking-wide"
            variants={fadeInUp}
            animate={{
              color: ["#0BB0CD", "#10B981", "#0BB0CD"],
            }}
            transition={{
              color: { duration: 3, repeat: Infinity, repeatType: "reverse" },
            }}
          >
            SAFETY & INNOVATION
          </motion.div>

          <motion.h2
            className="text-3xl font-bold text-black mb-6"
            variants={textReveal}
          >
            Your journey, always secure
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            We're the first to introduce women-to-women service in Morocco. 
            All rides are tracked, all drivers are professionals, and your safety is guaranteed.
          </motion.p>
          
          <motion.div className="flex justify-center mb-8" variants={scaleIn}>
            <motion.div
              className="bg-green-100 p-4 rounded-2xl relative"
              animate={{
                boxShadow: [
                  "0 0 0 rgba(16, 185, 129, 0.3)",
                  "0 0 30px rgba(16, 185, 129, 0.3)",
                  "0 0 0 rgba(16, 185, 129, 0.3)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Shield className="w-16 h-16 text-[#0BB0CD] mx-auto" />
              </motion.div>
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Heart className="w-4 h-4 text-[#0BB0CD] fill-current" />
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.button
            onClick={() => setCurrentPage('download')}
            className="bg-black text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors duration-200 relative overflow-hidden"
            variants={fadeInUp}
            whileHover={{
              ...buttonHover,
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
            }}
            whileTap={buttonTap}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-[#0BB0CD]/20 to-transparent opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">
              Download Rentauras
              <span className="text-[#0BB0CD]">X</span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default RentaurasXSecuritySection;