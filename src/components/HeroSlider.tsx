
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
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#3EA99F]/50 hover:bg-[#3EA99F]/80 text-white w-10 h-10 rounded-full flex items-center justify-center z-20"
        aria-label="Previous slide"
      >
        ❮
      </button>
      <button 
        onClick={handleNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#3EA99F]/50 hover:bg-[#3EA99F]/80 text-white w-10 h-10 rounded-full flex items-center justify-center z-20"
        aria-label="Next slide"
      >
        ❯
      </button>
    </div>
  );
};

export default HeroSlider;
