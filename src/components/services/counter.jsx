import { useState, useEffect } from 'react';

const Counter = ({ from = 0, to, text }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (count < to) {
      const timer = setTimeout(() => {
        setCount(count + 1);
      }, 100); // Adjust speed as needed
      return () => clearTimeout(timer);
    }
  }, [count, to]);

  return (
    <div 
      className="group relative w-3/4 p-1 rounded-2xl cursor-pointer transition-all duration-700 hover:scale-105"
      style={{
        background: 'linear-gradient(135deg, rgba(5, 5, 5, 0.9) 0%, rgba(15, 15, 15, 0.95) 100%)',
        border: '1px solid rgba(40, 40, 40, 0.4)',
        filter: 'grayscale(0.3)',
      }}
    >
      {/* Multi-layered glow effects */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"
           style={{
             background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.6) 0%, rgba(35, 35, 35, 0.5) 50%, rgba(50, 50, 50, 0.4) 100%)',
             boxShadow: '0 0 40px rgba(255, 255, 255, 0.1), inset 0 0 30px rgba(30, 30, 30, 0.3)',
             zIndex: -1
           }} />
      
      {/* Animated energy rings */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-2 rounded-xl border border-white/20 group-hover:border-white/40"
             style={{
               animation: 'energy-pulse 2s ease-in-out infinite',
               boxShadow: '0 0 20px rgba(255, 255, 255, 0.15)'
             }} />
      </div>
      
      {/* Main content container */}
      <div 
        className="relative flex items-center justify-center p-6 rounded-2xl backdrop-blur-sm transition-all duration-700"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.98) 0%, rgba(10, 10, 10, 0.95) 50%, rgba(5, 5, 5, 0.98) 100%)',
          border: '1px solid rgba(40, 40, 40, 0.25)',
          boxShadow: 'inset 0 1px 0 rgba(60, 60, 60, 0.1), 0 8px 32px rgba(0, 0, 0, 0.9)'
        }}
      >
        {/* Holographic scan line effect */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <div 
            className="absolute w-full h-1 opacity-0 group-hover:opacity-100"
            style={{
              background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(80, 80, 80, 0.6) 10%, rgba(160, 160, 160, 0.9) 30%, rgba(255, 255, 255, 1) 50%, rgba(160, 160, 160, 0.9) 70%, rgba(80, 80, 80, 0.6) 90%, rgba(0, 0, 0, 0) 100%)',
              animation: 'scan-line 2.5s ease-in-out infinite',
              filter: 'blur(0.3px)',
              boxShadow: '0 0 15px rgba(255, 255, 255, 0.4)'
            }}
          />
          {/* Secondary scan line */}
          <div 
            className="absolute w-full h-0.5 opacity-0 group-hover:opacity-70"
            style={{
              background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(180, 180, 180, 0.7) 50%, rgba(0, 0, 0, 0) 100%)',
              animation: 'scan-line-2 3s ease-in-out infinite 0.5s',
              filter: 'blur(0.8px)'
            }}
          />
        </div>
        
        {/* Text content - Centered */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-3 group-hover:text-white transition-all duration-700 group-hover:scale-105"
              style={{
                textShadow: '0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.1)',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                letterSpacing: '2px',
                background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 50%, #ffffff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
            {count}+
          </h1>
          <p className="text-gray-500 font-[anzo3] group-hover:text-gray-300 transition-all duration-700"
              style={{
                textShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
                fontSize: '0.95rem',
                letterSpacing: '0.5px'
              }}>
            <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-2 group-hover:animate-pulse group-hover:shadow-lg group-hover:shadow-white/30 group-hover:bg-gray-300" />
            {text}
          </p>
        </div>
      </div>
      
      {/* Particle effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
              animation: `float-particle 3s ease-in-out infinite ${i * 0.5}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes energy-pulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.3;
          }
          50% { 
            transform: scale(1.1);
            opacity: 0.6;
          }
        }
        
        @keyframes scan-line {
          0% { 
            top: -4px; 
            opacity: 0; 
            transform: translateX(-100%);
          }
          10% { 
            opacity: 1; 
          }
          90% { 
            opacity: 1; 
          }
          100% { 
            top: 100%; 
            opacity: 0; 
            transform: translateX(100%);
          }
        }
        
        @keyframes scan-line-2 {
          0% { 
            top: -2px; 
            opacity: 0; 
            transform: translateX(-100%) scaleX(0.5);
          }
          50% { 
            opacity: 0.6; 
            transform: translateX(0%) scaleX(1);
          }
          100% { 
            top: 100%; 
            opacity: 0; 
            transform: translateX(100%) scaleX(0.5);
          }
        }
        
        @keyframes float-particle {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(0.8); 
            opacity: 0; 
          }
          50% { 
            transform: translateY(-15px) rotate(180deg) scale(1.2); 
            opacity: 1; 
          }
        }
      `}</style>
    </div>
  );
};

export default Counter;