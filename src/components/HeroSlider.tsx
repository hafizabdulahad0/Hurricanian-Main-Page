
import { useState, useEffect } from 'react';

const slides = [
  { 
    id: 1, 
    url: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1200&h=400', 
    alt: 'Digital Services Banner' 
  },
  { 
    id: 2, 
    url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&h=400', 
    alt: 'Tech Solutions Banner' 
  },
  { 
    id: 3, 
    url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=400', 
    alt: 'Digital Infrastructure Banner' 
  },
  { 
    id: 4, 
    url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&h=400', 
    alt: 'Programming Services Banner' 
  },
  { 
    id: 5, 
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&h=400', 
    alt: 'Remote Work Solutions Banner' 
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
    <div className="relative w-full h-[50vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div 
          key={slide.id} 
          className={`slide ${index === currentIndex ? 'active' : ''}`}
        >
          <img 
            src={slide.url} 
            alt={slide.alt} 
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      {/* Navigation arrows */}
      <button 
        onClick={handlePrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-green-700/50 hover:bg-green-700/80 text-white w-10 h-10 rounded-full flex items-center justify-center z-20"
        aria-label="Previous slide"
      >
        ❮
      </button>
      <button 
        onClick={handleNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-green-700/50 hover:bg-green-700/80 text-white w-10 h-10 rounded-full flex items-center justify-center z-20"
        aria-label="Next slide"
      >
        ❯
      </button>
    </div>
  );
};

export default HeroSlider;
