
import { useState, useEffect } from 'react';

const slides = [
  { 
    id: 1, 
    url: '/lovable-uploads/1c9cc78b-0878-4fd4-af13-04ee4380a53a.png', 
    alt: 'Hurricanian Enterprises - Property Services' 
  },
  { 
    id: 2, 
    url: '/lovable-uploads/65e2c288-1fdc-484f-8f61-5d5af426711e.png', 
    alt: 'Hurricanian Gems - Gemstone Services' 
  },
  { 
    id: 3, 
    url: '/lovable-uploads/f9961fd6-c7b1-49f9-9b95-bc30186c72d1.png', 
    alt: 'Hurricanian LiveStock - Animal Trading' 
  },
  { 
    id: 4, 
    url: '/lovable-uploads/ee97023b-6804-4f8b-9ef0-1bd438a331cc.png', 
    alt: 'Hurricanian Pink Salt - Salt Products' 
  },
  { 
    id: 5, 
    url: '/lovable-uploads/c57a64f2-cf18-41f1-9c0e-553f47530e9d.png', 
    alt: 'Hurricanian Technologies - Tech Services' 
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
    <div className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] overflow-hidden">
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
            className="w-full h-full object-cover bg-gray-100 dark:bg-gray-800"
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
