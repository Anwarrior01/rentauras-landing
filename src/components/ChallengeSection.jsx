import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  fadeInUp, 
  fadeInLeft, 
  staggerContainer, 
  staggerItems, 
  imageReveal,
  textReveal
} from '../utils/animations';
import { LifeBuoy, ShieldCheck, BadgePercent } from "lucide-react";

const ChallengeSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section 
      ref={ref}
      className="py-20 bg-white"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Text Content */}
        <motion.div 
          className="text-center mb-16"
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-black mb-6 leading-tight"
            variants={textReveal}
          >
            {t.challengeTitle1}{' '}
            <motion.span 
              className="bg-[#0BB0CD] text-white px-2 py-1 rounded"
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 4px 20px rgba(11, 176, 205, 0.4)",
                transition: { duration: 0.2 }
              }}
            >
              {t.challengeHighlight}
            </motion.span>{' '}
            {t.challengeTitle2}
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-12"
            variants={fadeInUp}
          >
            {t.challengeDescription}
          </motion.p>
        </motion.div>

        {/* Challenge Illustration */}
        <motion.div 
          className="flex justify-center"
          variants={staggerContainer}
        >
          <motion.div 
            className="w-full max-w-2xl relative"
            variants={imageReveal}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            {/* Background decorative elements */}
            <motion.div
              className="absolute -top-8 -left-8 w-16 h-16 bg-[#0BB0CD]/10 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            />
            
            <motion.div
              className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-200/20 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />

            {/* Floating animation for decorative circles */}
            <motion.div
              className="absolute top-12 right-8 w-8 h-8 bg-[#0BB0CD]/5 rounded-full"
              animate={isInView ? {
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.4, 0.1]
              } : {}}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.5
              }}
            />
            
            {/* Main illustration */}
            <motion.img
             src="assets/hero/Frontcar-cuate.svg"
              alt="Challenge Illustration"
              className="w-full h-auto"
              variants={imageReveal}
              whileHover={{
                rotate: [0, 1, -1, 0],
                transition: { duration: 0.6 }
              }}
            />

            {/* Additional floating elements */}
            <motion.div
              className="absolute top-20 left-12 w-6 h-6 bg-blue-100 rounded-full"
              animate={isInView ? {
                x: [0, 8, 0],
                y: [0, -5, 0],
                opacity: [0.3, 0.7, 0.3]
              } : {}}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1.2
              }}
            />

            <motion.div
              className="absolute bottom-16 left-8 w-4 h-4 bg-[#0BB0CD]/20 rounded-full"
              animate={isInView ? {
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.6, 0.2]
              } : {}}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 2
              }}
            />
          </motion.div>
        </motion.div>

        {/* Challenge Stats or Benefits */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {[
            { number: "24/7", label: t.support, icon: <LifeBuoy className="w-8 h-8 text-black mx-auto" /> },
            { number: "100%", label: t.verified, icon: <ShieldCheck className="w-8 h-8 text-black mx-auto" /> },
            { number: "0%", label: t.hiddenFees, icon: <BadgePercent className="w-8 h-8 text-black mx-auto" /> }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100"
              variants={staggerItems}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="text-3xl mb-2"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: index * 0.5
                }}
              >
                {stat.icon}
              </motion.div>
              <motion.div 
                className="text-2xl font-bold text-[#0BB0CD] mb-1"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              >
                {stat.number}
              </motion.div>
              <motion.div 
                className="text-sm text-gray-600 font-medium"
                variants={fadeInUp}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ChallengeSection;