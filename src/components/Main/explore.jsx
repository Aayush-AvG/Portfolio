import React from 'react';

const SolarSystem = () => {
  return (
    <div className="flex items-center justify-center relative">
      <div className="relative w-48 h-48 flex items-center justify-center group cursor-pointer">
        {/* Cosmic nebula background */}
        <div className="absolute inset-0 bg-gradient-radial from-slate-800/40 via-blue-900/30 via-indigo-800/20 to-transparent rounded-full animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-blue-600/15 to-cyan-500/8 rounded-full animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />

        {/* Outer asteroid belt */}
        <div className="absolute w-56 h-56 rounded-full animate-spin" style={{ animationDuration: '40s' }}>
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-pulse"
              style={{
                width: `${2 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 3}px`,
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 22.5}deg) translateY(-${110 + Math.random() * 20}px)`,
                animationDelay: `${i * 0.2}s`,
                boxShadow: '0 0 8px rgba(255, 100, 0, 0.6)'
              }}
            />
          ))}
        </div>

        {/* Main planetary rings - hidden by default, visible on hover */}
        <div className="absolute w-44 h-44 rounded-full border-2 animate-spin opacity-0 group-hover:opacity-40 transition-opacity duration-300" 
             style={{ 
               animationDuration: '25s', 
               borderImage: 'linear-gradient(45deg, #00f5ff, #ff00ff, #00ff41) 1',
               boxShadow: '0 0 20px rgba(0, 245, 255, 0.3), inset 0 0 20px rgba(255, 0, 255, 0.2)'
             }}>
        </div>

        <div className="absolute w-36 h-36 rounded-full border animate-spin opacity-0 group-hover:opacity-60 transition-opacity duration-300" 
             style={{ 
               animationDuration: '18s', 
               animationDirection: 'reverse',
               borderColor: '#3b82f6',
               boxShadow: '0 0 15px rgba(59, 130, 246, 0.4)'
             }}>
        </div>

        {/* Orbiting satellites/moons */}
        <div className="absolute w-32 h-32 animate-spin" style={{ animationDuration: '12s' }}>
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full shadow-lg"
              style={{
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 120}deg) translateY(-64px)`,
                boxShadow: '0 0 12px rgba(0, 255, 255, 0.8), 0 0 6px rgba(0, 150, 255, 0.6)',
                animationDelay: `${i * 0.4}s`
              }}
            />
          ))}
        </div>

        {/* Rotating text orbit - FIXED */}
        <div className="absolute w-32 h-32 animate-spin" style={{ animationDuration: '10s' }}>
          <svg className="w-full h-full" viewBox="0 0 128 128">
            <defs>
              <path
                id="textOrbit"
                d="M64,64 m0,-48 a48,48 0 1,1 0,96 a48,48 0 1,1 0,-96"
              />
              <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#e2e8f0" />
                <stop offset="100%" stopColor="#cbd5e1" />
              </linearGradient>
            </defs>
            <text
              textAnchor="start"
              className="font-bold text-xs tracking-wide"
              fontSize="10"
              fill="url(#textGradient)"
              style={{ 
                filter: 'drop-shadow(0 0 6px rgba(0, 0, 0, 0.8)) drop-shadow(0 0 3px rgba(0, 245, 255, 0.8))',
              }}
            >
              <textPath href="#textOrbit" startOffset="0%">
                ✦ DIVE DEEPER ✦ EXPLORE ME ✦ DISCOVER MORE ✦
              </textPath>
            </text>
          </svg>
        </div>

        {/* Energy core background */}
        <div className="absolute w-24 h-24 bg-gradient-radial from-white/20 via-cyan-500/30 to-blue-700/40 rounded-full animate-spin" style={{ animationDuration: '3s' }} />
        <div className="absolute w-22 h-22 bg-gradient-radial from-slate-200/40 via-blue-500/30 to-transparent rounded-full animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }} />

        {/* Main globe container - BIGGER */}
        <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 via-slate-700 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-cyan-400/60 transition-all duration-700 group-hover:scale-125 border-2 border-white/30"
             style={{
               boxShadow: '0 0 30px rgba(0, 245, 255, 0.6), 0 0 60px rgba(59, 130, 246, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.2)'
             }}>
          <div className="w-18 h-18 bg-black/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40">
            <div 
              className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 via-green-500 to-blue-800 animate-pulse"
              style={{
                background: 'conic-gradient(from 0deg, #3b82f6, #10b981, #1e40af, #059669, #3b82f6)',
                boxShadow: 'inset 0 0 15px rgba(0, 0, 0, 0.3)',
                animation: 'spin 20s linear infinite'
              }}
            />
          </div>
        </div>

        {/* Floating energy particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              background: `linear-gradient(45deg, 
                hsl(${180 + Math.random() * 60}, 70%, 60%), 
                hsl(${200 + Math.random() * 40}, 80%, 70%))`,
              top: `${20 + Math.random() * 60}%`,
              left: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
              boxShadow: `0 0 8px hsla(${Math.random() * 360}, 80%, 70%, 0.8)`
            }}
          />
        ))}

        {/* Shooting stars */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-16 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-shooting-star opacity-0"
            style={{
              top: `${20 + i * 25}%`,
              left: `${10 + i * 20}%`,
              animationDelay: `${i * 3 + 2}s`,
              animationDuration: '1.5s',
              transform: `rotate(${-30 + i * 15}deg)`
            }}
          />
        ))}

        {/* Pulsing energy waves */}
        <div className="absolute w-32 h-32 border border-cyan-400/30 rounded-full animate-ping" />
        <div className="absolute w-40 h-40 border border-blue-400/20 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        <div className="absolute w-48 h-48 border border-slate-400/10 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(0.8); 
            opacity: 0.4; 
          }
          25% { 
            transform: translateY(-15px) translateX(5px) scale(1.2); 
            opacity: 1; 
          }
          50% { 
            transform: translateY(-8px) translateX(-5px) scale(1); 
            opacity: 0.8; 
          }
          75% { 
            transform: translateY(-20px) translateX(8px) scale(1.1); 
            opacity: 0.9; 
          }
        }
        
        @keyframes shooting-star {
          0% { 
            opacity: 0; 
            transform: translateX(-100px) scale(0); 
          }
          10% { 
            opacity: 1; 
            transform: translateX(-50px) scale(1); 
          }
          90% { 
            opacity: 1; 
            transform: translateX(200px) scale(1); 
          }
          100% { 
            opacity: 0; 
            transform: translateX(250px) scale(0); 
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-shooting-star {
          animation: shooting-star 1.5s ease-out infinite;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }

        /* Glow effects on hover */
        .group:hover .animate-spin {
          animation-duration: 0.5s !important;
        }
      `}</style>
    </div>
  );
};

export default SolarSystem;