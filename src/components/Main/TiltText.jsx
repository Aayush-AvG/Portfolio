import React, { useRef, useEffect, useState, useCallback } from 'react';

const TiltText = () => {
  const containerRef = useRef(null);
  const tiltRef = useRef(null);
  const [tiltState, setTiltState] = useState({
    rotateX: 0,
    rotateY: 0,
    isHovered: false
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);

  // Simplified tilt calculation
  const calculateTilt = useCallback((clientX, clientY) => {
    if (tiltState.isHovered) {
      return { rotateX: 0, rotateY: 0 };
    }

    const pageCenterX = window.innerWidth / 2;
    const pageCenterY = window.innerHeight / 2;
    
    const relativeX = (clientX - pageCenterX) / (window.innerWidth / 2);
    const relativeY = (clientY - pageCenterY) / (window.innerHeight / 2);
    
    const clampedX = Math.max(-1, Math.min(1, relativeX));
    const clampedY = Math.max(-1, Math.min(1, relativeY));
    
    return {
      rotateX: -clampedY * 8,
      rotateY: clampedX * 8
    };
  }, [tiltState.isHovered]);

  // Throttled mouse move handler
  const handleGlobalMouseMove = useCallback((e) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    
    animationFrameRef.current = requestAnimationFrame(() => {
      const newTilt = calculateTilt(e.clientX, e.clientY);
      setTiltState(prev => ({
        ...prev,
        rotateX: newTilt.rotateX,
        rotateY: newTilt.rotateY
      }));

      if (containerRef.current && tiltState.isHovered) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    });
  }, [tiltState.isHovered, calculateTilt]);

  const handleMouseEnter = useCallback(() => {
    setTiltState(prev => ({ ...prev, isHovered: true }));
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTiltState(prev => ({ ...prev, isHovered: false }));
  }, []);

  // Simplified transform application
  useEffect(() => {
    if (tiltRef.current) {
      const element = tiltRef.current;
      const { rotateX, rotateY, isHovered } = tiltState;
      
      const translateZ = isHovered ? 20 : 0;
      const scale = isHovered ? 1.05 : 1;
      
      element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`;
      element.style.transition = isHovered ? 'transform 0.3s ease-out' : 'transform 0.1s ease-out';
      
      // Simplified shadow
      const shadowX = rotateY * 0.5;
      const shadowY = rotateX * 0.5 + 8;
      const glowIntensity = isHovered ? 0.4 : 0.1;
      
      element.style.filter = `drop-shadow(${shadowX}px ${shadowY}px 15px rgba(0,0,0,0.3)) drop-shadow(0 0 ${20 + (isHovered ? 20 : 0)}px rgba(255,255,255,${glowIntensity}))`;
    }
  }, [tiltState]);

  useEffect(() => {
    document.addEventListener('mousemove', handleGlobalMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [handleGlobalMouseMove]);

  return (
    <div 
      ref={containerRef}
      className='px-5 relative cursor-pointer select-none'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1500px' }}
    >
      {/* Simplified backdrop effect - only shows on hover */}
      {tiltState.isHovered && (
        <div className="absolute inset-0 pointer-events-none ">
          <div 
            className="absolute inset-0 transition-opacity duration-300"
            style={{
              background: 'conic-gradient(from 0deg at 50% 50%, rgba(0,255,255,0.1) 0deg, rgba(255,215,0,0.08) 120deg, rgba(34,197,94,0.08) 240deg, rgba(0,255,255,0.1) 360deg)',
              borderRadius: '50px',
              filter: 'blur(20px)',
              animation: 'rotate 6s linear infinite'
            }}
          />
        </div>
      )}

   <fieldset className="border-t p-0 rounded-2xl">
  <legend className="text-xl tracking-wide font-semibold text-white justify-center text-center font-[anzo3]">My Certificates</legend>
      <div 
        ref={tiltRef}
        className="w-full gap-12 flex justify-between items-center relative z-20 p-4"
      >
        
        {/* Dell Certification - Simplified */}
        <div className="relative group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/15 via-blue-500/20 to-purple-500/15 rounded-full blur-lg group-hover:blur-xl transition-all duration-300 group-hover:scale-150"></div>
          
          {/* Single rotating ring */}
          <div className="absolute inset-0 w-24 h-24 -m-2 opacity-0 group-hover:opacity-60 transition-all duration-300">
            <div className="absolute inset-0 border border-cyan-400/60 rounded-full group-hover:animate-spin" style={{animationDuration: '3s'}}></div>
          </div>
          
          <div className="relative w-20 h-20 bg-white/10 backdrop-blur-md rounded-full border border-white/30 group-hover:border-cyan-400/70 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(0,255,255,0.4)]">
            <img 
              src="del.png" 
              alt="Deliotte Certification" 
              className="w-full h-full lg:rotate-0 md:rotate-270 object-cover rounded-full p-2 transition-all duration-300 group-hover:brightness-110" 
            />
            
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                 style={{
                   background: 'linear-gradient(45deg, transparent 30%, rgba(0,255,255,0.3) 50%, transparent 70%)',
                   animation: 'shimmer 1.5s ease-in-out infinite'
                 }}>
            </div>
          </div>
          
          {/* Reduced particles */}
          {[...Array(4)].map((_, i) => (
            <div key={i}
                 className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300"
                 style={{
                   width: '2px',
                   height: '2px',
                   background: '#00ffff',
                   borderRadius: '50%',
                   top: `${25 + Math.sin(i * 90 * Math.PI / 180) * 30 + 25}%`,
                   left: `${25 + Math.cos(i * 90 * Math.PI / 180) * 30 + 25}%`,
                   animation: `orbit ${3}s ease-in-out infinite`,
                   animationDelay: `${i * 0.2}s`,
                   boxShadow: '0 0 8px #00ffff'
                 }}>
            </div>
          ))}
        </div>
        
        {/* IBM Certification - Simplified */}
        <div className="relative group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-yellow-500/25 to-orange-500/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300 group-hover:scale-150"></div>
          
          <div className="absolute inset-0 w-24 h-24 -m-2 opacity-0 group-hover:opacity-70 transition-all duration-300">
            <div className="absolute inset-0 border border-amber-400/60 rounded-full group-hover:animate-spin" style={{animationDuration: '4s'}}></div>
          </div>
          
          <div className="relative w-20 h-20 bg-slate-800/90 backdrop-blur-md rounded-full border border-amber-400/40 group-hover:border-amber-400/80 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(251,191,36,0.4)]">
            <img 
              src="ibm.png" 
              alt="IBM Certification" 
              className="w-full h-full lg:rotate-0 md:rotate-270 object-cover rounded-full p-2 transition-all duration-300 group-hover:brightness-110" 
            />
            
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/20 via-transparent to-yellow-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          </div>
          
          {/* Simplified sparkles */}
          {[...Array(6)].map((_, i) => (
            <div key={i}
                 className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300"
                 style={{
                   width: '1.5px',
                   height: '1.5px',
                   background: '#fbbf24',
                   borderRadius: '50%',
                   top: `${15 + Math.sin(i * 60 * Math.PI / 180) * 35 + 25}%`,
                   left: `${15 + Math.cos(i * 60 * Math.PI / 180) * 35 + 25}%`,
                   animation: `twinkle ${2 + i * 0.2}s ease-in-out infinite`,
                   animationDelay: `${i * 0.1}s`,
                   boxShadow: '0 0 8px #fbbf24'
                 }}>
            </div>
          ))}
        </div>
        
        {/* FreeCodeCamp - Simplified */}
        <div className="relative group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-emerald-500/25 to-teal-500/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300 group-hover:scale-150"></div>
          
          <div className="absolute inset-0 w-24 h-24 -m-2 opacity-0 group-hover:opacity-60 transition-all duration-300">
            <div className="absolute inset-0 border border-green-400/60 rounded-full group-hover:animate-spin" style={{animationDuration: '3s'}}></div>
          </div>
          
          <div className="relative w-20 h-20 bg-slate-800/95 backdrop-blur-md rounded-full border border-green-400/40 group-hover:border-green-400/80 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(34,197,94,0.4)]">
            <img 
              src="fcc.png" 
              alt="FreeCodeCamp Certification" 
              className="w-full lg:rotate-0 md:rotate-270 h-full object-cover rounded-full p-2 transition-all duration-300 group-hover:brightness-115" 
            />
            
            {/* Enhanced satellite radar scanning effect */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
              {/* Main rotating scan beam - brighter and wider */}
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, transparent 0%, transparent 85%, rgba(34,197,94,0.9) 90%, rgba(34,197,94,1) 95%, rgba(34,197,94,0.9) 97%, transparent 100%)',
                  animation: 'radar-sweep 2.5s linear infinite',
                  filter: 'blur(0.5px)'
                }}
              >
                {/* Additional glow layer for visibility */}
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent 0%, transparent 87%, rgba(34,197,94,0.6) 92%, rgba(34,197,94,0.8) 95%, rgba(34,197,94,0.6) 98%, transparent 100%)',
                    filter: 'blur(1px)'
                  }}
                ></div>
              </div>
              
              {/* Radar ring indicators */}
              <div className="absolute inset-2 border border-green-400/30 rounded-full"></div>
              <div className="absolute inset-4 border border-green-400/20 rounded-full"></div>
              
              {/* Center radar dot */}
              <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-green-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
              
              {/* Scanning trail effect */}
              <div 
                className="absolute inset-0 rounded-full opacity-40"
                style={{
                  background: 'conic-gradient(from 0deg, transparent 0%, transparent 70%, rgba(34,197,94,0.3) 85%, rgba(34,197,94,0.1) 95%, transparent 100%)',
                  animation: 'radar-sweep 2.5s linear infinite',
                  filter: 'blur(2px)'
                }}
              ></div>
            </div>
          </div>
          
          {/* Simplified code symbols */}
          <div className="absolute -top-1 right-1 text-green-400 text-xs opacity-0 group-hover:opacity-100 font-mono transition-all duration-300">&lt;/&gt;</div>
          <div className="absolute bottom-0 -left-1 text-emerald-400 text-xs opacity-0 group-hover:opacity-100 font-mono transition-all duration-300">{ }</div>
          <div className="absolute top-1/2 -right-2 text-teal-400 text-xs opacity-0 group-hover:opacity-100 font-mono transition-all duration-300">[ ]</div>
        </div>
        
      </div>
        </fieldset>

      
      {/* Simplified floating title */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 hover:opacity-100 transition-all duration-300 pointer-events-none">
        <div className="relative px-6 py-2 bg-black/80 backdrop-blur-md rounded-full border border-white/30 text-sm text-white/90 whitespace-nowrap font-medium">
          <span className="bg-gradient-to-r from-cyan-400 via-amber-400 to-green-400 bg-clip-text text-transparent font-semibold">
            Professional Certifications
          </span>
        </div>
      </div>

      {/* Simplified cursor follower */}
      {tiltState.isHovered && (
        <div
          className="absolute pointer-events-none z-30 transition-all duration-75 ease-out"
          style={{
            left: `${mousePosition.x - 8}px`,
            top: `${mousePosition.y - 8}px`
          }}
        >
          <div className="w-4 h-4 border border-white/60 rounded-full">
            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(200%) rotate(45deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.4; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(25px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(25px) rotate(-360deg); }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes radar-sweep {
          0% { 
            transform: rotate(0deg); 
          }
          100% { 
            transform: rotate(360deg); 
          }
        }
      `}</style>
    </div>
  );
}

export default TiltText;