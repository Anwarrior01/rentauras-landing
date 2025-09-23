import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { 
  fadeInUp,
  staggerContainer, 
  staggerItems,
  cardHover,
  textReveal
} from '../../utils/animations';

const MarketplaceFAQSection = () => {
  const faqRef = useRef(null);
  const faqInView = useInView(faqRef, { once: true, amount: 0.3 });

  const faqData = [
    {
      question: "What is Rentauras Marketplace and how does it work?",
      answer: "Rentauras Marketplace is a peer-to-peer car rental platform that connects car owners with renters. Simply browse available cars, book instantly, and enjoy your ride.",
    },
    {
      question: "Where can I rent cars with Rentauras?",
      answer: "Rentauras operates in major cities across Morocco. Check our app to see available cars in your area.",
    },
    {
      question: "Is insurance included with my rental?",
      answer: "Yes, all rentals include comprehensive insurance coverage for your peace of mind.",
    },
    {
      question: "How do I become a host on Rentauras?",
      answer: "Download our app, verify your identity and car documents, and start earning by renting out your vehicle.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, and digital payment methods for your convenience.",
    },
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
          Frequently asked questions
        </motion.h2>

        <motion.div className="space-y-6" variants={staggerContainer}>
          {faqData.map((faq, index) => (
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

export default MarketplaceFAQSection;