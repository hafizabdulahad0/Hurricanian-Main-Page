
const BubblesBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className="bubble"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 150 + 50}px`,
              height: `${Math.random() * 150 + 50}px`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          >
            {[...Array(5)].map((_, j) => (
              <span 
                key={j}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 80 + 20}px`,
                  height: `${Math.random() * 80 + 20}px`,
                  animationDelay: `${Math.random() * 4}s`,
                }}
              ></span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BubblesBackground;
