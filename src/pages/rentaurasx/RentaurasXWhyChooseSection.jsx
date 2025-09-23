import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {
  staggerContainer,
  staggerItems,
  cardHover,
  textReveal,
  fadeInUp,
} from "../../utils/animations";

const RentaurasXWhyChooseSection = () => {
  const whyRef = useRef(null);
  const whyInView = useInView(whyRef, { once: true, amount: 0.2 });

  const features = [
    {
      image:
        "assets/rentaurasx/why_rentauras/Women's-EqualityDay-cuate.svg",
      title: "Women to Women Service",
      description:
        "Exclusive service where female passengers are driven by female drivers.",
      bgColor: "#f8fafc",
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

  return (
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
  );
};

export default RentaurasXWhyChooseSection;
