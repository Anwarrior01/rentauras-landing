import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { 
  staggerContainer, 
  staggerItems,
  cardHover,
  textReveal,
  fadeInUp
} from '../../utils/animations';

const RentaurasXStepsSection = () => {
  const stepsRef = useRef(null);
  const stepsInView = useInView(stepsRef, { once: true, amount: 0.2 });

  const steps = [
    {
      id: 1,
      title: 'Download & Register',
      description: 'Quick sign-up to start your electric journey.',
      image: '/src/assets/rentauras/steps/Mobile-login-cuate.svg',
      bgColor: 'bg-purple-100',
      accentColor: '#8B5CF6'
    },
    {
      id: 2,
      title: 'Request Your Ride',
      description: 'Book eco-friendly rides with verified professional drivers.',
      image: '/src/assets/rentaurasx/steps/City-driver-cuate.svg',
      bgColor: 'bg-green-100',
      accentColor: '#10B981'
    },
    {
      id: 3,
      title: 'Track & Pay Securely',
      description: 'Real-time tracking and cash/cashless secure payments.',
      image: '/src/assets/rentaurasx/steps/GPS-navigator-cuate.svg',
      bgColor: 'bg-yellow-100',
      accentColor: '#F59E0B'
    },
    {
      id: 4,
      title: 'Arrive Comfortably',
      description: 'Enjoy smooth rides in our electric and hybrid vehicles.',
      image: '/src/assets/rentaurasx/steps/driving-cuate.svg',
      bgColor: 'bg-blue-100',
      accentColor: '#2563EB'
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
              key={step.id}
              className={`${step.bgColor} rounded-3xl p-8 transform ${
                index % 2 === 0 ? 'rotate-1' : '-rotate-1'
              } hover:rotate-0 transition-transform duration-300 relative overflow-hidden`}
              variants={staggerItems}
              whileHover={{
                ...cardHover,
                rotate: 0,
                boxShadow: `0 20px 40px ${step.accentColor}30`,
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
                className="text-xs text-[#0BB0CD] font-medium mb-2 uppercase tracking-wide"
                animate={{
                  color: ["#0BB0CD", step.accentColor, "#0BB0CD"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: index,
                }}
              >
                STEP {step.id}
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
                  className={`${step.id === 2 ? 'w-80 h-64' : 'w-64 h-64'}`}
                  animate={{
                    rotate: step.id === 1 ? [0, 2, -2, 0] : 
                            step.id === 2 ? { scale: [1, 1.02, 1] } :
                            step.id === 3 ? [0, -1, 1, 0] :
                            { x: [0, 3, -3, 0] }
                  }}
                  transition={{
                    duration: step.id === 1 ? 4 : 
                             step.id === 2 ? 3 :
                             step.id === 3 ? 5 : 6,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: step.id - 1,
                  }}
                />
              </motion.div>
              
              <motion.p 
                className="text-gray-600" 
                variants={fadeInUp}
              >
                {step.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default RentaurasXStepsSection;