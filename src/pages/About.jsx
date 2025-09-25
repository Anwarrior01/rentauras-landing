import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Users, MapPin, Zap, Shield, Award } from "lucide-react";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItems,
  imageReveal,
  textReveal,
  buttonHover,
  buttonTap,
  cardHover,
} from "../utils/animations";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const heroRef = useRef(null);
  const visionRef = useRef(null);
  const servicesRef = useRef(null);
  const impactRef = useRef(null);
  const valuesRef = useRef(null);
  const futureRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const visionInView = useInView(visionRef, { once: true, amount: 0.3 });
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 });
  const impactInView = useInView(impactRef, { once: true, amount: 0.3 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.2 });
  const futureInView = useInView(futureRef, { once: true, amount: 0.3 });
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-blue-50 to-green-50"
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
      >
        {/* Background animated elements */}
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="text-center lg:text-left"
              variants={staggerContainer}
            >
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight"
                variants={textReveal}
              >
                Revolutionizing{" "}
                <motion.span
                  className="bg-[#0BB0CD] text-white px-4 py-2 rounded-xl"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 6px 20px rgba(11, 176, 205, 0.4)",
                  }}
                >
                  Transportation
                </motion.span>{" "}
                in Morocco
              </motion.h1>

              <motion.p
                className="text-lg text-gray-600 mb-8 max-w-2xl"
                variants={fadeInLeft}
              >
                RENTAURAS Technology is pioneering the future of mobility in
                Morocco, connecting communities through innovative car rental
                and ride-hailing solutions.
              </motion.p>

              <motion.button
                onClick={() => handleNavigation("/download")}
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
                <span className="relative z-10"> Join Our Journey</span>
              </motion.button>
            </motion.div>

            {/* Right Image */}
            <motion.div className="relative" variants={imageReveal}>
              <motion.img
                src="assets/about-us-for-Rentauras.svg"
                alt="About Rentauras"
                className="w-full h-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Vision Section */}
      <motion.section
        ref={visionRef}
        className="py-20 bg-white"
        initial="hidden"
        animate={visionInView ? "visible" : "hidden"}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInLeft}>
              <motion.img
                src="assets/Teamwork-cuate.svg"
                alt="Our Vision"
                className="w-full h-auto"
                whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>

            <motion.div variants={staggerContainer}>
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-black mb-6"
                variants={textReveal}
              >
                Our Vision for Morocco's Future
              </motion.h2>

              <motion.p
                className="text-lg text-gray-600 mb-6 leading-relaxed"
                variants={fadeInUp}
              >
                Since our founding, RENTAURAS has been committed to transforming
                how Morocco moves. We envision a connected nation where
                transportation is accessible, sustainable, and secure for
                everyone.
              </motion.p>

              <motion.p
                className="text-lg text-gray-600 leading-relaxed"
                variants={fadeInUp}
              >
                Our mission extends beyond just providing rides - we're building
                the infrastructure for Morocco's digital transformation in
                mobility, creating jobs, and fostering economic growth across
                all regions.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Services Overview */}
      <motion.section
        ref={servicesRef}
        className="py-20 bg-gray-50"
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={staggerContainer}>
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-black mb-6"
              variants={textReveal}
            >
              Two Platforms, One Vision
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              RENTAURAS Technology operates through two innovative platforms,
              each designed to serve different mobility needs across Morocco.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Marketplace Card */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
              variants={staggerItems}
              whileHover={cardHover}
            >
              <motion.div
                className="absolute -top-8 -right-8 w-32 h-32 bg-purple-100/30 rounded-full"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: {
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
              />

              <motion.img
                src="assets/Rentauras-Logo.png"
                alt="Rentauras Marketplace"
                className="h-16 object-contain mb-6"
                whileHover={{ scale: 1.05 }}
              />

              <motion.img
                src="assets/Car-rental-cuate.svg"
                alt="Car Rental"
                className="w-full h-48 object-contain mb-6"
                whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
                transition={{ duration: 0.8 }}
              />

              <motion.h3
                className="text-2xl font-bold text-black mb-4"
                variants={textReveal}
              >
                Rentauras Marketplace
              </motion.h3>

              <motion.p className="text-gray-600 mb-6" variants={fadeInUp}>
                Peer-to-peer car rental platform connecting car owners with
                renters. Empowering individuals to monetize their vehicles while
                providing affordable access to transportation across Morocco.
              </motion.p>

              <motion.button
                onClick={() => handleNavigation("/marketplace") }
                className="text-[#0BB0CD] hover:text-[#0BB0CD]/80 font-medium transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                Learn More →
              </motion.button>
            </motion.div>

            {/* RentaurasX Card */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
              variants={staggerItems}
              whileHover={cardHover}
            >
              <motion.div
                className="absolute -top-8 -right-8 w-32 h-32 bg-cyan-100/30 rounded-full"
                animate={{
                  rotate: [0, -360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  scale: {
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
              />

              <motion.img
                src="assets/RentaurasX-Logo.png"
                alt="RentaurasX"
                className="h-16 object-contain mb-6"
                whileHover={{ scale: 1.05 }}
              />

              <motion.img
                src="assets/Directions-cuate.svg"
                alt="Ride Hailing"
                className="w-full h-48 object-contain mb-6"
                whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                transition={{ duration: 0.8 }}
              />

              <motion.h3
                className="text-2xl font-bold text-black mb-4"
                variants={textReveal}
              >
                RentaurasX
              </motion.h3>

              <motion.p className="text-gray-600 mb-6" variants={fadeInUp}>
                Eco-friendly ride-hailing service featuring women-to-women
                rides, electric vehicles, and professional drivers. Leading
                Morocco's transition to sustainable urban mobility.
              </motion.p>

              <motion.button
                onClick={() => handleNavigation("/rentaurasx")}
                className="text-[#0BB0CD] hover:text-[#0BB0CD]/80 font-medium transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                Discover More →
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Impact Section */}
      <motion.section
        ref={impactRef}
        className="py-20 bg-white"
        initial="hidden"
        animate={impactInView ? "visible" : "hidden"}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={staggerContainer}>
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-black mb-6"
              variants={textReveal}
            >
              Our Impact on Morocco
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12 text-[#0BB0CD]" />,
                title: "Community Building",
                description:
                  "Connecting thousands of Moroccans, creating trust-based networks that strengthen local communities.",
                image: "assets/Back-to-back-cuate.svg",
              },
              {
                icon: <Zap className="w-12 h-12 text-[#0BB0CD]" />,
                title: "Economic Growth",
                description:
                  "Generating income opportunities for drivers and car owners while supporting Morocco's digital economy.",
                image: "assets/Business-deal-cuate.svg",
              },
              {
                icon: <Shield className="w-12 h-12 text-[#0BB0CD]" />,
                title: "Safety Innovation",
                description:
                  "Pioneering women-to-women services and implementing advanced safety features for all users.",
                image: "assets/By-my-car-cuate.svg",
              },
            ].map((impact, index) => (
              <motion.div
                key={index}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100"
                variants={staggerItems}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                  scale: 1.02,
                }}
              >
                <motion.div
                  className="mb-6"
                  whileHover={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.img
                    src={impact.image}
                    alt={impact.title}
                    className="w-64 h-64 mx-auto object-contain mb-4"
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: index * 0.5,
                    }}
                  />
                  {impact.icon}
                </motion.div>

                <motion.h3
                  className="text-xl font-bold text-black mb-4"
                  variants={textReveal}
                >
                  {impact.title}
                </motion.h3>

                <motion.p className="text-gray-600" variants={fadeInUp}>
                  {impact.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        ref={valuesRef}
        className="py-20 bg-gray-50"
        initial="hidden"
        animate={valuesInView ? "visible" : "hidden"}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={staggerContainer}>
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-black mb-6"
              variants={textReveal}
            >
              Built on Strong Values
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Innovation",
                description:
                  "Continuously pushing boundaries to create better transportation solutions.",
                color: "#8b5cf6",
              },
              {
                title: "Trust",
                description:
                  "Building secure, transparent relationships between all users in our ecosystem.",
                color: "#10b981",
              },
              {
                title: "Sustainability",
                description:
                  "Promoting eco-friendly practices and electric vehicles for a greener Morocco.",
                color: "#0BB0CD",
              },
              {
                title: "Inclusivity",
                description:
                  "Ensuring transportation access for everyone, including women-only services.",
                color: "#f59e0b",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 text-center transform rotate-1 hover:rotate-0 transition-transform duration-300"
                style={{ backgroundColor: `${value.color}10` }}
                variants={staggerItems}
                whileHover={{
                  scale: 1.05,
                  rotate: 0,
                  boxShadow: `0 20px 40px ${value.color}20`,
                }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold"
                  style={{ backgroundColor: value.color }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.5,
                  }}
                >
                  {value.title.charAt(0)}
                </motion.div>

                <motion.h3
                  className="text-lg font-bold text-black mb-3"
                  variants={textReveal}
                >
                  {value.title}
                </motion.h3>

                <motion.p className="text-gray-600 text-sm" variants={fadeInUp}>
                  {value.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Future Vision Section */}
      <motion.section
        ref={futureRef}
        className="py-20 bg-black text-white"
        initial="hidden"
        animate={futureInView ? "visible" : "hidden"}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={staggerContainer}>
            <motion.h2
              className="text-3xl sm:text-4xl font-bold mb-8"
              variants={textReveal}
            >
              Shaping Morocco's Transportation Future
            </motion.h2>

            <motion.p
              className="text-xl mb-8 max-w-4xl mx-auto opacity-90"
              variants={fadeInUp}
            >
              As we continue to grow, RENTAURAS remains committed to innovation,
              safety, and sustainability. We're not just building a
              transportation company – we're creating the foundation for
              Morocco's smart mobility ecosystem.
            </motion.p>

            <motion.button
              onClick={() => handleNavigation("/contact")}
              className="bg-[#0BB0CD] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#0BB0CD]/90 transition-colors duration-300"
              variants={fadeInUp}
              whileHover={buttonHover}
              whileTap={buttonTap}
            >
              Join Our Mission
            </motion.button>
            

          
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
