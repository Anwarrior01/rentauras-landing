import React from "react";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from "../context/LanguageContext";
import { Apple, Play, MapPin, Mail, Phone } from "lucide-react";
import { 
  fadeInUp, 
  fadeInLeft, 
  fadeInRight,
  staggerContainer, 
  staggerItems,
  buttonHover,
  buttonTap
} from '../utils/animations';

const Footer = ({ setCurrentPage }) => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const footerLinks = {
    services: [
      { name: t.rentACar, onClick: () => setCurrentPage("marketplace") },
      { name: t.rentaurasX, onClick: () => setCurrentPage("rentaurasX") },
      { name: "Safety", onClick: () => setCurrentPage("home") },
      { name: "Support", onClick: () => setCurrentPage("contact") },
    ],
    company: [
      { name: t.aboutUs, onClick: () => setCurrentPage("about") },
      { name: t.contact, onClick: () => setCurrentPage("contact") },
      { name: "Blog", onClick: () => setCurrentPage("home") },
      { name: "Careers", onClick: () => setCurrentPage("home") },
    ],
    legal: [
      { name: "Terms of Service", onClick: () => setCurrentPage("home") },
      { name: "Privacy Policy", onClick: () => setCurrentPage("home") },
      { name: "Legal", onClick: () => setCurrentPage("home") },
      { name: "Cookie Policy", onClick: () => setCurrentPage("home") },
    ],
  };

  return (
    <motion.footer 
      ref={ref}
      className="bg-black text-white py-16 relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 left-20 w-24 h-24 bg-[#0BB0CD]/5 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.15, 0.05],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute top-40 right-16 w-16 h-16 bg-white/3 rounded-full"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          opacity: [0.03, 0.08, 0.03]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <motion.div
        className="absolute bottom-20 left-1/3 w-8 h-8 bg-[#0BB0CD]/10 rounded-full"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.1, 0.3, 0.1],
          rotate: [0, 90, 180, 270, 360]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
          variants={staggerContainer}
        >
          {/* Company Info */}
          <motion.div 
            className="lg:col-span-1"
            variants={staggerItems}
          >
            <motion.h3 
              className="text-2xl font-bold mb-4 tracking-wider"
              whileHover={{
                color: "#0BB0CD",
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              animate={{
                textShadow: [
                  "0 0 0px rgba(11, 176, 205, 0)",
                  "0 0 10px rgba(11, 176, 205, 0.5)",
                  "0 0 0px rgba(11, 176, 205, 0)"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              RENTAURAS
            </motion.h3>
            
            <motion.p 
              className="text-gray-400 mb-6 leading-relaxed"
              variants={fadeInUp}
              animate={isInView ? {
                opacity: [0.7, 1, 0.7]
              } : {}}
              transition={{
                opacity: { duration: 3, repeat: Infinity, repeatType: "reverse" }
              }}
            >
              RENTAURAS is an online aggregator. We do not participate in
              cooperations between our users, they create and perform all
              requests in our app on their own.
            </motion.p>

            {/* Social Icons */}
            <motion.div 
              className="flex space-x-4"
              variants={staggerContainer}
            >
              {['f', 'x', 'in', 'y'].map((social, index) => (
                <motion.div
                  key={social}
                  className="border border-[#0BB0CD] text-[#0BB0CD] w-8 h-8 rounded-full hover:bg-[#0BB0CD] hover:text-white transition-colors duration-300 flex items-center justify-center cursor-pointer"
                  variants={staggerItems}
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    boxShadow: "0 4px 15px rgba(11, 176, 205, 0.4)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    borderColor: ["#0BB0CD", "#ffffff", "#0BB0CD"]
                  }}
                  transition={{
                    borderColor: { duration: 4, repeat: Infinity, repeatType: "reverse", delay: index * 0.5 }
                  }}
                >
                  {social}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Services */}
          <motion.div variants={staggerItems}>
            <motion.h4 
              className="text-lg font-semibold mb-6 text-[#0BB0CD]"
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 10px rgba(11, 176, 205, 0.8)"
              }}
            >
              Our Services
            </motion.h4>
            <motion.ul 
              className="space-y-3"
              variants={staggerContainer}
            >
              {footerLinks.services.map((link, index) => (
                <motion.li 
                  key={index}
                  variants={staggerItems}
                >
                  <motion.button
                    onClick={link.onClick}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-left"
                    whileHover={{
                      x: 5,
                      color: "#0BB0CD",
                      scale: 1.05
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                  </motion.button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={staggerItems}>
            <motion.h4 
              className="text-lg font-semibold mb-6 text-[#0BB0CD]"
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 10px rgba(11, 176, 205, 0.8)"
              }}
            >
              About
            </motion.h4>
            <motion.ul 
              className="space-y-3"
              variants={staggerContainer}
            >
              {footerLinks.company.map((link, index) => (
                <motion.li 
                  key={index}
                  variants={staggerItems}
                >
                  <motion.button
                    onClick={link.onClick}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-left"
                    whileHover={{
                      x: 5,
                      color: "#0BB0CD",
                      scale: 1.05
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                  </motion.button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Download App */}
          <motion.div variants={staggerItems}>
            <motion.h4 
              className="text-lg font-semibold mb-6 text-[#0BB0CD]"
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 10px rgba(11, 176, 205, 0.8)"
              }}
            >
              Download App
            </motion.h4>
            <motion.div 
              className="space-y-4"
              variants={staggerContainer}
            >
              {[
                { Icon: Apple, store: "App Store", text: "Download on the" },
                { Icon: Play, store: "Google Play", text: "Get it on" },
                { Icon: null, store: "AppGallery", text: "Download on" }
              ].map((app, index) => (
                <motion.button
                  key={app.store}
                  onClick={() => setCurrentPage("download")}
                  className="flex items-center space-x-3 bg-black hover:bg-gray-950 transition-colors duration-300 px-4 py-3 rounded-lg border border-[#0BB0CD] w-full"
                  variants={staggerItems}
                  whileHover={{
                    ...buttonHover,
                    borderColor: "#ffffff",
                    backgroundColor: "rgba(11, 176, 205, 0.1)"
                  }}
                  whileTap={buttonTap}
                  animate={{
                    borderColor: ["#0BB0CD", "rgba(11, 176, 205, 0.5)", "#0BB0CD"]
                  }}
                  transition={{
                    borderColor: { duration: 3, repeat: Infinity, repeatType: "reverse", delay: index * 0.5 }
                  }}
                >
                  {app.Icon ? (
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <app.Icon className="w-6 h-6 text-[#0BB0CD]" />
                    </motion.div>
                  ) : (
                    <motion.div 
                      className="w-6 h-6 border border-[#0BB0CD] rounded flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="text-[#0BB0CD] font-bold text-xs">A</span>
                    </motion.div>
                  )}
                  <div className="text-left">
                    <motion.div 
                      className="text-xs text-gray-400"
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: index * 0.3 }}
                    >
                      {app.text}
                    </motion.div>
                    <motion.div 
                      className="text-sm font-semibold"
                      whileHover={{ color: "#0BB0CD" }}
                    >
                      {app.store}
                    </motion.div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-800 pt-8"
          variants={fadeInUp}
        >
          <motion.div 
            className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0"
            variants={staggerContainer}
          >
            {/* Copyright */}
            <motion.div 
              className="text-gray-400 text-sm"
              variants={staggerItems}
              animate={{
                opacity: [0.4, 1, 0.4],
                color: ["#9CA3AF", "#0BB0CD", "#9CA3AF"]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              © 2025 RENTAURAS LTD, 2019-2025
            </motion.div>

            {/* Legal Links */}
            <motion.div 
              className="flex space-x-6"
              variants={staggerContainer}
            >
              {footerLinks.legal.map((link, index) => (
                <motion.button
                  key={index}
                  onClick={link.onClick}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  variants={staggerItems}
                  whileHover={{
                    y: -2,
                    color: "#0BB0CD",
                    scale: 1.05
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-8 right-8 w-2 h-2 bg-[#0BB0CD] rounded-full"
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
          className="absolute bottom-8 left-16 w-1 h-1 bg-white rounded-full"
          animate={{
            opacity: [0.3, 1, 0.3],
            y: [0, -10, 0],
            x: [0, 5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </div>
    </motion.footer>
  );
};

export default Footer;