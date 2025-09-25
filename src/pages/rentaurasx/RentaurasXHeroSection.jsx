import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Star, Heart, Zap } from 'lucide-react';
import { 
  staggerContainer, 
  textReveal,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  fadeInUp,
  buttonHover,
  buttonTap,
  imageReveal
} from '../../utils/animations';

const RentaurasXHeroSection = ({ setCurrentPage }) => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-green-50"
      initial="hidden"
      animate={heroInView ? "visible" : "hidden"}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-24 h-24 bg-[#0BB0CD]/10 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute top-40 right-20 w-16 h-16 bg-purple-200/40 rounded-full"
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-32 right-32 w-12 h-12 bg-green-200/30 rounded-full"
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.5, 1],
          rotate: [0, 270, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-start">
          
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left relative z-10"
            variants={staggerContainer}
          >
            <motion.div
              className="absolute -top-4 -left-4 w-8 h-8 text-[#0BB0CD]"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <div className="w-4 h-4 bg-[#0BB0CD] rounded-full animate-pulse"></div>
            </motion.div>
            
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight"
              variants={textReveal}
            >
              Your Ride, Your Way{' '}
              <motion.span className="relative">
                with 
                <motion.span
                  className="inline-block px-4 py-2 ml-2 rounded-xl text-white"
                  style={{ backgroundColor: '#0BB0CD' }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 6px 20px rgba(11, 176, 205, 0.4)",
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(11, 176, 205, 0.4)",
                      "0 4px 20px rgba(11, 176, 205, 0.6)",
                      "0 0 0 rgba(11, 176, 205, 0.4)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  RentaurasX
                </motion.span>
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 text-black"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                    scale: {
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    },
                  }}
                >
                  <Zap className="w-6 h-6 fill-current" />
                </motion.div>
              </motion.span>
            </motion.h1>
            
            <motion.p
              className="text-sm sm:text-lg text-gray-600 mb-8 max-w-2xl"
              variants={fadeInLeft}
              animate={
                heroInView
                  ? {
                      opacity: [0.8, 1, 0.8],
                    }
                  : {}
              }
              transition={{
                opacity: {
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
            >
              Fast, reliable, and eco-friendly rides at your fingertips. 
              Experience the future of urban mobility.
            </motion.p>

            {/* QR Code Placeholder */}
            <motion.div
              className="flex justify-center items-center gap-4 mb-8"
              variants={scaleIn}
            >
              <motion.div
                className="w-20 h-20 bg-black rounded-lg flex items-center justify-center"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(0, 0, 0, 0.3)",
                    "0 4px 15px rgba(0, 0, 0, 0.3)",
                    "0 0 0 rgba(0, 0, 0, 0.3)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <div className="grid grid-cols-3 gap-1">
                  {[...Array(9)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 h-1 bg-white rounded-full"
                      animate={{
                        opacity: [0.5, 1, 0.5],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
              <motion.div
                variants={fadeInRight}
                animate={{
                  color: ["#6B7280", "#0BB0CD", "#6B7280"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <div className="text-sm text-gray-500">Get the</div>
                <div className="font-semibold text-slate-800">app</div>
              </motion.div>
            </motion.div>

            {/* CTA Button */}
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
              <span className="relative z-10">Download the app</span>
            </motion.button>

            {/* Floating decorative elements */}
            <motion.div
              className="absolute top-16 -right-8 w-3 h-3 bg-[#0BB0CD] rounded-full"
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.8, 0.5],
                x: [0, 15, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>

          {/* Right Image with Cards */}
          <motion.div className="relative" variants={imageReveal}>
            {/* Main Image */}
            <motion.div
              className="relative rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src="assets/rentaurasx/RentaurasX-first-section-image.png"
                alt="RentaurasX User"
                className="w-full h-full object-cover"
                animate={{
                  filter: [
                    "brightness(1)",
                    "brightness(1.1)",
                    "brightness(1)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              
              {/* Special Feature Card - Women to Women */}
              <motion.div
                className="absolute top-8 right-2 bg-white rounded-xl p-2 shadow-xl border border-pink-100"
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
                }}
              >
                <motion.img 
                  src="assets/rentaurasx/women for women Rentauras2 X.svg" 
                  alt="Women to Women Service" 
                  className="w-42 h-42 mb-2"
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <motion.div
                  className="text-xs font-medium"
                  style={{color: '#0BB0CD'}}
                  animate={{
                    color: ["#0BB0CD", "#EC4899", "#0BB0CD"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  Women to Women
                </motion.div>
                <div className="text-xs text-gray-600">First in Morocco!</div>
              </motion.div>
              
              {/* Floating Cards with Stars and Hearts */}
              <motion.div
                className="absolute top-20 left-4 bg-white rounded-2xl p-4 shadow-xl border border-cyan-100"
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
                }}
              >
                <motion.div
                  className="flex items-center gap-2"
                  style={{color: '#0BB0CD'}}
                  animate={{
                    color: ["#0BB0CD", "#EC4899", "#0BB0CD"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <Heart className="w-5 h-5 fill-current" />
                  <span className="text-sm font-medium">Safe Rides</span>
                </motion.div>
              </motion.div>
              
              <motion.div
                className="absolute bottom-16 left-8 bg-white rounded-2xl p-4 shadow-xl border border-green-100"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -2, 2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1,
                }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
                }}
              >
                <motion.div
                  animate={{
                    color: ["#6B7280", "#0BB0CD", "#6B7280"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1.5,
                  }}
                >
                  <div className="text-sm text-gray-500">Our drivers are</div>
                  <div className="font-semibold text-slate-800">Not strangers!</div>
                </motion.div>
              </motion.div>
              
              <motion.div
                className="absolute bottom-2 right-8 bg-white rounded-xl p-3 shadow-xl"
                animate={{
                  y: [0, -6, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 2,
                }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
                }}
              >
                <div className="bg-cyan-100 p-2 top-32 rounded-lg">
                  <Star className="w-8 h-8 text-[#0BB0CD] fill-current" />
                </div>
              </motion.div>
              
              {/* Additional decorative elements */}
              <motion.div
                className="absolute top-12 left-16 w-3 h-3 bg-[#0BB0CD] rounded-xl animate-pulse"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />

              <motion.div
                className="absolute bottom-64 left-4 w-2 h-2 bg-white rounded-xl animate-pulse"
                animate={{
                  x: [0, 15, 0],
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1,
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default RentaurasXHeroSection;