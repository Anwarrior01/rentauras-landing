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

const MarketplaceStepsSection = () => {
  const stepsRef = useRef(null);
  const stepsInView = useInView(stepsRef, { once: true, amount: 0.2 });

  const steps = [
    {
      number: "STEP 1",
      title: "Download & Sign Up",
      description: "Create your account in seconds and join thousands of happy drivers.",
      image: "assets/rentauras/steps/Mobile-login-cuate.svg",
      bgColor: "bg-purple-100",
      labelColor: "#0BB0CD",
      animationColor: ["#0BB0CD", "#8B5CF6", "#0BB0CD"]
    },
    {
      number: "STEP 2", 
      title: "Choose Your Car",
      description: "Browse our wide collection of premium vehicles from trusted hosts.",
      image: "assets/rentauras/steps/Car-rental-cuate.svg",
      bgColor: "bg-green-100",
      labelColor: "#0BB0CD",
      animationColor: ["#0BB0CD", "#10B981", "#0BB0CD"]
    },
    {
      number: "STEP 3",
      title: "Secure Payment", 
      description: "Pay securely and easily with our trusted payment system.",
      image: "assets/rentauras/steps/Credit-card-cuate.svg",
      bgColor: "bg-yellow-100",
      labelColor: "#EA580C",
      animationColor: ["#EA580C", "#0BB0CD", "#EA580C"]
    },
    {
      number: "STEP 4",
      title: "Enjoy Your Ride",
      description: "Hit the road and create unforgettable memories.",
      image: "assets/rentauras/steps/convertible-car-cuate.svg", 
      bgColor: "bg-blue-100",
      labelColor: "#2563EB",
      animationColor: ["#2563EB", "#0BB0CD", "#2563EB"]
    }
  ];

  return (
    <motion.section
      ref={stepsRef}
      className="pb-20 bg-gray-50"
      initial="hidden"
      animate={stepsInView ? "visible" : "hidden"}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={staggerContainer}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`${step.bgColor} rounded-3xl p-8 transform ${
                index % 2 === 0 ? 'rotate-1' : '-rotate-1'
              } hover:rotate-0 transition-transform duration-300`}
              variants={staggerItems}
              whileHover={{
                ...cardHover,
                rotate: 0,
                boxShadow: index === 0 ? "0 20px 40px rgba(139, 92, 246, 0.3)" :
                          index === 1 ? "0 20px 40px rgba(34, 197, 94, 0.3)" :
                          index === 2 ? "0 20px 40px rgba(245, 158, 11, 0.3)" :
                          "0 20px 40px rgba(59, 130, 246, 0.3)"
              }}
              animate={{
                y: index % 2 === 0 ? [0, -2, 0] : [0, 2, 0],
              }}
              transition={{
                y: { 
                  duration: 3 + index * 0.5, 
                  repeat: Infinity, 
                  repeatType: "reverse",
                  delay: index * 0.5
                },
              }}
            >
              <motion.div
                className="text-xs font-medium mb-2 uppercase tracking-wide"
                style={{ color: step.labelColor }}
                animate={{
                  color: step.animationColor,
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: index,
                }}
              >
                {step.number}
              </motion.div>
              
              <motion.h3
                className="text-xl font-bold text-black mb-4"
                variants={textReveal}
              >
                {step.title}
              </motion.h3>
              
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={step.image}
                  alt={step.title}
                  className="w-64 h-64"
                  animate={
                    index === 0 ? { rotate: [0, 2, -2, 0] } :
                    index === 1 ? { scale: [1, 1.02, 1] } :
                    index === 2 ? { rotate: [0, -1, 1, 0] } :
                    { x: [0, 3, -3, 0] }
                  }
                  transition={{
                    duration: index === 0 ? 4 : index === 1 ? 3 : index === 2 ? 5 : 6,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: index === 0 ? 0 : index === 1 ? 0.5 : index === 2 ? 1 : 1.5,
                  }}
                />
              </motion.div>
              
              <motion.p className="text-gray-600" variants={fadeInUp}>
                {step.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MarketplaceStepsSection;