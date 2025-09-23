import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Star, Heart, Shield, Check, Zap, Users, Leaf, ChevronLeft, ChevronRight } from 'lucide-react';
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
  imageReveal,
  textReveal
} from '../utils/animations';

const RentaurasXPage = ({ setCurrentPage }) => {
  const { t } = useLanguage();
  const heroRef = useRef(null);
  const descRef = useRef(null);
  const stepsRef = useRef(null);
  const whyRef = useRef(null);
  const collectionRef = useRef(null);
  const screensRef = useRef(null);
  const securityRef = useRef(null);
  const faqRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const descInView = useInView(descRef, { once: true, amount: 0.5 });
  const stepsInView = useInView(stepsRef, { once: true, amount: 0.2 });
  const whyInView = useInView(whyRef, { once: true, amount: 0.2 });
  const collectionInView = useInView(collectionRef, { once: true, amount: 0.2 });
  const screensInView = useInView(screensRef, { once: true, amount: 0.3 });
  const securityInView = useInView(securityRef, { once: true, amount: 0.5 });
  const faqInView = useInView(faqRef, { once: true, amount: 0.3 });

  // EV Collection Slider Component
  // const EVCollectionSlider = () => {
  //   const cars = [
  //     { id: 23, image: "/src/assets/rentaurasx/car_cards/13.svg" },
  //     { id: 24, image: "/src/assets/rentaurasx/car_cards/14.svg" },
  //     { id: 25, image: "/src/assets/rentaurasx/car_cards/15.svg" },
  //     { id: 26, image: "/src/assets/rentaurasx/car_cards/16.svg" },
  //     { id: 27, image: "/src/assets/rentaurasx/car_cards/17.svg" },
  //     { id: 28, image: "/src/assets/rentaurasx/car_cards/18.svg" },
  //     { id: 29, image: "/src/assets/rentaurasx/car_cards/19.svg" },
  //     { id: 30, image: "/src/assets/rentaurasx/car_cards/21.svg" },
  //     { id: 31, image: "/src/assets/rentaurasx/car_cards/22.svg" }
  //   ];

  //   const [currentIndex, setCurrentIndex] = React.useState(0);

  //   // Auto-scroll functionality
  //   React.useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrentIndex((prevIndex) => 
  //         prevIndex === cars.length - 1 ? 0 : prevIndex + 1
  //       );
  //     }, 3000); // Change every 3 seconds

  //     return () => clearInterval(interval);
  //   }, [cars.length]);

  //   const goToNext = () => {
  //     setCurrentIndex(currentIndex === cars.length - 1 ? 0 : currentIndex + 1);
  //   };

  //   const goToPrevious = () => {
  //     setCurrentIndex(currentIndex === 0 ? cars.length - 1 : currentIndex - 1);
  //   };

  //   const getVisibleCards = () => {
  //     const visibleCount = 3;
  //     let visible = [];
      
  //     for (let i = 0; i < visibleCount; i++) {
  //       const index = (currentIndex + i) % cars.length;
  //       visible.push(cars[index]);
  //     }
      
  //     return visible;
  //   };

  //   return (
  //     <motion.section
  //       ref={collectionRef}
  //       className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-green-50"
  //       initial="hidden"
  //       animate={collectionInView ? "visible" : "hidden"}
  //     >
  //       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
  //         <motion.div
  //           className="text-center mb-16"
  //           variants={staggerContainer}
  //         >
  //           <motion.h2
  //             className="text-3xl sm:text-4xl font-bold text-black mb-8"
  //             variants={textReveal}
  //             animate={
  //               collectionInView
  //                 ? {
  //                     backgroundImage: [
  //                       "linear-gradient(90deg, #000 0%, #000 100%)",
  //                       "linear-gradient(90deg, #000 0%, #0BB0CD 50%, #000 100%)",
  //                       "linear-gradient(90deg, #000 0%, #000 100%)",
  //                     ],
  //                   }
  //                 : {}
  //             }
  //             style={{ backgroundClip: "text", WebkitBackgroundClip: "text" }}
  //             transition={{
  //               backgroundImage: {
  //                 duration: 4,
  //                 repeat: Infinity,
  //                 repeatType: "reverse",
  //               },
  //             }}
  //           >
  //             Our EV Collection
  //           </motion.h2>
  //           <motion.p
  //             className="text-lg text-gray-600 max-w-2xl mx-auto"
  //             variants={fadeInUp}
  //           >
  //             Discover our fleet of premium electric and hybrid vehicles, 
  //             designed for the eco-conscious traveler.
  //           </motion.p>
  //         </motion.div>
          
  //         <motion.div className="relative" variants={staggerContainer}>
  //           {/* Slider Container */}
  //           <div className="flex justify-center items-center space-x-6 overflow-hidden">
  //             {getVisibleCards().map((car, index) => (
  //               <motion.div
  //                 key={car.id} 
  //                 className={`transform transition-all duration-500 ease-in-out ${
  //                   index === 1 
  //                     ? 'scale-110 z-10' 
  //                     : 'scale-95 opacity-75'
  //                 }`}
  //                 variants={staggerItems}
  //                 whileHover={{
  //                   scale: index === 1 ? 1.15 : 1.05,
  //                   opacity: 1,
  //                 }}
  //                 animate={
  //                   collectionInView
  //                     ? {
  //                         y: [0, -5, 0],
  //                         rotate: index === 1 ? [0, 2, -2, 0] : [0, 1, -1, 0],
  //                       }
  //                     : {}
  //                 }
  //                 transition={{
  //                   y: { duration: 3, repeat: Infinity, repeatType: "reverse", delay: index * 0.2 },
  //                   rotate: { duration: 4, repeat: Infinity, repeatType: "reverse", delay: index * 0.3 },
  //                 }}
  //               >
  //                 <motion.div
  //                   className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
  //                   whileHover={{
  //                     ...cardHover,
  //                     boxShadow: "0 25px 50px rgba(11, 176, 205, 0.3)",
  //                   }}
  //                 >
  //                   {/* Car Image */}
  //                   <div className="flex justify-center mb-4">
  //                     <motion.img 
  //                       src={car.image} 
  //                       alt={`Electric Vehicle ${car.id}`} 
  //                       className="w-64 h-64 object-cover group-hover:scale-105 transition-transform duration-300"
  //                       animate={{
  //                         filter: [
  //                           "brightness(1)",
  //                           "brightness(1.1)",
  //                           "brightness(1)",
  //                         ],
  //                       }}
  //                       transition={{
  //                         duration: 4,
  //                         repeat: Infinity,
  //                         repeatType: "reverse",
  //                       }}
  //                     />
  //                   </div>
                    
  //                   {/* Eco Badge */}
  //                   <div className="text-center">
  //                     <motion.div
  //                       className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-2"
  //                       animate={{
  //                         backgroundColor: ["#dcfce7", "#bbf7d0", "#dcfce7"],
  //                         color: ["#166534", "#15803d", "#166534"],
  //                       }}
  //                       transition={{
  //                         duration: 3,
  //                         repeat: Infinity,
  //                         repeatType: "reverse",
  //                       }}
  //                     >
  //                       <motion.div
  //                         animate={{
  //                           rotate: [0, 360],
  //                         }}
  //                         transition={{
  //                           duration: 3,
  //                           repeat: Infinity,
  //                           ease: "linear",
  //                         }}
  //                       >
  //                         <Zap className="w-3 h-3 mr-1" />
  //                       </motion.div>
  //                       Electric
  //                     </motion.div>
  //                   </div>
  //                 </motion.div>
  //               </motion.div>
  //             ))}
  //           </div>

  //           {/* Navigation Arrows */}
  //           <motion.button
  //             onClick={goToPrevious}
  //             className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors duration-200"
  //             whileHover={{
  //               scale: 1.1,
  //               backgroundColor: "#0BB0CD",
  //               color: "white",
  //               boxShadow: "0 8px 25px rgba(11, 176, 205, 0.3)",
  //             }}
  //             whileTap={buttonTap}
  //             variants={fadeInLeft}
  //           >
  //             <ChevronLeft className="w-6 h-6 text-gray-600" />
  //           </motion.button>
            
  //           <motion.button
  //             onClick={goToNext}
  //             className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors duration-200"
  //             whileHover={{
  //               scale: 1.1,
  //               backgroundColor: "#0BB0CD",
  //               color: "white",
  //               boxShadow: "0 8px 25px rgba(11, 176, 205, 0.3)",
  //             }}
  //             whileTap={buttonTap}
  //             variants={fadeInRight}
  //           >
  //             <ChevronRight className="w-6 h-6 text-gray-600" />
  //           </motion.button>

  //           {/* Dots Indicator */}
  //           <motion.div
  //             className="flex justify-center mt-8 space-x-2"
  //             variants={fadeInUp}
  //           >
  //             {cars.map((_, index) => (
  //               <motion.button
  //                 key={index}
  //                 onClick={() => setCurrentIndex(index)}
  //                 className={`w-3 h-3 rounded-full transition-all duration-200 ${
  //                   index === currentIndex 
  //                     ? 'bg-cyan-500' 
  //                     : 'bg-gray-300 hover:bg-gray-400'
  //                 }`}
  //                 whileHover={{ scale: 1.3 }}
  //                 whileTap={{ scale: 0.9 }}
  //                 animate={
  //                   index === currentIndex
  //                     ? {
  //                         backgroundColor: ["#06b6d4", "#0BB0CD", "#06b6d4"],
  //                         scale: [1, 1.2, 1],
  //                       }
  //                     : {}
  //                 }
  //                 transition={{
  //                   backgroundColor: { duration: 2, repeat: Infinity, repeatType: "reverse" },
  //                   scale: { duration: 1.5, repeat: Infinity, repeatType: "reverse" },
  //                 }}
  //               />
  //             ))}
  //           </motion.div>
  //         </motion.div>
  //       </div>
  //     </motion.section>
  //   );
  // }

  return (
    <motion.div
      className="min-h-screen bg-white pt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      
      {/* Hero Section*/}
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
                  src="/src/assets/rentaurasx/girl2.jpg"
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
                    src="/src/assets/rentaurasx/By-mycar-cuate.svg" 
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

      {/* Description Section */}
      <motion.section
        ref={descRef}
        className="py-20 bg-white"
        initial="hidden"
        animate={descInView ? "visible" : "hidden"}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-black mb-2"
            variants={textReveal}
            animate={
              descInView
                ? {
                    backgroundImage: [
                      "linear-gradient(90deg, #000 0%, #000 100%)",
                      "linear-gradient(90deg, #000 0%, #0BB0CD 50%, #000 100%)",
                      "linear-gradient(90deg, #000 0%, #000 100%)",
                    ],
                  }
                : {}
            }
            style={{ backgroundClip: "text", WebkitBackgroundClip: "text" }}
            transition={{
              backgroundImage: {
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          >
            RentaurasX revolutionizes urban transportation. 
            Safe rides, verified drivers, and sustainable 
            mobility for the modern world.
          </motion.h2>
        </div>
      </motion.section>

      {/* Steps Section - RentaurasX Style */}
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
            
            {/* Step 1 */}
            <motion.div
              className="bg-purple-100 rounded-3xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300 relative overflow-hidden"
              variants={staggerItems}
              whileHover={{
                ...cardHover,
                rotate: 0,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
              }}
              animate={{
                y: [0, -2, 0],
              }}
              transition={{
                y: { duration: 3, repeat: Infinity, repeatType: "reverse" },
              }}
            >
              <motion.div
                className="text-xs text-[#0BB0CD] font-medium mb-2 uppercase tracking-wide"
                animate={{
                  color: ["#0BB0CD", "#8B5CF6", "#0BB0CD"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                STEP 1
              </motion.div>
              <motion.h3
                className="text-xl font-bold text-black mb-4"
                variants={textReveal}
              >
                Download & Register
              </motion.h3>
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="/src/assets/rentauras/steps/Mobile-login-cuate.svg"
                  alt="Mobile Login"
                  className="w-64 h-64"
                  animate={{
                    rotate: [0, 2, -2, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </motion.div>
              <motion.p className="text-gray-600" variants={fadeInUp}>
                Quick sign-up to start your electric journey.
              </motion.p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="bg-green-100 rounded-3xl p-8 transform -rotate-1 hover:rotate-0 transition-transform duration-300 relative overflow-hidden"
              variants={staggerItems}
              whileHover={{
                ...cardHover,
                rotate: 0,
                boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)",
              }}
              animate={{
                y: [0, 2, 0],
              }}
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5,
                },
              }}
            >
              <motion.div
                className="text-xs font-medium mb-2 uppercase tracking-wide"
                style={{ color: "#0BB0CD" }}
                animate={{
                  color: ["#0BB0CD", "#10B981", "#0BB0CD"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1,
                }}
              >
                STEP 2
              </motion.div>
              <motion.h3
                className="text-xl font-bold text-black mb-4"
                variants={textReveal}
              >
                Request Your Ride
              </motion.h3>
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="/src/assets/rentaurasx/steps/City-driver-cuate.svg"
                  alt="Request Ride"
                  className="w-80 h-64"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.5,
                  }}
                />
              </motion.div>
              <motion.p className="text-gray-600" variants={fadeInUp}>
                Book eco-friendly rides with verified professional drivers.
              </motion.p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="bg-yellow-100 rounded-3xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300 relative overflow-hidden"
              variants={staggerItems}
              whileHover={{
                ...cardHover,
                rotate: 0,
                boxShadow: "0 20px 40px rgba(245, 158, 11, 0.3)",
              }}
              animate={{
                y: [0, -1, 0],
              }}
              transition={{
                y: {
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1,
                },
              }}
            >
              <motion.div
                className="text-xs text-[#0BB0CD] font-medium mb-2 uppercase tracking-wide"
                animate={{
                  color: ["#0BB0CD", "#F59E0B", "#0BB0CD"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 2,
                }}
              >
                STEP 3
              </motion.div>
              <motion.h3
                className="text-xl font-bold text-black mb-4"
                variants={textReveal}
              >
                Track & Pay Securely
              </motion.h3>
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="/src/assets/rentaurasx/steps/GPS-navigator-cuate.svg"
                  alt="Secure Payment"
                  className="w-64 h-64"
                  animate={{
                    rotate: [0, -1, 1, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1,
                  }}
                />
              </motion.div>
              <motion.p className="text-gray-600" variants={fadeInUp}>
                Real-time tracking and cash/cashless secure payments.
              </motion.p>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              className="bg-blue-100 rounded-3xl p-8 transform -rotate-1 hover:rotate-0 transition-transform duration-300 relative overflow-hidden"
              variants={staggerItems}
              whileHover={{
                ...cardHover,
                rotate: 0,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
              }}
              animate={{
                y: [0, 1, 0],
              }}
              transition={{
                y: {
                  duration: 3.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1.5,
                },
              }}
            >
              <motion.div
                className="text-xs text-[#0BB0CD] font-medium mb-2 uppercase tracking-wide"
                animate={{
                  color: ["#0BB0CD", "#2563EB", "#0BB0CD"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 3,
                }}
              >
                STEP 4
              </motion.div>
              <motion.h3
                className="text-xl font-bold text-black mb-4"
                variants={textReveal}
              >
                Arrive Comfortably
              </motion.h3>
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="/src/assets/rentaurasx/steps/driving-cuate.svg"
                  alt="Comfortable Ride"
                  className="w-64 h-64"
                  animate={{
                    x: [0, 3, -3, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1.5,
                  }}
                />
              </motion.div>
              <motion.p className="text-gray-600" variants={fadeInUp}>
                Enjoy smooth rides in our electric and hybrid vehicles.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose RentaurasX Section */}
      <motion.section
        ref={whyRef}
        className="py-20 bg-white"
        initial="hidden"
        animate={whyInView ? "visible" : "hidden"}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={staggerContainer}>
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-black mb-8"
              variants={textReveal}
            >
              Why Choose RentaurasX?
            </motion.h2>
          </motion.div>
          
         {/* First Row - 3 cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
            variants={staggerContainer}
          >
            {[
              {
                image: "/src/assets/rentaurasx/why_rentauras/Women's-EqualityDay-cuate.svg",
                title: "Women to Women Service",
                description: "Exclusive service where female passengers are driven by female drivers.",
                bgColor: '#f8fafc',
              },
              {
                image: "/src/assets/rentaurasx/why_rentauras/Electric-car-cuate.svg", 
                title: "Eco-Friendly Rides",
                description: "Electric and hybrid vehicles for sustainable transportation.",
                bgColor: '#f0fdf4',
              },
              {
                image: "/src/assets/rentaurasx/why_rentauras/driving-cuate.svg",
                title: "Professional Drivers",
                description: "All our drivers are verified professionals, not strangers.",
                bgColor: '#fef3c7',
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="rounded-xl p-8 transform transition-transform duration-300 relative overflow-hidden"
                style={{ backgroundColor: feature.bgColor }}
                variants={staggerItems}
                whileHover={{
                  ...cardHover,
                  rotate: 0,
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                }}
                animate={{
                  rotate: index % 2 === 0 ? [1, -1, 1] : [-1, 1, -1],
                }}
                transition={{
                  rotate: {
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: index * 0.5,
                  },
                }}
              >
                <motion.div
                  className="flex justify-center mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={feature.image}
                    alt={feature.title}
                    className="w-64 h-64"
                    animate={{
                      y: [0, -5, 0],
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: index * 0.3,
                    }}
                  />
                </motion.div>
                <motion.h3
                  className="text-xl font-bold text-black mb-3 text-center"
                  variants={textReveal}
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  className="text-gray-600 text-center"
                  variants={fadeInUp}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Second Row - 2 cards stretched to full width */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {[
              {
                image: "/src/assets/rentaurasx/why_rentauras/Directions-cuate.svg",
                title: "Real-time Tracking",
                description: "Track your ride in real-time for complete peace of mind.",
                bgColor: '#dbeafe',
              },
              {
                image: "/src/assets/rentaurasx/why_rentauras/Credit-card-cuate.svg",
                title: "Fair & Transparent Pricing",
                description: "No surge pricing, no hidden fees. Fair rates for everyone.",
                bgColor: '#f3e8ff',
              }
            ].map((feature, index) => (
              <motion.div
                key={index + 3}
                className="rounded-xl p-8 transform transition-transform duration-300 relative overflow-hidden"
                style={{ backgroundColor: feature.bgColor }}
                variants={staggerItems}
                whileHover={{
                  ...cardHover,
                  rotate: 0,
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                }}
                animate={{
                  rotate: index % 2 === 0 ? [1, -1, 1] : [-1, 1, -1],
                }}
                transition={{
                  rotate: {
                    duration: 7,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: (index + 3) * 0.5,
                  },
                }}
              >
                <motion.div
                  className="flex justify-center mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={feature.image}
                    alt={feature.title}
                    className="w-64 h-64"
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, 2, -2, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: (index + 3) * 0.4,
                    }}
                  />
                </motion.div>
                <motion.h3
                  className="text-xl font-bold text-black mb-3 text-center"
                  variants={textReveal}
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  className="text-gray-600 text-center"
                  variants={fadeInUp}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

  {/* EV Collection Slider */}
  <motion.section className="py-20 bg-white"
  >
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16"><h2 className="text-3xl sm:text-4xl font-bold text-black mb-8">
        Our EV Collection
      </h2>
    </div>
    
    {/* Simple Slider Container */}
    <div className="relative overflow-hidden">
      <div className="flex animate-slide">
        {/* Cars */}
        {[23, 24, 25, 26, 27, 28, 29, 30, 31].map((carNumber, index) => (
          <div key={`car-${carNumber}`} className={`flex-shrink-0 mx-4 bg-transparent rounded-3xl p-8 transform transition-transform duration-300 hover:scale-105 ${
            index % 2 === 0 ? 'rotate-1 hover:rotate-0' : '-rotate-2 hover:rotate-3'
          } min-w-[300px] max-w-[500px]`}>
            <div className="flex justify-center rounded-3xl">
              <img 
                src={`/src/assets/rentaurasx/car_cards/${carNumber}.svg`} 
                alt={`Car ${carNumber}`} 
                className="w-full h-full object-contain rounded-3xl" 
              />
            </div>
          </div>
        ))}
        {/* Duplicate for infinite loop */}
        {[23, 24, 25, 26, 27, 28, 29, 30, 31].map((carNumber, index) => (
          <div key={`car-duplicate-${carNumber}`} className={`flex-shrink-0 mx-4 bg-transparent rounded-3xl p-8 transform transition-transform duration-300 hover:scale-105 ${
            index % 2 === 0 ? 'rotate-1 hover:rotate-0' : '-rotate-1 hover:rotate-0'
          } min-w-[300px] max-w-[300px]`}>
            <div className="flex justify-center">
              <img 
                src={`/src/assets/rentaurasx/car_cards/${carNumber}.svg`} 
                alt={`Car ${carNumber}`} 
                className="w-full h-full object-contain border  rounded-2xl" 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  {/* CSS Animation */}
  <style jsx>{`
    .animate-slide {
      animation: slide 30s linear infinite;
      width: calc(300px * 18 + 32px * 18);
    }
    
    @keyframes slide {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(calc(-300px * 9 - 32px * 9));
      }
    }
    
    .animate-slide:hover {
      animation-play-state: paused;
    }
  `}</style>
</motion.section>

      <motion.section
        ref={screensRef}
        className="py-20 bg-gray-50"
        initial="hidden"
        animate={screensInView ? "visible" : "hidden"}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* First Screenshot */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center"
            variants={staggerContainer}
          >
            <motion.div className="order-2 lg:order-1" variants={fadeInLeft}>
              <motion.h3
                className="text-3xl font-bold text-black mb-6"
                variants={textReveal}
              >
                Book & Track Instantly
              </motion.h3>
              <motion.p
                className="text-lg text-gray-600 mb-8"
                variants={fadeInUp}
              >
                Request rides instantly and track your driver in real-time. 
                Know exactly where your ride is at all times.
              </motion.p>
              <motion.div
                className="flex items-center gap-4 flex-wrap"
                variants={staggerContainer}
              >
                <motion.div
                  className="flex items-center gap-2"
                  variants={staggerItems}
                  whileHover={{ scale: 1.05 }}
                >
                  <Check className="w-5 h-5 text-[#0BB0CD]" />
                  <span className="text-gray-700">Instant booking</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  variants={staggerItems}
                  whileHover={{ scale: 1.05 }}
                >
                  <Check className="w-5 h-5 text-[#0BB0CD]" />
                  <span className="text-gray-700">Real-time tracking</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  variants={staggerItems}
                  whileHover={{ scale: 1.05 }}
                >
                  <Leaf className="w-5 h-5 text-[#0BB0CD]" />
                  <span className="text-gray-700">Eco-friendly vehicles</span>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              className="order-1 lg:order-2 flex justify-center"
              variants={fadeInRight}
            >
              <motion.div className="relative">
                <motion.img
                  src="/src/assets/rentauras/first-screen.png"
                  alt="App Screenshot 1"
                  className="max-w-sm rounded-3xl shadow-2xl"
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)",
                  }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    y: { duration: 4, repeat: Infinity, repeatType: "reverse" },
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Second Screenshot */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
          >
            <motion.div
              className="flex justify-center relative"
              variants={fadeInLeft}
            >
              <motion.img
                src="/src/assets/rentauras/second-screen.png"
                alt="App Screenshot 2"
                className="max-w-sm rounded-3xl shadow-2xl"
                whileHover={{
                  scale: 1.05,
                  rotateY: -5,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)",
                }}
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  y: { duration: 5, repeat: Infinity, repeatType: "reverse" },
                }}
              />
            </motion.div>
            <motion.div variants={fadeInRight}>
              <motion.h3
                className="text-3xl font-bold text-black mb-6"
                variants={textReveal}
              >
                Safe & Trusted Experience
              </motion.h3>
              <motion.p
                className="text-lg text-gray-600 mb-8"
                variants={fadeInUp}
              >
                Your safety is our priority. All drivers are verified professionals 
                and all rides are tracked for maximum security.
              </motion.p>
              <motion.div
                className="flex items-center gap-4 flex-wrap"
                variants={staggerContainer}
              >
                <motion.div
                  className="flex items-center gap-2"
                  variants={staggerItems}
                  whileHover={{ scale: 1.05 }}
                >
                  <Check className="w-5 h-5 text-[#0BB0CD]" />
                  <span className="text-gray-700">Verified drivers</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  variants={staggerItems}
                  whileHover={{ scale: 1.05 }}
                >
                  <Check className="w-5 h-5 text-[#0BB0CD]" />
                  <span className="text-gray-700">Cashless payments</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  variants={staggerItems}
                  whileHover={{ scale: 1.05 }}
                >
                  <Users className="w-5 h-5 text-[#0BB0CD]" />
                  <span className="text-gray-700">Women-to-women service</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Security Section */}
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

      {/* FAQ Section */}
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
            {[
              {
                question: "What is RentaurasX and how does it work?",
                answer: "RentaurasX is a ride-hailing service that connects passengers with verified professional drivers. Simply request a ride through our app and get picked up in minutes."
              },
              {
                question: "What makes RentaurasX different from other ride services?",
                answer: "We're the first in Morocco to offer women-to-women service, use eco-friendly vehicles, and all our drivers are verified professionals, not strangers."
              },
              {
                question: "Are your vehicles eco-friendly?", 
                answer: "Yes! We prioritize electric and hybrid vehicles to reduce environmental impact and provide sustainable transportation."
              },
              {
                question: "How does the women-to-women service work?",
                answer: "Female passengers can choose to be driven exclusively by female drivers, ensuring comfort and safety for women travelers."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, debit cards, and digital payment methods. All payments are cashless and secure."
              }
            ].map((faq, index) => (
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
    </motion.div>
  );
};

export default RentaurasXPage;