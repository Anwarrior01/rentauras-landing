import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const RentaurasXEVCollectionSection = () => {
  const { t } = useLanguage();

  const cars = [
    { image: 'TEsla.svg', description: t.premiumEVCar },
    { image: '4X4.svg', description: t.ev4x4Car },
    { image: 'Mercedes.svg', description: t.evVan },
    { image: 'audi.svg', description: t.premiumClassEVCar }
  ];

  return (
    <motion.section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8">
            {t.ourEVCollection}
          </h2>
        </div>
        
        {/* Simple Slider Container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-slide">
            {/* Cars */}
            {cars.map((car, index) => (
              <div 
                key={`car-${index}`} 
                className={`flex-shrink-0 mx-4 bg-white rounded-xl p-8 shadow-lg transform transition-transform duration-300 hover:scale-105 ${
                  index % 2 === 0 ? 'rotate-1 hover:rotate-0' : '-rotate-2 hover:rotate-3'
                } min-w-[300px] max-w-[500px]`}
              >
                <div className="flex justify-center rounded-xl mb-4">
                  <img 
                    src={`assets/rentaurasx/car_cards/${car.image}`} 
                    alt={car.description} 
                    className="w-full h-48 object-contain rounded-xl" 
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600 font-medium">{car.description}</p>
                </div>
              </div>
            ))}
            {/* Duplicate for infinite loop */}
            {cars.map((car, index) => (
              <div 
                key={`car-duplicate-${index}`} 
                className={`flex-shrink-0 mx-4 bg-white rounded-xl p-8 shadow-lg transform transition-transform duration-300 hover:scale-105 ${
                  index % 2 === 0 ? 'rotate-1 hover:rotate-0' : '-rotate-1 hover:rotate-0'
                } min-w-[300px] max-w-[300px]`}
              >
                <div className="flex justify-center rounded-xl mb-4">
                  <img 
                    src={`assets/rentaurasx/car_cards/${car.image}`} 
                    alt={car.description} 
                    className="w-full h-48 object-contain rounded-xl" 
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600 font-medium">{car.description}</p>
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
          width: calc(300px * 8 + 32px * 8);
        }
        
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-300px * 4 - 32px * 4));
          }
        }
        
        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </motion.section>
  );
};

export default RentaurasXEVCollectionSection;