import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { 
  staggerContainer, 
  staggerItems,
  cardHover,
  textReveal,
  fadeInUp
} from '../../utils/animations';

const RentaurasXFAQSection = () => {
  const { t } = useLanguage();
  const faqRef = useRef(null);
  const faqInView = useInView(faqRef, { once: true, amount: 0.3 });

  const faqs = [
    {
      question: t.whatIsRentaurasX,
      answer: t.rentaurasXIsRideHailing
    },
    {
      question: t.whatMakesDifferent,
      answer: t.firstInMoroccoOffer
    },
    {
      question: t.areVehiclesEcoFriendly, 
      answer: t.yesPrioritizeElectric
    },
    {
      question: t.howWomenToWomenWorks,
      answer: t.femalePassengersChoose
    },
    {
      question: t.whatPaymentMethods,
      answer: t.acceptAllMajorCards
    }
  ];

  return (
    <motion.section
      ref={faqRef}
      className="py-20 bg-white"
      initial="hidden"
      animate={faqInView ? "visible" : "hidden"}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-black mb-12 text-center"
          variants={textReveal}
        >
          {t.frequentlyAskedQuestions}
        </motion.h2>
        
        <motion.div className="space-y-6" variants={staggerContainer}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden"
              variants={staggerItems}
              whileHover={{
                ...cardHover,
                borderColor: "#0BB0CD",
                boxShadow: "0 10px 30px rgba(11, 176, 205, 0.1)",
              }}
              animate={{
                y: [0, -2, 0],
              }}
              transition={{
                y: {
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: index * 0.2,
                },
              }}
            >
              <motion.h3
                className="text-lg font-semibold text-slate-800 mb-2"
                variants={textReveal}
              >
                {faq.question}
              </motion.h3>
              <motion.p className="text-gray-600" variants={fadeInUp}>
                {faq.answer}
              </motion.p>

              {/* Decorative element */}
              <motion.div
                className="absolute top-2 right-2 w-2 h-2 bg-[#0BB0CD] rounded-full opacity-0"
                whileHover={{ opacity: 1, scale: 1.5 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default RentaurasXFAQSection;