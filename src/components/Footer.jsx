import React from "react";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from "../context/LanguageContext";
import { MapPin, Mail, Phone } from "lucide-react";
import { 
  fadeInUp, 
  fadeInLeft, 
  fadeInRight,
  staggerContainer, 
  staggerItems,
  buttonHover,
  buttonTap
} from '../utils/animations';

const Footer = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      { name: t.rentACar, onClick: () => handleNavigation("/marketplace") },
      { name: t.rentaurasX, onClick: () => handleNavigation("/rentaurasx") },
      { name: "Safety", onClick: () => handleNavigation("/") },
      { name: "Support", onClick: () => handleNavigation("/contact") },
    ],
    company: [
      { name: t.aboutUs, onClick: () => handleNavigation("/about") },
      { name: t.contact, onClick: () => handleNavigation("/contact") },
      { name: "Blog", onClick: () => handleNavigation("/") },
      { name: "Careers", onClick: () => handleNavigation("/") },
    ],
    legal: [
      { name: "Terms of Service", onClick: () => handleNavigation("/") },
      { name: "Privacy Policy", onClick: () => handleNavigation("/") },
      { name: "Legal", onClick: () => handleNavigation("/") },
      { name: "Cookie Policy", onClick: () => handleNavigation("/") },
    ],
  };

  const AppleIcon = () => (
    <svg className="w-6 h-6 text-[#0BB0CD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );

  const GooglePlayIcon = () => (
    <svg className="w-6 h-6 text-[#0BB0CD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 20.5v-17c0-1.1.9-2 2-2 .4 0 .7.1 1 .3L19.6 12 6 22.7c-.3.2-.6.3-1 .3-1.1 0-2-.9-2-2zM6 22.7L19.6 12 6 1.3v21.4z"/>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m6 1.3 13.6 10.7-4.2 4.2L6 12V1.3z"/>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m6 12 9.4 4.2 4.2-4.2L6 22.7V12z"/>
    </svg>
  );

  const AppGalleryIcon = () => (
    <svg className="w-6 h-6 text-[#0BB0CD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  );

  return (
    <motion.footer 
      ref={ref}
      className="bg-black text-white py-16 relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
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
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
          variants={staggerContainer}
        >
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
                { Icon: AppleIcon, store: "App Store", text: "Download on the" },
                { Icon: GooglePlayIcon, store: "Google Play", text: "Get it on" },
                { Icon: AppGalleryIcon, store: "AppGallery", text: "Download on" }
              ].map((app, index) => (
                <motion.button
                  key={app.store}
                  onClick={() => handleNavigation("/download")}
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
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <app.Icon />
                  </motion.div>
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

        <motion.div 
          className="border-t border-gray-800 pt-8"
          variants={fadeInUp}
        >
          <motion.div 
            className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0"
            variants={staggerContainer}
          >
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