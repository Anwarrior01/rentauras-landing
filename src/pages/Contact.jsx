import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle, Globe, Users } from 'lucide-react';
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
                Get in Touch with{' '}
                <motion.span
                  className="bg-[#0BB0CD] text-white px-4 py-2 rounded-xl"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 6px 20px rgba(11, 176, 205, 0.4)",
                  }}
                >
                  RENTAURAS
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-lg text-gray-600 mb-8 max-w-2xl"
                variants={fadeInLeft}
              >
                Have questions about our services? Want to partner with us? 
                Or need support? We're here to help and would love to hear from you.
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
                                <span className="relative z-10"> Download App</span>
                              </motion.button>
                
                <motion.button
                  className="border-2 border-[#0BB0CD] text-[#0BB0CD] px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#0BB0CD] hover:text-white transition-colors duration-300"
                  variants={staggerItems}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Call Us Now
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
                Send us a Message
              </motion.h2>

              {!isSubmitted ? (
                <motion.form 
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  variants={staggerContainer}
                >
                  <motion.div variants={staggerItems}>
                    <label className="block text-gray-700 font-medium mb-2">
                      Full Name
                    </label>
                    <motion.input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0BB0CD] focus:border-transparent transition-colors duration-300"
                      placeholder="Enter your full name"
                      required
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>

                  <motion.div variants={staggerItems}>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email Address
                    </label>
                    <motion.input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0BB0CD] focus:border-transparent transition-colors duration-300"
                      placeholder="Enter your email address"
                      required
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>

                  <motion.div variants={staggerItems}>
                    <label className="block text-gray-700 font-medium mb-2">
                      Subject
                    </label>
                    <motion.select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0BB0CD] focus:border-transparent transition-colors duration-300"
                      required
                      whileFocus={{ scale: 1.02 }}
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Customer Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="driver">Become a Driver</option>
                      <option value="host">Become a Host</option>
                      <option value="feedback">Feedback</option>
                    </motion.select>
                  </motion.div>

                  <motion.div variants={staggerItems}>
                    <label className="block text-gray-700 font-medium mb-2">
                      Message
                    </label>
                    <motion.textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0BB0CD] focus:border-transparent transition-colors duration-300 resize-none"
                      placeholder="Tell us how we can help you..."
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
                    <span>Send Message</span>
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
                  <h3 className="text-2xl font-bold text-black mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for reaching out. We'll get back to you within 24 hours.</p>
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
                  Contact Information
                </motion.h3>

                <div className="space-y-6">
                  {[
                    {
                      icon: <Phone className="w-6 h-6 text-[#0BB0CD]" />,
                      title: "Phone",
                      info: "+212 5XX-XXXXX",
                      description: "Call us Monday to Friday, 9AM - 6PM"
                    },
                    {
                      icon: <Mail className="w-6 h-6 text-[#0BB0CD]" />,
                      title: "Email",
                      info: "contact@rentauras.com",
                      description: "Send us your query anytime!"
                    },
                    {
                      icon: <MapPin className="w-6 h-6 text-[#0BB0CD]" />,
                      title: "Office",
                      info: "Casablanca, Morocco",
                      description: "Our headquarters in the economic capital"
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
                  Quick Actions
                </motion.h4>
                <div className="space-y-3">
                  {[
                    { name: "Download Rentauras App", action: () => setCurrentPage('download') },
                    { name: "Learn About Our Services", action: () => setCurrentPage('about') },
                    { name: "Rent a Car", action: () => setCurrentPage('marketplace') },
                    { name: "Book a Ride", action: () => setCurrentPage('rentaurasX') }
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

      {/* Support Section */}
      {/* <motion.section
        ref={supportRef}
        className="py-20 bg-white"
        initial="hidden"
        animate={supportInView ? "visible" : "hidden"}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={staggerContainer}>
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-black mb-6"
              variants={textReveal}
            >
              Need Immediate Help?
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Choose the support option that works best for you
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageCircle className="w-12 h-12 text-[#0BB0CD]" />,
                title: "Live Chat",
                description: "Chat with our support team in real-time",
                action: "Start Chat",
                bgColor: "#f0f9ff"
              },
              {
                icon: <Phone className="w-12 h-12 text-[#0BB0CD]" />,
                title: "Call Support",
                description: "Speak directly with our support agents",
                action: "Call Now",
                bgColor: "#f0fdf4"
              },
              {
                icon: <Globe className="w-12 h-12 text-[#0BB0CD]" />,
                title: "Help Center",
                description: "Browse our comprehensive FAQ section",
                action: "View FAQ",
                bgColor: "#fef3c7"
              }
            ].map((support, index) => (
              <motion.div
                key={index}
                className="text-center p-8 rounded-3xl border border-gray-100 hover:border-[#0BB0CD]/30 transition-all duration-300"
                style={{ backgroundColor: support.bgColor }}
                variants={staggerItems}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(11, 176, 205, 0.1)"
                }}
              >
                <motion.div
                  className="mb-6"
                  whileHover={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.6 }}
                >
                  {support.icon}
                </motion.div>
                
                <motion.h3
                  className="text-xl font-bold text-black mb-4"
                  variants={textReveal}
                >
                  {support.title}
                </motion.h3>
                
                <motion.p
                  className="text-gray-600 mb-6"
                  variants={fadeInUp}
                >
                  {support.description}
                </motion.p>

                <motion.button
                  className="bg-[#0BB0CD] text-white px-6 py-3 rounded-full font-medium hover:bg-[#0BB0CD]/90 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {support.action}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section> */}

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
            Ready to Get Started?
          </motion.h2>
          
          <motion.p
            className="text-xl mb-8 opacity-90"
            variants={fadeInUp}
          >
            Join thousands of satisfied users across Morocco
          </motion.p>

          <motion.button
            onClick={() => setCurrentPage('download')}
            className="bg-[#0BB0CD] text-white px-6 py-2 rounded-lg text-sm  font-medium hover:bg-[#0BB0CD]/90 transition-colors duration-300"
            variants={fadeInUp}
            whileHover={buttonHover}
            whileTap={buttonTap}
          >
            Download RENTAURAS App
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactPage;