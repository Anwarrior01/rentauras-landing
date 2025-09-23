import React from 'react';
import { motion } from 'framer-motion';

const RentaurasXEVCollectionSection = () => {
  return (
    <motion.section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8">
            Our EV Collection
          </h2>
        </div>
        
        {/* Simple Slider Container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-slide">
            {/* Cars */}
            {[13, 14, 15, 16, 17, 18, 19, 21, 22].map((carNumber, index) => (
              <div 
                key={`car-${carNumber}`} 
                className={`flex-shrink-0 mx-4 bg-transparent rounded-3xl p-8 transform transition-transform duration-300 hover:scale-105 ${
                  index % 2 === 0 ? 'rotate-1 hover:rotate-0' : '-rotate-2 hover:rotate-3'
                } min-w-[300px] max-w-[500px]`}
              >
                <div className="flex justify-center rounded-3xl">
                  <img 
                    src={`assets/rentaurasx/car_cards/${carNumber}.svg`} 
                    alt={`Car ${carNumber}`} 
                    className="w-full h-full object-contain rounded-3xl" 
                  />
                </div>
              </div>
            ))}
            {/* Duplicate for infinite loop */}
            {[13, 14, 15, 16, 17, 18, 19, 21, 22].map((carNumber, index) => (
              <div 
                key={`car-duplicate-${carNumber}`} 
                className={`flex-shrink-0 mx-4 bg-transparent rounded-3xl p-8 transform transition-transform duration-300 hover:scale-105 ${
                  index % 2 === 0 ? 'rotate-1 hover:rotate-0' : '-rotate-1 hover:rotate-0'
                } min-w-[300px] max-w-[300px]`}
              >
                <div className="flex justify-center">
                  <img 
                    src={`assets/rentaurasx/car_cards/${carNumber}.svg`} 
                    alt={`Car ${carNumber}`} 
                    className="w-full h-full object-contain border rounded-2xl" 
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
  );
};

export default RentaurasXEVCollectionSection;