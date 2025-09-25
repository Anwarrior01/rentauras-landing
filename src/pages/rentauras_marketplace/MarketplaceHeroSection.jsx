/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Star, Heart, Shield } from 'lucide-react';
import { 
  fadeInUp, 
  fadeInLeft, 
  fadeInRight,
  staggerContainer, 
  scaleIn,
  buttonHover,
  buttonTap,
  imageReveal,
  textReveal
} from '../../utils/animations';

const MarketplaceHeroSection = ({ setCurrentPage }) => {
  const { t } = useLanguage();
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-blue-50 to-green-50"
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
              Own your Dream{" "}
              <motion.span className="relative">
                with
                <motion.span
                  className="inline-block px-4 py-2 ml-2 rounded-xl text-white"
                  style={{ backgroundColor: "#0BB0CD" }}
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
                  Rentauras
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
                  <Star className="w-6 h-6 fill-current" />
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
              With the Rentauras App, you're in control. Choose the way you
              rent and bring your dreams to drive.
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
              onClick={() => setCurrentPage("download")}
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
                src="assets/rentauras/Rentauras-first-section-image.png"
                alt="Rentauras User"
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

              {/* Floating Cards */}
              <motion.div
                className="absolute top-8 left-4 bg-white rounded-2xl p-4 shadow-xl border border-blue-100"
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
                  className="flex items-center gap-2 text-[#0BB0CD]"
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
                  <span className="text-sm font-medium">No hidden fees</span>
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute top-20 right-4 bg-white rounded-2xl p-4 shadow-xl border border-blue-100"
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
                  className="flex items-center gap-2 text-[#0BB0CD]"
                  animate={{
                    color: ["#0BB0CD", "#10B981", "#0BB0CD"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.5,
                  }}
                >
                  <Shield className="w-5 h-5 fill-current" />
                  <span className="text-sm font-medium">
                    Secure & Trusted
                  </span>
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute bottom-12 left-8 bg-white rounded-2xl p-4 shadow-xl border border-blue-100"
                animate={{
                  y: [0, -6, 0],
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1.5,
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
                  <div className="text-sm text-gray-500">Instant Booking</div>
                  <div className="font-semibold text-slate-800">
                    Book in seconds!
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute bottom-20 right-8 bg-white rounded-xl p-3 shadow-xl"
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
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Star className="w-8 h-8 text-[#0BB0CD] fill-current" />
                </div>
              </motion.div>
            </motion.div>

            {/* Floating decorative elements around image */}
            <motion.div
              className="absolute -top-8 left-1/4 w-4 h-4 bg-[#0BB0CD] rounded-full"
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
              className="absolute -bottom-6 right-1/4 w-3 h-3 bg-purple-400 rounded-full"
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
        </div>
      </div>
    </motion.section>
  );
};

export default MarketplaceHeroSection;