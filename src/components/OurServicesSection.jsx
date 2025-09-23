import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronRight, X } from 'lucide-react';
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
  modalBackdrop,
  modalContent
} from '../utils/animations';

const OurServicesSection = ({ setCurrentPage }) => {
  const { t } = useLanguage();
  const [selectedModal, setSelectedModal] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      id: 'rental',
      title: t.rentalServiceTitle,
      description: t.rentalServiceDesc,
      image: '/src/assets/Car-rental-cuate.svg',
      page: 'marketplace',
      buttons: [
        {
          id: 'renters',
          label: 'Renters',
          title: 'Join Rentauras as a Renter',
          content: 'As a renter on Rentauras, you can access thousands of premium vehicles from verified hosts. Requirements include: valid driver\'s license (minimum 2 years experience), identity verification with selfie and ID card, secure payment method, and meeting age requirements (21+). Enjoy instant booking, comprehensive insurance coverage, 24/7 support, and transparent pricing with no hidden fees.',
          action: 'Join Rentauras as a Renter'
        },
        {
          id: 'companies',
          label: 'Companies',
          title: 'Join Rentauras as a Company',
          content: 'Partner with Rentauras to expand your car rental business. We provide digital tools to manage your fleet, reach more customers, and increase revenue. Requirements include: valid business license, vehicle documentation and insurance, professional service standards, and commitment to customer satisfaction. Benefit from our marketing platform, booking management system, and dedicated business support.',
          action: 'Join Rentauras as a Company'
        }
      ]
    },
    {
      id: 'rides',
      title: t.rideServiceTitle,
      description: t.rideServiceDesc,
      image: '/src/assets/Directions-cuate.svg',
      page: 'rentaurasX',
      buttons: [
        {
          id: 'drivers',
          label: 'Drivers',
          title: 'Join RentaurasX as a Driver',
          content: 'Drive with RentaurasX and earn with flexible hours. We prioritize eco-friendly vehicles and professional service. Requirements include: valid driver\'s license (minimum 3 years experience), background check clearance, vehicle inspection and insurance, professional training completion. Enjoy competitive earnings, flexible schedule, fuel efficiency bonuses for electric/hybrid vehicles, and comprehensive driver support.',
          action: 'Join RentaurasX as a Driver'
        },
        {
          id: 'passengers',
          label: 'Passengers',
          title: 'Ride with RentaurasX',
          content: 'Experience safe, reliable, and eco-friendly rides with RentaurasX. Features include: verified professional drivers (not strangers), real-time ride tracking, cashless secure payments, women-to-women service option, electric and hybrid vehicles, transparent pricing with no surge fees. Download the app to book your first ride and join thousands of satisfied passengers.',
          action: 'Join RentaurasX as a Passenger'
        }
      ]
    }
  ];

  const openModal = (serviceId, buttonId) => {
    const service = services.find(s => s.id === serviceId);
    const button = service?.buttons.find(b => b.id === buttonId);
    if (button) {
      setSelectedModal({ ...button, serviceId });
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setSelectedModal(null);
    document.body.style.overflow = 'unset';
  };

  const handleJoinAction = () => {
    closeModal();
    setCurrentPage('download');
  };

  return (
    <>
      <motion.section 
        ref={ref}
        className="py-20 bg-gray-50"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <motion.div 
            className="text-center mb-4"
            variants={staggerContainer}
          >
            <motion.p 
              className="text-sm uppercase tracking-wider text-gray-500 mb-4"
              variants={fadeInUp}
            >
              {t.servicesSubtitle}
            </motion.p>
            
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-black mb-6"
              variants={textReveal}
            >
              {t.servicesTitle1}{' '}
              <motion.span 
                className="bg-[#0BB0CD] text-white px-2 py-1 rounded"
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 4px 20px rgba(11, 176, 205, 0.4)",
                  transition: { duration: 0.2 }
                }}
              >
                {t.servicesHighlight}
              </motion.span>
            </motion.h2>
            
            <motion.div 
              className="flex justify-end"
              variants={fadeInRight}
            >
              <motion.a 
                href="#" 
                className="text-black hover:text-[#0BB0CD] transition-colors duration-300 flex items-center"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                {t.seeMore} 
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ChevronRight className="w-4 h-4 ml-1" />
                </motion.div>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div 
                key={service.id} 
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 relative overflow-hidden"
                variants={staggerItems}
                whileHover={cardHover}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                {/* Background decorative elements */}
                <motion.div
                  className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#0BB0CD]/5 to-transparent rounded-xl"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, repeatType: "reverse" }
                  }}
                />

                {/* Service Image */}
                <motion.div 
                  className="mb-6"
                  variants={imageReveal}
                >
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-contain"
                    whileHover={{
                      scale: 1.05,
                      rotate: [0, 2, -2, 0],
                      transition: { 
                        scale: { duration: 0.3 },
                        rotate: { duration: 0.8 }
                      }
                    }}
                  />
                </motion.div>
                
                {/* Service Content */}
                <motion.h3 
                  className="text-2xl font-bold text-black mb-4"
                  variants={textReveal}
                >
                  {service.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 mb-6 leading-relaxed"
                  variants={fadeInUp}
                >
                  {service.description}
                </motion.p>

                {/* Service Buttons */}
                <motion.div 
                  className="flex space-x-4"
                  variants={staggerContainer}
                >
                  {service.buttons.map((button, buttonIndex) => (
                    <motion.button
                      key={button.id}
                      onClick={() => openModal(service.id, button.id)}
                      className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300 flex-1 relative overflow-hidden"
                      variants={staggerItems}
                      whileHover={buttonHover}
                      whileTap={buttonTap}
                    >
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-[#0BB0CD] to-blue-600 opacity-0"
                        whileHover={{ opacity: 0.1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="relative z-10">{button.label}</span>
                    </motion.button>
                  ))}
                </motion.div>

                {/* Floating particles specific to each service */}
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 bg-[#0BB0CD]/20 rounded-xl"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.6, 0.2]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: index * 0.5
                  }}
                />
                
                <motion.div
                  className="absolute bottom-6 left-4 w-2 h-2 bg-blue-300 rounded-xl"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1 + index * 0.3
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Animated Modal */}
      <AnimatePresence>
        {selectedModal && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            variants={modalBackdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={closeModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            {/* Modal Content */}
            <motion.div 
              className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-xl p-8"
              variants={modalContent}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Close Button */}
              <motion.button
                onClick={closeModal}
                className="absolute top-6 right-6 p-2 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6 text-gray-600" />
              </motion.button>

              {/* Modal Header */}
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <motion.h3 
                  className="text-3xl font-bold text-black mb-4 pr-12"
                  animate={{
                    backgroundPosition: ["0%", "100%", "0%"]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {selectedModal.title}
                </motion.h3>
              </motion.div>

              {/* Modal Body */}
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <p className="text-gray-600 leading-relaxed text-lg">
                  {selectedModal.content}
                </p>
              </motion.div>

              {/* Action Button */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <motion.button
                  onClick={handleJoinAction}
                  className="bg-gradient-to-r from-[#0BB0CD] to-blue-500 hover:from-[#0BB0CD]/90 hover:to-blue-500/90 text-white font-medium py-4 px-8 rounded-xl transition-all duration-300 text-lg relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(11, 176, 205, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">{selectedModal.action}</span>
                </motion.button>
              </motion.div>

              {/* Decorative elements in modal */}
              <motion.div
                className="absolute top-20 right-12 w-4 h-4 bg-[#0BB0CD]/20 rounded-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              <motion.div
                className="absolute bottom-24 left-12 w-3 h-3 bg-blue-200 rounded-xl"
                animate={{
                  y: [0, -8, 0],
                  x: [0, 4, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default OurServicesSection;