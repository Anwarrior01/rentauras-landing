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
  cardHover
} from '../utils/animations';

const RightNowSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      id: 'women',
      title: 'Women to Women Service',
      description: 'First in Morocco to introduce women-to-women service, where female passengers are exclusively driven by verified female drivers for enhanced safety and comfort.',
      image: 'assets/By-my-car-cuate.svg',
      category: 'INNOVATION',
      date: 'Dec 15'
    },
    {
      id: 'eco',
      title: 'Eco-Friendly Transportation',
      description: 'Leading the way in sustainable mobility with electric and hybrid vehicles across our platform, protecting Morocco\'s environment for future generations.',
      image: 'assets/Environment-cuate.svg',
      category: 'SUSTAINABILITY',
      date: 'Nov 20'
    },
    {
      id: 'ecosystem',
      title: 'Integrated Ecosystem',
      description: 'Complete transportation ecosystem combining car rentals and ride-hailing services under one unified platform, revolutionizing how Morocco moves.',
      image: 'assets/Back-to-back-cuate.svg',
      category: 'TECHNOLOGY',
      date: 'Oct 08'
    },
    {
      id: 'pioneer',
      title: 'Transportation Pioneer',
      description: 'Morocco\'s first fully digital transportation platform, setting new standards for innovation, safety, and user experience in the MENA region.',
      image: 'assets/Teamwork-cuate.svg',
      category: 'LEADERSHIP',
      date: 'Sep 12'
    }
  ];

  return (
    <motion.section 
      ref={ref}
      className="py-20 bg-gray-50"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          variants={staggerContainer}
        >
          <motion.p 
            className="text-sm uppercase tracking-wider text-gray-500 mb-4"
            variants={fadeInUp}
          >
            {t.featuresSubtitle}
          </motion.p>
          
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-black mb-6"
            variants={textReveal}
          >
            {t.rightNowTitle1}{' '}
            <motion.span 
              className="bg-[#0BB0CD] text-white px-2 py-1 rounded"
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 4px 20px rgba(11, 176, 205, 0.4)",
                transition: { duration: 0.2 }
              }}
            >
              {t.rightNowHighlight}
            </motion.span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Large Card - Left Side */}
          <motion.div 
            className="lg:row-span-0"
            variants={fadeInLeft}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="bg-white rounded-2xl p-8 h-full shadow-sm hover:shadow-lg transition-shadow duration-300 relative overflow-hidden"
              whileHover={cardHover}
            >
              {/* Background decorative elements */}
              <motion.div
                className="absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br from-[#0BB0CD]/5 to-transparent rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                // animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                // transition={{ delay: 0.5, duration: 0.8 }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  scale: { duration: 5, repeat: Infinity, repeatType: "reverse" }
                }}
              />

              <motion.div 
                className="flex justify-between items-start mb-4"
                variants={staggerContainer}
              >
                <motion.span 
                  className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full uppercase tracking-wider"
                  variants={staggerItems}
                  whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
                >
                  {features[0].category}
                </motion.span>
                <motion.span 
                  className="text-sm text-gray-500"
                  variants={staggerItems}
                >
                  {features[0].date}
                </motion.span>
              </motion.div>
              
              <motion.h3 
                className="text-xl font-bold text-black mb-4"
                variants={textReveal}
              >
                {features[0].title}
              </motion.h3>
              
              <motion.p 
                className="text-gray-600 mb-4 leading-relaxed"
                variants={fadeInUp}
              >
                {features[0].description}
              </motion.p>

              <motion.div 
                className="mb-4"
                variants={imageReveal}
              >
                <motion.img
                  src={features[0].image}
                  alt={features[0].title}
                  className="w-full h-full object-contain"
                  whileHover={{
                    scale: 1.05,
                    rotate: [0, 2, -2, 0],
                    transition: { 
                      scale: { duration: 0.3 },
                      rotate: { duration: 0.8 }
                    }
                  }}
                />
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute top-6 right-6 w-3 h-3 bg-pink-300 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              <motion.div
                className="absolute bottom-12 left-6 w-2 h-2 bg-[#0BB0CD] rounded-full"
                animate={{
                  y: [0, -12, 0],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }}
              />
            </motion.div>
          </motion.div>

          {/* Right Side - Three smaller cards */}
          <motion.div 
            className="space-y-8"
            variants={staggerContainer}
          >
            {features.slice(1).map((feature, index) => (
              <motion.div 
                key={feature.id} 
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 relative overflow-hidden"
                variants={staggerItems}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                whileHover={cardHover}
              >
                {/* Background decoration */}
                <motion.div
                  className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  // animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  // transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
                  animate={{
                    rotate: [0, 180, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    rotate: { duration: 15 + index * 2, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4 + index, repeat: Infinity, repeatType: "reverse" }
                  }}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <motion.div variants={staggerContainer}>
                    <motion.div 
                      className="flex justify-between items-start mb-3"
                      variants={staggerItems}
                    >
                      <motion.span 
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full uppercase tracking-wider"
                        whileHover={{ scale: 1.05, backgroundColor: "#f9fafb" }}
                      >
                        {feature.category}
                      </motion.span>
                      <motion.span 
                        className="text-xs text-gray-500"
                        variants={staggerItems}
                      >
                        {feature.date}
                      </motion.span>
                    </motion.div>
                    
                    <motion.h3 
                      className="text-xl font-bold text-black mb-3"
                      variants={textReveal}
                    >
                      {feature.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-600 text-sm leading-relaxed"
                      variants={fadeInUp}
                    >
                      {feature.description}
                    </motion.p>
                  </motion.div>

                  <motion.div 
                    className="flex justify-center"
                    variants={imageReveal}
                  >
                    <motion.img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-52 object-contain"
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, 3, -3, 0],
                        transition: { 
                          scale: { duration: 0.3 },
                          rotate: { duration: 1 }
                        }
                      }}
                    />
                  </motion.div>
                </div>

                {/* Card-specific floating elements */}
                <motion.div
                  className="absolute top-4 left-4 w-2 h-2 rounded-full"
                  style={{ 
                    backgroundColor: index === 0 ? '#10b981' : index === 1 ? '#3b82f6' : '#8b5cf6' 
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{
                    duration: 2 + index * 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: index * 0.3
                  }}
                />

                <motion.div
                  className="absolute bottom-4 right-4 w-3 h-3 bg-gray-200 rounded-full"
                  animate={{
                    y: [0, -8, 0],
                    x: [0, 4, 0],
                    opacity: [0.2, 0.6, 0.2]
                  }}
                  transition={{
                    duration: 3.5 + index * 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.5 + index * 0.4
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional floating particles for the entire section */}
        <motion.div
          className="absolute top-20 left-20 w-4 h-4 bg-[#0BB0CD]/10 rounded-full"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 right-32 w-6 h-6 bg-blue-100 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
      </div>
    </motion.section>
  );
};

export default RightNowSection;