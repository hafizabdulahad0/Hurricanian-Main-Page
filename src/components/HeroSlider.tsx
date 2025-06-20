
import { useState, useEffect } from 'react';

const slides = [
  { 
    id: 1, 
    url: '/lovable-uploads/ed9e0ff4-704b-4779-9c7b-5c87e6600be7.png', 
    alt: 'Business Leadership - Hurricanian Services' 
  },
  { 
    id: 2, 
    url: '/lovable-uploads/a423d0c1-5623-4084-b267-137806ae7df1.png', 
    alt: 'Certified & Natural Emeralds - Hurricanian Gems' 
  },
  { 
    id: 3, 
    url: '/lovable-uploads/3a401a30-b537-4244-9a75-439ce3c97361.png', 
    alt: 'Latest News & Updates - Hurricanian' 
  },
  { 
    id: 4, 
    url: '/lovable-uploads/9e4af772-a8f1-40bf-a167-10fe111a6d7a.png', 
    alt: 'Natural Salt Products - Hurricanian Pink Salt' 
  },
  { 
    id: 5, 
    url: '/lovable-uploads/ae7d13d0-8c02-4abb-8ed0-8c8b586db881.png', 
    alt: 'Website Development - Hurricanian Technologies' 
  },
  { 
    id: 6, 
    url: '/lovable-uploads/11fe3f24-940f-479e-8c30-8f9a113b945c.png', 
    alt: 'Global Trading & Logistics - Hurricanian' 
  },
  { 
    id: 7, 
    url: '/lovable-uploads/3872b208-6fa1-47f0-935a-d5fbd42fb6ad.png', 
    alt: 'Visa Consultant Services - Hurricanian' 
  },
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        handleNextSlide();
      } else {
        handlePrevSlide();
      }
    };

    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="relative w-full h-[180px] sm:h-[220px] md:h-[400px] lg:h-[500px] overflow-hidden -mt-0 -mb-0">
      <style>{`
        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
        }
        .slide.active {
          opacity: 1;
        }
      `}</style>
      
      {slides.map((slide, index) => (
        <div 
          key={slide.id} 
          className={`slide ${index === currentIndex ? 'active' : ''}`}
        >
          <img 
            src={slide.url} 
            alt={slide.alt} 
            className="w-full h-full object-cover object-center sm:object-contain sm:bg-white sm:dark:bg-gray-800"
          />
        </div>
      ))}
      
      {/* Navigation arrows */}
      <button 
        onClick={handlePrevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-[#3EA99F]/50 hover:bg-[#3EA99F]/80 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center z-20 text-sm sm:text-base"
        aria-label="Previous slide"
      >
        ❮
      </button>
      <button 
        onClick={handleNextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-[#3EA99F]/50 hover:bg-[#3EA99F]/80 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center z-20 text-sm sm:text-base"
        aria-label="Next slide"
      >
        ❯
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-[#3EA99F]' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
