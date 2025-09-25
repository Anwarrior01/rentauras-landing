import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { Heart, X } from "lucide-react";
import {
  staggerContainer,
  staggerItems,
  cardHover,
  textReveal,
  fadeInUp,
} from "../../utils/animations";

const RentaurasXWhyChooseSection = ({ setCurrentPage }) => {
  const whyRef = useRef(null);
  const whyInView = useInView(whyRef, { once: true, amount: 0.2 });
  const [showWomenModal, setShowWomenModal] = useState(false);

  const features = [
    {
      image: "assets/rentaurasx/why_rentauras/Women's-EqualityDay-cuate.svg",
      title: "Women to Women Service",
      description:
        "Exclusive service where female passengers are driven by female drivers.",
      bgColor: "#fdf2f8",
      isSpecial: true,
    },
    {
      image: "assets/rentaurasx/why_rentauras/Electric-car-cuate.svg",
      title: "Eco-Friendly Rides",
      description:
        "Electric and hybrid vehicles for sustainable transportation.",
      bgColor: "#f0fdf4",
    },
    {
      image: "assets/rentaurasx/why_rentauras/driving-cuate.svg",
      title: "Professional Drivers",
      description: "All our drivers are verified professionals, not strangers.",
      bgColor: "#fef3c7",
    },
    {
      image: "assets/rentaurasx/why_rentauras/Directions-cuate.svg",
      title: "Real-time Tracking",
      description: "Track your ride in real-time for complete peace of mind.",
      bgColor: "#dbeafe",
    },
    {
      image: "assets/rentaurasx/why_rentauras/Credit-card-cuate.svg",
      title: "Fair & Transparent Pricing",
      description: "No surge pricing, no hidden fees. Fair rates for everyone.",
      bgColor: "#f3e8ff",
    },
  ];

  const openWomenModal = () => {
    setShowWomenModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeWomenModal = () => {
    setShowWomenModal(false);
    document.body.style.overflow = "unset";
  };

  const handleDownloadRedirect = () => {
    closeWomenModal();
    if (setCurrentPage) {
      setCurrentPage("download");
    }
  };

  return (
    <>
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
            {features.slice(0, 3).map((feature, index) => (
              <motion.div
                key={index}
                className={`rounded-xl p-8 transform transition-all duration-300 relative overflow-hidden ${
                  feature.isSpecial
                    ? "border-2 border-pink-200 shadow-lg cursor-pointer"
                    : ""
                }`}
                style={{ backgroundColor: feature.bgColor }}
                variants={staggerItems}
                onClick={feature.isSpecial ? openWomenModal : undefined}
                whileHover={{
                  ...cardHover,
                  rotate: 0,
                  scale: feature.isSpecial ? 1.08 : 1.05,
                  boxShadow: feature.isSpecial
                    ? "0 25px 50px rgba(236, 72, 153, 0.25)"
                    : "0 25px 50px rgba(0, 0, 0, 0.15)",
                  borderColor: feature.isSpecial ? "#f9a8d4" : undefined,
                }}
                animate={{
                  rotate: index % 2 === 0 ? [1, -1, 1] : [-1, 1, -1],
                  boxShadow: feature.isSpecial
                    ? [
                        "0 10px 30px rgba(236, 72, 153, 0.1)",
                        "0 15px 40px rgba(236, 72, 153, 0.2)",
                        "0 10px 30px rgba(236, 72, 153, 0.1)",
                      ]
                    : undefined,
                }}
                transition={{
                  rotate: {
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: index * 0.5,
                  },
                  boxShadow: feature.isSpecial
                    ? {
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }
                    : undefined,
                }}
              >
                {/* Click Me indicator for special card */}
                {feature.isSpecial && (
                  <motion.div
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white text-xs px-3 py-1 rounded-full opacity-0 pointer-events-none"
                    whileHover={{ opacity: 1, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Click me
                  </motion.div>
                )}

                {/* Special female icon for women service */}
                {feature.isSpecial && (
                  <motion.div
                    className="absolute top-4 right-4 w-8 h-8 text-pink-500"
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
                    ♀
                  </motion.div>
                )}

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
                  {feature.isSpecial && (
                    <motion.span
                      className="ml-2 inline-block"
                      animate={{
                        rotate: [0, 15, -15, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      🌸
                    </motion.span>
                  )}
                </motion.h3>

                <motion.p
                  className="text-gray-600 text-center"
                  variants={fadeInUp}
                >
                  {feature.description}
                </motion.p>

                {/* Floating hearts for special card */}
                {feature.isSpecial && (
                  <>
                    <motion.div
                      className="absolute bottom-4 left-4 w-4 h-4 text-pink-300"
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      💖
                    </motion.div>
                    <motion.div
                      className="absolute top-16 left-8 w-3 h-3 text-pink-400"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.4, 0.8, 0.4],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 0.5,
                      }}
                    >
                      🌸
                    </motion.div>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Second Row - 2 cards stretched to full width */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {features.slice(3).map((feature, index) => (
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

      {/* Women to Women Modal */}
      <AnimatePresence>
        {showWomenModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={closeWomenModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Content */}
            <motion.div
              className="relative max-w-2xl w-full bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 shadow-2xl border border-pink-200"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button - Fixed */}
              <motion.button
                onClick={closeWomenModal}
                className="absolute top-6 right-6 p-2 rounded-xl hover:bg-pink-100 transition-colors duration-300 z-10"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6 text-gray-600" />
              </motion.button>

              {/* Floating feminine elements */}
              <motion.div
                className="absolute top-4 left-4 text-2xl"
                animate={{
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                🌸
              </motion.div>

              <motion.div
                className="absolute top-8 right-20 text-xl"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5,
                }}
              >
                💖
              </motion.div>

              <motion.div
                className="absolute bottom-8 left-12 text-lg"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1,
                }}
              >
                🌸
              </motion.div>

              {/* Modal Header */}
              <motion.div
                className="text-center mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <motion.div
                  className="flex justify-center mb-4"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl text-pink-500">♀</span>
                  </div>
                </motion.div>

                <motion.h3 className="text-3xl font-bold text-gray-800 mb-2">
                  Women to Women Service
                </motion.h3>
                <motion.p className="text-pink-600 font-medium">
                  Safety, Comfort & Trust - First in Morocco
                </motion.p>
              </motion.div>

              {/* Modal Body */}
              <motion.div
                className="mb-8 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <p className="text-gray-700 leading-relaxed text-center">
                  Experience the ultimate in safe and comfortable transportation
                  designed specifically for women. Our female drivers provide a
                  secure environment where women passengers can travel with
                  complete peace of mind.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-pink-50 p-4 rounded-lg border border-pink-100">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      For Female Passengers
                    </h4>
                    <p className="text-sm text-gray-600">
                      Book rides with verified professional female drivers who
                      understand your safety concerns and comfort needs.
                    </p>
                  </div>

                  <div className="bg-pink-50 p-4 rounded-lg border border-pink-100">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      For Female Drivers
                    </h4>
                    <p className="text-sm text-gray-600">
                      Join our community of professional female drivers and
                      provide safe transportation while earning flexible income.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Action Buttons - Unified color and download redirect */}
              <motion.div
                className="flex space-x-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <motion.button
                  onClick={handleDownloadRedirect}
                  className="flex-1 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(236, 72, 153, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Join as Female Passenger
                </motion.button>

                <motion.button
                  onClick={handleDownloadRedirect}
                  className="flex-1 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(236, 72, 153, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Join as Female Driver
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RentaurasXWhyChooseSection;
