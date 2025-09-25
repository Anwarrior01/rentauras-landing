import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import {
  Car,
  Users,
  Zap
} from "lucide-react";
import { 
  fadeInUp, 
  fadeInLeft, 
  fadeInRight,
  staggerContainer, 
  staggerItems,
  scaleIn,
  buttonHover,
  buttonTap,
  cardHover,
  textReveal,
  imageReveal
} from '../utils/animations';

const DownloadPage = () => {
  const { t } = useLanguage();
  const headerRef = useRef(null);
  const mainCardsRef = useRef(null);
  const driverCardRef = useRef(null);
  const qrRef = useRef(null);
  
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const mainCardsInView = useInView(mainCardsRef, { once: true, amount: 0.2 });
  const driverCardInView = useInView(driverCardRef, { once: true, amount: 0.3 });
  const qrInView = useInView(qrRef, { once: true, amount: 0.5 });

  // Real store icons as SVG components
  const AppleIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
        d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );

  const GooglePlayIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
        d="M3 20.5v-17c0-1.1.9-2 2-2 .4 0 .7.1 1 .3L19.6 12 6 22.7c-.3.2-.6.3-1 .3-1.1 0-2-.9-2-2zM6 22.7L19.6 12 6 1.3v21.4z"/>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
        d="m6 1.3 13.6 10.7-4.2 4.2L6 12V1.3z"/>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
        d="m6 12 9.4 4.2 4.2-4.2L6 22.7V12z"/>
    </svg>
  );

  // Main apps data - only 2 cards now
  const mainApps = [
    {
      id: "marketplace",
      name: "Rent a Car Easily",
      description: "Rent premium cars from trusted hosts. Perfect for travelers and car owners.",
      logo: "assets/Rentauras-Logo.png",
      icon: Car,
      features: [
        "Browse & rent cars",
        "Verified hosts", 
        "Instant booking",
        "Full insurance",
      ],
    },
    {
      id: "passenger",
      name: "Book your ride",
      description: "Fast, safe rides with professional drivers. Women-to-women service available.",
      logo: "assets/RentaurasX-Logo.png",
      icon: Users,
      features: [
        "Safe rides",
        "Women-to-women option",
        "Real-time tracking",
        "Cashless payments",
      ],
    },
  ];

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-[#0BB0CD]/10 pt-20 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-[#0BB0CD]/5 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.15, 0.05],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute top-40 right-20 w-20 h-20 bg-blue-200/20 rounded-full"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <motion.div
        className="absolute bottom-40 left-1/4 w-16 h-16 bg-green-200/15 rounded-full"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.4, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        
        {/* Header */}
        <motion.div 
          ref={headerRef}
          className="text-center mb-16"
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6"
            variants={textReveal}
            animate={headerInView ? {
              backgroundPosition: ["0%", "100%", "0%"]
            } : {}}
            transition={{
              backgroundPosition: { duration: 4, repeat: Infinity, ease: "linear" }
            }}
          >
            {t.downloadTheApp}
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            variants={fadeInUp}
            animate={headerInView ? {
              opacity: [0.8, 1, 0.8]
            } : {}}
            transition={{
              opacity: { duration: 4, repeat: Infinity, repeatType: "reverse" }
            }}
          >
            Download the RENTAURAS apps and experience the future of
            transportation in Morocco
          </motion.p>
        </motion.div>

        {/* Main Apps Grid - 2 cards only */}
        <motion.div 
          ref={mainCardsRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
          initial="hidden"
          animate={mainCardsInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {mainApps.map((app, index) => (
            <motion.div
              key={app.id}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              variants={staggerItems}
              whileHover={{
                ...cardHover,
                boxShadow: "0 25px 50px rgba(11, 176, 205, 0.2)"
              }}
              animate={{
                y: [0, -5, 0],
                rotate: index % 2 === 0 ? [0, 1, -1, 0] : [0, -1, 1, 0]
              }}
              transition={{
                y: { duration: 6, repeat: Infinity, repeatType: "reverse", delay: index * 0.5 },
                rotate: { duration: 8, repeat: Infinity, repeatType: "reverse", delay: index * 0.3 }
              }}
            >
              {/* Background decorative elements */}
              <motion.div
                className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#0BB0CD]/5 to-transparent rounded-full"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, repeatType: "reverse" }
                }}
              />

              <motion.div
                className="absolute bottom-4 left-4 w-4 h-4 bg-[#0BB0CD]/20 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: index
                }}
              />

              {/* App Header */}
              <motion.div 
                className="text-center mb-8"
                variants={staggerContainer}
              >
                <motion.img
                  src={app.logo}
                  alt={app.name}
                  className="w-full h-24 object-contain mx-auto mb-6"
                  variants={imageReveal}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, 5, -5, 0],
                    filter: "brightness(1.1)"
                  }}
                  transition={{ rotate: { duration: 0.6 } }}
                  animate={{
                    y: [0, -3, 0]
                  }}
                  transition={{
                    y: { duration: 4, repeat: Infinity, repeatType: "reverse", delay: index * 0.5 }
                  }}
                />
                <motion.h2 
                  className="text-2xl font-bold mb-3 text-black"
                  variants={textReveal}
                  animate={{
                    color: ["#000000", "#0BB0CD", "#000000"]
                  }}
                  transition={{
                    color: { duration: 5, repeat: Infinity, repeatType: "reverse", delay: index }
                  }}
                >
                  {app.name}
                </motion.h2>
                <motion.p
                  className="text-sm leading-relaxed text-gray-600"
                  variants={fadeInUp}
                >
                  {app.description}
                </motion.p>
              </motion.div>

              {/* Features */}
              <motion.div 
                className="mb-8"
                variants={staggerContainer}
              >
                <motion.h4
                  className="text-sm font-semibold mb-4 uppercase tracking-wide text-gray-800"
                  variants={fadeInLeft}
                >
                  Key Features
                </motion.h4>
                <motion.ul 
                  className="space-y-2"
                  variants={staggerContainer}
                >
                  {app.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                      variants={staggerItems}
                      whileHover={{ x: 5, color: "#0BB0CD" }}
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full mr-3 flex-shrink-0 bg-[#0BB0CD]"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: idx * 0.2
                        }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              {/* Download Buttons */}
              <motion.div 
                className="space-y-3"
                variants={staggerContainer}
              >
                <motion.button
                  className="w-full flex items-center justify-center space-x-3 bg-black hover:bg-gray-800 text-white py-3 px-4 rounded-xl transition-all duration-300 relative overflow-hidden"
                  variants={staggerItems}
                  whileHover={{
                    ...buttonHover,
                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)"
                  }}
                  whileTap={buttonTap}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-[#0BB0CD]/20 to-transparent opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <AppleIcon className="w-6 h-6" />
                  </motion.div>
                  <div className="text-left relative z-10">
                    <div className="text-xs opacity-75">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </motion.button>

                <motion.button
                  className="w-full flex items-center justify-center space-x-3 bg-black hover:bg-gray-800 text-white py-3 px-4 rounded-xl transition-all duration-300 relative overflow-hidden"
                  variants={staggerItems}
                  whileHover={{
                    ...buttonHover,
                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)"
                  }}
                  whileTap={buttonTap}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-[#0BB0CD]/20 to-transparent opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <GooglePlayIcon className="w-6 h-6" />
                  </motion.div>
                  <div className="text-left relative z-10">
                    <div className="text-xs opacity-75">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Driver Card - Small card below main apps */}
        <motion.div
          ref={driverCardRef}
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={driverCardInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div
            className="bg-white rounded-2xl p-6 shadow-lg relative overflow-hidden"
            variants={scaleIn}
            whileHover={{
              ...cardHover,
              boxShadow: "0 20px 40px rgba(11, 176, 205, 0.15)"
            }}
            animate={{
              y: [0, -3, 0]
            }}
            transition={{
              y: { duration: 5, repeat: Infinity, repeatType: "reverse" }
            }}
          >
            {/* Background decorative elements */}
            <motion.div
              className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-[#0BB0CD]/5 to-transparent rounded-full"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, repeatType: "reverse" }
              }}
            />

            <motion.div
              className="absolute bottom-4 left-8 w-3 h-3 bg-[#0BB0CD]/30 rounded-full"
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
              
              {/* Left - Car Image */}
              <motion.div 
                className="flex justify-center"
                variants={fadeInLeft}
              >
                <motion.img
                  src="assets/rentaurasx/car_cards/audi.svg"
                  alt="Driver Car"
                  className="w-full h-48 object-contain"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, 2, -2, 0] 
                  }}
                  animate={{
                    x: [0, 3, -3, 0],
                    rotate: [0, 1, -1, 0]
                  }}
                  transition={{
                    x: { duration: 6, repeat: Infinity, repeatType: "reverse" },
                    rotate: { duration: 4, repeat: Infinity, repeatType: "reverse" }
                  }}
                />
              </motion.div>

              {/* Center - Content */}
              <motion.div 
                className="text-center"
                variants={fadeInUp}
              >
                <motion.div 
                  className="flex items-center justify-center mb-2"
                  animate={{
                    color: ["#000000", "#0BB0CD", "#000000"]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <Zap className="w-5 h-5 mr-2 text-[#0BB0CD]" />
                  <h3 className="text-lg font-bold">Drive with us</h3>
                </motion.div>
                <motion.p 
                  className="text-sm text-gray-600"
                  animate={{
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  Join our network of professional drivers
                </motion.p>
              </motion.div>

              {/* Right - Download Buttons */}
              <motion.div 
                className="space-y-3"
                variants={fadeInRight}
              >
                <motion.button
                  className="w-full flex items-center justify-center space-x-2 bg-black hover:bg-gray-800 text-white py-2 px-3 rounded-lg text-xs transition-all duration-300 relative overflow-hidden"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-[#0BB0CD]/20 to-transparent opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <AppleIcon className="w-4 h-4" />
                  </motion.div>
                  <span className="relative z-10">RentaurasX Driver</span>
                </motion.button>

                <motion.button
                  className="w-full flex items-center justify-center space-x-2 bg-black hover:bg-gray-800 text-white py-2 px-3 rounded-lg text-xs transition-all duration-300 relative overflow-hidden"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-[#0BB0CD]/20 to-transparent opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <GooglePlayIcon className="w-4 h-4" />
                  </motion.div>
                  <span className="relative z-10">RentaurasX Driver</span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* QR Code Section */}
        <motion.div
          ref={qrRef}
          className="text-center mt-16"
          initial="hidden"
          animate={qrInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div
            className="flex justify-center items-center gap-8"
            variants={scaleIn}
          >
            <motion.div
              className="w-32 h-32 bg-black rounded-2xl flex items-center justify-center"
              whileHover={{
                scale: 1.05,
                rotate: 5
              }}
              animate={{
                boxShadow: [
                  "0 0 0 rgba(0, 0, 0, 0.3)",
                  "0 8px 25px rgba(0, 0, 0, 0.3)",
                  "0 0 0 rgba(0, 0, 0, 0.3)"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <div className="grid grid-cols-4 gap-1 p-4">
                {[...Array(16)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-white rounded-sm"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: i * 0.1
                    }}
                  />
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <motion.h3 
                className="text-xl font-bold mb-2"
                animate={{
                  color: ["#000000", "#0BB0CD", "#000000"]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                Scan to Download
              </motion.h3>
              <motion.p 
                className="text-gray-600"
                animate={{
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                Get both apps instantly
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Additional floating decorative elements */}
        <motion.div
          className="absolute top-32 right-16 w-2 h-2 bg-[#0BB0CD] rounded-full"
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 2, 0.5],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 right-32 w-1 h-1 bg-gray-400 rounded-full"
          animate={{
            opacity: [0.3, 1, 0.3],
            y: [0, -15, 0],
            x: [0, 8, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />

        <motion.div
          className="absolute top-64 left-20 w-1 h-1 bg-[#0BB0CD] rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.5, 1, 0.5],
            rotate: [0, 360]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </motion.div>
  );
};

export default DownloadPage;