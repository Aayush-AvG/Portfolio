import { useState, useEffect } from 'react';
import RobContainer from './models/robContainer';
import ManContainer from './models/manContainer';
import LapContainer from './models/lapContainer';

// Responsive Counter Component
const Counter = ({ from = 0, to, text }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (count < to) {
      const timer = setTimeout(() => {
        setCount(count + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [count, to]);

  return (
    <div 
      className="group relative w-fit min-w-72 p-1 rounded-2xl cursor-pointer transition-all duration-700 hover:scale-105"
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
        className="relative flex items-center justify-center p-4 sm:p-6 rounded-2xl backdrop-blur-sm transition-all duration-700"
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
        <div className="text-center px-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 group-hover:text-white transition-all duration-700 group-hover:scale-105 whitespace-nowrap"
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
          <p className="text-gray-500 font-[anzo3] group-hover:text-gray-300 transition-all duration-700 text-sm sm:text-base"
              style={{
                textShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
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
    </div>
  );
};

// Main Services Component
const Services = () => {
  const [currentServiceId, setCurrentServiceId] = useState(1);
  const services = [
    {
      id: 1,
      img: "/web.gif",
      title: "Web Development",
      counter: 10,
    },
    {
      id: 2,
      img: "/soft.gif",
      title: "Software Development",
      counter: 5,
    },
    {
      id: 3,
      img: "/brand.gif",
      title: "AI Agents",
      counter: 3,
    },
  ];

  return (
    <div 
      className='min-h-screen h-auto lg:h-screen front snap-y snap-center snap-mandatory overflow-hidden relative flex flex-col lg:flex-row'
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 15%, #1a1a1a 30%, #2a2a2a 45%, #1a1a1a 60%, #0f0f0f 80%, #000000 100%)',
        willChange: 'auto'
      }}
    >
      {/* Left Side - Main Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
        
        {/* Header */}
        <h1 className="font-[anzo4] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold items-center tracking-tighter justify-center flex mb-8 lg:mb-12 text-center">
          <img src="help.gif" alt="" className="w-12 sm:w-16 md:w-20 lg:w-20 mr-2 sm:mr-4"/> 
          <span className="text-white">What can I assist you with?</span>
        </h1>

        {/* Services Container */}
        <div className="w-full max-w-2xl mx-auto lg:w-5/6 items-center flex flex-col gap-4 sm:gap-6">
          {services.map((service) => (
            <div 
              className="group relative w-full sm:w-5/6 lg:w-full p-1 rounded-2xl cursor-pointer transition-all duration-700 hover:scale-105"
              key={service.id}
              onClick={() => setCurrentServiceId(service.id)}
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
                className="relative flex items-center p-3 sm:p-4 lg:p-6 rounded-2xl backdrop-blur-sm transition-all duration-700"
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
                
                {/* Icon container with enhanced glow effect */}
                <div className="relative mr-3 sm:mr-4 lg:mr-6">
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700"
                       style={{
                         background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
                         animation: 'pulse-glow 2s ease-in-out infinite',
                         transform: 'scale(1.5)',
                         filter: 'blur(8px)'
                       }} />
                  
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-full transition-all duration-700 group-hover:rotate-12"
                       style={{
                         background: 'linear-gradient(135deg, rgba(15, 15, 15, 0.8) 0%, rgba(25, 25, 25, 0.6) 50%, rgba(40, 40, 40, 0.4) 100%)',
                         border: '2px solid rgba(60, 60, 60, 0.4)',
                         boxShadow: '0 0 25px rgba(255, 255, 255, 0.08), inset 0 0 20px rgba(20, 20, 20, 0.5)'
                       }}>
                    
                    {/* Inner energy core */}
                    <div className="absolute inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                         style={{
                           background: 'radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, rgba(0, 0, 0, 0) 80%)',
                           animation: 'energy-core 1.5s ease-in-out infinite alternate'
                         }} />
                    
                    <img 
                      src={service.img} 
                      alt="" 
                      className="relative w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-contain transition-all duration-700 group-hover:brightness-200 group-hover:contrast-150 group-hover:scale-110 z-10"
                      style={{
                        filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3)) brightness(1.3) contrast(1.1)'
                      }}
                    />
                  </div>
                </div>
                
                {/* Text content */}
                <div className="flex-1">
                  <h2 className="text-lg sm:text-xl lg:text-[23px] font-bold text-white mb-1 group-hover:text-white transition-all duration-700 group-hover:scale-105 origin-left"
                      style={{
                        textShadow: '0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.1)',
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                        letterSpacing: '1px'
                      }}>
                    {service.title}
                  </h2>
                  <h3 className="text-gray-500 font-[anzo3] group-hover:text-gray-300 transition-all duration-700 text-sm sm:text-base"
                      style={{
                        textShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
                        letterSpacing: '0.5px'
                      }}>
                    <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-2 group-hover:animate-pulse group-hover:shadow-lg group-hover:shadow-white/30 group-hover:bg-gray-300" />
                    {service.counter} Projects
                  </h3>
                </div>
                
                {/* Arrow indicator */}
                <div className="ml-2 sm:ml-4 text-gray-400 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-700">
                  <div className="relative">
                    {/* Glowing background */}
                    <div className="absolute inset-0 bg-white rounded-full opacity-10 blur-sm scale-150" />
                    <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                         style={{ filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.4))' }}>
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
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
            </div>
          ))}
          
          {/* Counter Component - Content fitting square */}
          <div className="flex justify-center">
            <div className="w-fit">
              <Counter from={0} to={18} text="Projects Completed"/>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - 3D Model (Desktop) */}
      <div className="hidden lg:flex w-1/2 flex-col justify-center items-center relative p-8">
        {/* 3D Model Container with proper sizing */}
        <div 
          className="w-full h-full flex items-center justify-center"
          style={{
            minHeight: '600px',
            maxHeight: '800px'
          }}
        >
          <div 
            className="w-full h-full relative"
            style={{
              minWidth: '400px',
              minHeight: '600px'
            }}
          >
            {currentServiceId === 1 ? <LapContainer /> : currentServiceId===2 ? <ManContainer />: <RobContainer />}
          </div>
        </div>
      </div>

      {/* Bottom Section - 3D Model (Tablet/Medium screens) */}
      <div className="hidden md:flex lg:hidden w-full flex-col justify-center items-center relative px-4 py-4">
        <div 
          className="w-full flex items-center justify-center"
          style={{
            height: '200px',
            maxWidth: '450px'
          }}
        >
          <div 
            className="w-full h-full relative"
            style={{
              minWidth: '300px',
              minHeight: '750px'
            }}
          >
           {currentServiceId === 1 ? <LapContainer /> : currentServiceId===2 ? <ManContainer />: <RobContainer />}
          </div>
        </div>
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
        
        @keyframes pulse-glow {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1.3);
          }
          50% { 
            opacity: 0.6;
            transform: scale(1.6);
          }
        }
        
        @keyframes energy-core {
          0% { 
            opacity: 0.2;
            transform: scale(0.8);
          }
          100% { 
            opacity: 0.5;
            transform: scale(1.2);
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

export default Services;