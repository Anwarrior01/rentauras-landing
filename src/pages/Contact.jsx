import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
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
  cardHover
} from '../utils/animations';

const ContactPage = ({ setCurrentPage }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const heroRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const supportRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const formInView = useInView(formRef, { once: true, amount: 0.2 });
  const infoInView = useInView(infoRef, { once: true, amount: 0.3 });
  const supportInView = useInView(supportRef, { once: true, amount: 0.3 });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
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
          className="absolute bottom-32 right-32 w-16 h-16 bg-purple-200/40 rounded-full"
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
                {t.heroTitlePart1}{' '}
                <motion.span
                  className="bg-[#0BB0CD] text-white px-4 py-2 rounded-xl"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 6px 20px rgba(11, 176, 205, 0.4)",
                  }}
                >
                  {t.heroTitleHighlighted}
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-lg text-gray-600 mb-8 max-w-2xl"
                variants={fadeInLeft}
              >
                {t.heroDescription}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={staggerContainer}
              >
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
                                <span className="relative z-10">{t.heroBtnDownloadApp}</span>
                              </motion.button>
                
                <motion.button
                  className="border-2 border-[#0BB0CD] text-[#0BB0CD] px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#0BB0CD] hover:text-white transition-colors duration-300"
                  variants={staggerItems}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t.heroBtnCallUs}
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div className="relative" variants={imageReveal}>
              <motion.img
                src="assets/Contact us-cuate.svg"
                alt="Contact Us"
                className="w-full h-auto"
                whileHover={{ scale: 1.02, rotate: [0, 1, -1, 0] }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Main Contact Section */}
      <motion.section
        ref={formRef}
        className="py-20 bg-gray-50"
        initial="hidden"
        animate={formInView ? "visible" : "hidden"}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Form */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl relative overflow-hidden"
              variants={fadeInLeft}
              whileHover={{ boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)" }}
            >
              <motion.div
                className="absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br from-[#0BB0CD]/5 to-transparent rounded-full"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, repeatType: "reverse" }
                }}
              />

              <motion.h2
                className="text-3xl font-bold text-black mb-8"
                variants={textReveal}
              >
                {t.formTitle}
              </motion.h2>

              {!isSubmitted ? (
                <motion.form 
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  variants={staggerContainer}
                >
                  <motion.div variants={staggerItems}>
                    <label className="block text-gray-700 font-medium mb-2">
                      {t.formNameLabel}
                    </label>
                    <motion.input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0BB0CD] focus:border-transparent transition-colors duration-300"
                      placeholder={t.formNamePlaceholder}
                      required
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>

                  <motion.div variants={staggerItems}>
                    <label className="block text-gray-700 font-medium mb-2">
                      {t.formEmailLabel}
                    </label>
                    <motion.input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0BB0CD] focus:border-transparent transition-colors duration-300"
                      placeholder={t.formEmailPlaceholder}
                      required
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>

                  <motion.div variants={staggerItems}>
                    <label className="block text-gray-700 font-medium mb-2">
                      {t.formSubjectLabel}
                    </label>
                    <motion.select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0BB0CD] focus:border-transparent transition-colors duration-300"
                      required
                      whileFocus={{ scale: 1.02 }}
                    >
                      <option value="">{t.formSubjectPlaceholder}</option>
                      <option value="general">{t.formSubjectOptionGeneral}</option>
                      <option value="support">{t.formSubjectOptionSupport}</option>
                      <option value="partnership">{t.formSubjectOptionPartnership}</option>
                      <option value="driver">{t.formSubjectOptionDriver}</option>
                      <option value="host">{t.formSubjectOptionHost}</option>
                      <option value="feedback">{t.formSubjectOptionFeedback}</option>
                    </motion.select>
                  </motion.div>

                  <motion.div variants={staggerItems}>
                    <label className="block text-gray-700 font-medium mb-2">
                      {t.formMessageLabel}
                    </label>
                    <motion.textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0BB0CD] focus:border-transparent transition-colors duration-300 resize-none"
                      placeholder={t.formMessagePlaceholder}
                      required
                      whileFocus={{ scale: 1.01 }}
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    className="w-full bg-[#0BB0CD] text-white py-4 px-6 rounded-xl font-medium hover:bg-[#0BB0CD]/90 transition-colors duration-300 flex items-center justify-center space-x-2"
                    variants={staggerItems}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="w-5 h-5" />
                    <span>{t.formSubmitBtn}</span>
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  className="text-center py-8"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-black mb-2">{t.submittedTitle}</h3>
                  <p className="text-gray-600">{t.submittedDescription}</p>
                </motion.div>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              variants={fadeInRight}
            >
              <motion.div variants={staggerContainer}>
                <motion.h3
                  className="text-3xl font-bold text-black mb-8"
                  variants={textReveal}
                >
                  {t.contactInfoTitle}
                </motion.h3>

                <div className="space-y-6">
                  {[
                    {
                      icon: <Phone className="w-6 h-6 text-[#0BB0CD]" />,
                      title: t.contactPhoneTitle,
                      info: "+212 5XX-XXXXX",
                      description: t.contactPhoneDescription
                    },
                    {
                      icon: <Mail className="w-6 h-6 text-[#0BB0CD]" />,
                      title: t.contactEmailTitle,
                      info: "contact@rentauras.com",
                      description: t.contactEmailDescription
                    },
                    {
                      icon: <MapPin className="w-6 h-6 text-[#0BB0CD]" />,
                      title: t.contactOfficeTitle,
                      info: "Casablanca, Morocco",
                      description: t.contactOfficeDescription
                    }
                  ].map((contact, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
                      variants={staggerItems}
                      whileHover={cardHover}
                    >
                      <motion.div
                        className="w-12 h-12 bg-[#0BB0CD]/10 rounded-full flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {contact.icon}
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-black text-lg">{contact.title}</h4>
                        <p className="text-[#0BB0CD] font-medium">{contact.info}</p>
                        <p className="text-gray-600 text-sm">{contact.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                className="bg-white rounded-3xl p-6 shadow-lg"
                variants={staggerItems}
                whileHover={{ boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
              >
                <motion.h4
                  className="text-xl font-bold text-black mb-4"
                  variants={textReveal}
                >
                  {t.quickActionsTitle}
                </motion.h4>
                <div className="space-y-3">
                  {[
                    { name: t.quickActionDownloadApp, action: () => setCurrentPage('download') },
                    { name: t.quickActionLearnServices, action: () => setCurrentPage('about') },
                    { name: t.quickActionRentCar, action: () => setCurrentPage('marketplace') },
                    { name: t.quickActionBookRide, action: () => setCurrentPage('rentaurasX') }
                  ].map((link, index) => (
                    <motion.button
                      key={index}
                      onClick={link.action}
                      className="text-left text-[#0BB0CD] hover:text-[#0BB0CD]/80 transition-colors duration-300 block w-full"
                      whileHover={{ x: 5 }}
                    >
                      {link.name} →
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section
        className="py-20 bg-black text-white"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-8"
            variants={textReveal}
          >
            {t.finalCtaTitle}
          </motion.h2>
          
          <motion.p
            className="text-xl mb-8 opacity-90"
            variants={fadeInUp}
          >
            {t.finalCtaDescription}
          </motion.p>

          <motion.button
            onClick={() => setCurrentPage('download')}
            className="bg-[#0BB0CD] text-white px-6 py-2 rounded-lg text-sm  font-medium hover:bg-[#0BB0CD]/90 transition-colors duration-300"
            variants={fadeInUp}
            whileHover={buttonHover}
            whileTap={buttonTap}
          >
            {t.finalCtaBtnDownload}
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactPage;