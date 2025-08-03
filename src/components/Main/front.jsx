import TiltText from "./TiltText";
import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Speech from "./speech";
import SolarSystem from "./explore";

const Front = () => {

  // Memoized static elements to prevent re-renders
  const staticParticles = useMemo(() => {
    return [...Array(15)].map((_, i) => ({
      id: i,
      width: 1 + Math.random() * 2,
      height: 1 + Math.random() * 2,
      opacity: 0.2 + Math.random() * 0.4,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 10,
      blur: 5 + Math.random() * 15,
      isCircle: i % 2 === 0
    }));
  }, []);

  // Optimized orbital data - pre-calculated to avoid runtime computation
  const orbitalData = useMemo(() => {
    const radii = [50, 70, 90, 110, 130];
    return radii.map((radius, index) => ({
      radius,
      particles: Array.from({ length: Math.floor(radius / 20) }).map((_, particleIndex) => {
        const angle = (particleIndex * 360) / Math.floor(radius / 20);
        return {
          id: particleIndex,
          left: radius + Math.cos(angle * Math.PI / 180) * (radius - 6),
          top: radius + Math.sin(angle * Math.PI / 180) * (radius - 6),
          delay: particleIndex * 0.2
        };
      }),
      rotateZDuration: 15 + index * 5,
      rotateXDuration: 8 + index * 2,
      rotateYDuration: 12 + index * 3
    }));
  }, []);

  // Optimized spiral data
  const spiralData = useMemo(() => {
    const startAngles = [0, 60, 120, 180, 240, 300];
    return startAngles.map((startAngle, spiralIndex) => ({
      startAngle,
      points: Array.from({ length: 15 }).map((_, pointIndex) => {
        const distance = 20 + pointIndex * 8;
        const spiralAngle = pointIndex * 15;
        return {
          id: pointIndex,
          left: Math.cos(spiralAngle * Math.PI / 180) * distance,
          top: Math.sin(spiralAngle * Math.PI / 180) * distance,
          delay: pointIndex * 0.1,
          duration: 3 + Math.random()
        };
      })
    }));
  }, []);

  // Optimized dust particles
  const dustParticles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, dustIndex) => {
      const randomRadius = 40 + Math.random() * 140;
      const randomAngle = Math.random() * 360;
      return {
        id: dustIndex,
        marginLeft: Math.cos(randomAngle * Math.PI / 180) * randomRadius,
        marginTop: Math.sin(randomAngle * Math.PI / 180) * randomRadius,
        duration: 4 + Math.random() * 4,
        delay: Math.random() * 8
      };
    });
  }, []);

  return (
    <div 
      className='h-screen front snap-y snap-center snap-mandatory overflow-hidden relative flex flex-col lg:flex-row'
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 15%, #1a1a1a 30%, #2a2a2a 45%, #1a1a1a 60%, #0f0f0f 80%, #000000 100%)',
        willChange: 'auto'
      }}
    >
      {/* Optimized background with reduced complexity */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 border border-white/10 rotate-45" 
             style={{
               animation: 'spin 30s linear infinite',
               transformOrigin: 'center',
               willChange: 'transform'
             }}>
        </div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-32 sm:w-48 lg:w-60 h-32 sm:h-48 lg:h-60 border border-white/8 rounded-full" 
             style={{
               animation: 'pulse-custom 4s ease-in-out infinite',
               willChange: 'opacity'
             }}>
        </div>
        <div className="absolute top-1/2 left-1/4 w-20 sm:w-32 lg:w-40 h-20 sm:h-32 lg:h-40 border border-white/6 transform rotate-12" 
             style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}>
        </div>
        
        {/* Simplified grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px, 120px 120px',
            animation: 'grid-drift 50s linear infinite',
            willChange: 'transform'
          }} />
        </div>

        {/* Static light rays */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" 
             style={{animation: 'pulse-custom 3s ease-in-out infinite'}}></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/8 to-transparent" 
             style={{animation: 'pulse-custom 4s ease-in-out infinite', animationDelay: '1s'}}></div>
        
        {/* Optimized gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-gradient-radial from-white/8 via-white/3 to-transparent rounded-full blur-3xl" 
             style={{animation: 'pulse-custom 6s ease-in-out infinite', willChange: 'opacity'}}></div>
        <div className="absolute bottom-1/3 left-1/5 w-36 sm:w-56 lg:w-72 h-36 sm:h-56 lg:h-72 bg-gradient-radial from-white/6 via-white/2 to-transparent rounded-full blur-2xl" 
             style={{animation: 'pulse-custom 8s ease-in-out infinite', animationDelay: '3s', willChange: 'opacity'}}></div>
      </div>

      {/* Social panel - Always vertical, positioned at right edge */}
      <div className="absolute right-0 sm:top-8 md:top-[15%] lg:top-[17%] lg:right-12 transform lg:-translate-y-1/2 z-30">
        <div className="relative">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-2xl lg:rounded-br-4xl border border-white/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-3xl blur-sm"></div>
          
          {/* Always vertical layout */}
          <div className="relative flex flex-col items-center top-4 space-y-6">
            <a href="https://www.instagram.com/avg.aayush_69/" target="#" className="group relative"> 
              <div className="absolute inset-0 bg-white/10 rounded-2xl blur-md group-hover:bg-white/20 transition-all duration-300"></div>
              <div className="relative p-1 sm:p-1.5 md:p-2 lg:p-3 rounded-2xl border border-white/20 group-hover:border-white/40 transition-all duration-300 group-hover:scale-110">
                <img src="insta.gif" alt="" className="w-7 sm:w-8 md:w-9 lg:w-6"/>
              </div>
            </a>
            
            <a href="https://www.linkedin.com/in/aayush-raj-singh-757839378/" target="_blank" className="group relative"> 
              <div className="absolute inset-0 bg-white/10 rounded-2xl blur-md group-hover:bg-white/20 transition-all duration-300"></div>
              <div className="relative p-1 sm:p-1.5 md:p-2 lg:p-3 rounded-2xl border border-white/20 group-hover:border-white/40 transition-all duration-300 group-hover:scale-110">
                <img src="linked.gif" alt="" className="w-7 sm:w-8 md:w-9 lg:w-6"/>
              </div>
            </a>
            
            <a href="https://github.com/Aayush-AvG" target="_blank"  className="group relative"> 
              <div className="absolute inset-0 bg-white/10 rounded-2xl blur-md group-hover:bg-white/20 transition-all duration-300"></div>
              <div className="relative p-1 sm:p-1.5 md:p-2 lg:p-3 rounded-2xl border border-white/20 group-hover:border-white/40 transition-all duration-300 group-hover:scale-110">
                <img src="git.gif" alt="" className="w-7 sm:w-8 md:w-9 lg:w-6"/>
              </div>
            </a>
            
            <div className="mt-1 md:mt-3 lg:mt-5 w-12 sm:w-16 md:w-20 lg:w-24 text-center flex items-center justify-center p-1 origin-center 
              rounded-tr-2xl rounded-bl-2xl 
              bg-gradient-to-br from-red-600 via-rose-500 to-pink-500 
              backdrop-blur-sm bg-opacity-70
              shadow-[0_0_25px_rgba(255,70,70,0.6)] 
              hover:shadow-[0_0_40px_rgba(255,70,70,0.9)] 
              hover:scale-110 transition-all duration-300 cursor-pointer 
              animate-[pulseGlow_2s_ease-in-out_infinite]">
              <span className="text-[6px] sm:top-80 sm:text-[10px] md:text-xs font-extrabold text-white tracking-[0.2em] drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]">
                FOLLOW
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 relative z-20 p-4 sm:p-8 lg:p-16">
        
        {/* Hero Section - Only "Hey There, I'm Aayush!" remains on md and below */}
        <div className="absolute top-4 sm:top-8 lg:top-16 left-4 sm:left-8 lg:left-16 w-full sm:w-4/5 lg:w-2/5 pr-4 sm:pr-8 lg:pr-0">
          <div className="space-y-3 sm:space-y-4 lg:space-y-6 relative">
            
            {/* Optimized 3D Galaxy Animation - Hidden on lg and below */}
            <div className="hidden xl:block absolute right-0 sm:right-10 lg:left-80 top-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 pointer-events-none opacity-60 sm:opacity-70 lg:opacity-80" style={{willChange: 'transform'}}>
              
              {/* Central Core */}
              <motion.div
                className="sm:w-2 sm:h-2 lg:w-[10px] lg:h-[10px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: '6px',
                  height: '6px',
                  background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 40%, transparent 70%)',
                  borderRadius: '50%',
                  boxShadow: '0 0 15px rgba(255,255,255,0.4), 0 0 30px rgba(255,255,255,0.2)',
                  willChange: 'transform, opacity'
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Optimized Orbital Rings */}
              {orbitalData.map((orbital, index) => (
                <motion.div
                  key={index}
                  className="sm:w-auto sm:h-auto lg:w-auto lg:h-auto absolute top-1/2 left-1/2 border border-white/20"
                  style={{
                    width: (orbital.radius * 2) * 0.6,
                    height: (orbital.radius * 2) * 0.6,
                    borderRadius: '50%',
                    marginLeft: -(orbital.radius * 0.6),
                    marginTop: -(orbital.radius * 0.6),
                    transformStyle: 'preserve-3d',
                    willChange: 'transform'
                  }}
                  animate={{
                    rotateZ: [0, 360],
                    rotateX: [0, 20, 0, -20, 0],
                    rotateY: [0, 15, 0, -15, 0]
                  }}
                  transition={{
                    rotateZ: { 
                      duration: orbital.rotateZDuration, 
                      repeat: Infinity, 
                      ease: "linear" 
                    },
                    rotateX: { 
                      duration: orbital.rotateXDuration, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    },
                    rotateY: { 
                      duration: orbital.rotateYDuration, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }
                  }}
                >
                  {/* Orbital particles */}
                  {orbital.particles.map((particle) => (
                    <motion.div
                      key={particle.id}
                      className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white/40 rounded-full"
                      style={{
                        left: particle.left * 0.6,
                        top: particle.top * 0.6,
                        boxShadow: '0 0 4px rgba(255,255,255,0.6)',
                        willChange: 'transform, opacity'
                      }}
                      animate={{
                        scale: [0.5, 1.2, 0.5],
                        opacity: [0.3, 0.8, 0.3]
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </motion.div>
              ))}

              {/* Optimized Spiral Arms */}
              {spiralData.map((spiral, spiralIndex) => (
                <motion.div
                  key={spiralIndex}
                  className="absolute top-1/2 left-1/2"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    willChange: 'transform'
                  }}
                  animate={{
                    rotateZ: [spiral.startAngle, spiral.startAngle + 360]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {spiral.points.map((point) => (
                    <motion.div
                      key={point.id}
                      className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/30 rounded-full"
                      style={{
                        left: point.left * 0.6,
                        top: point.top * 0.6,
                        boxShadow: '0 0 3px rgba(255,255,255,0.4)',
                        willChange: 'transform, opacity'
                      }}
                      animate={{
                        opacity: [0.2, 0.6, 0.2],
                        scale: [0.3, 1, 0.3]
                      }}
                      transition={{
                        duration: point.duration,
                        repeat: Infinity,
                        delay: point.delay,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </motion.div>
              ))}

              {/* Optimized Cosmic Dust Particles */}
              {dustParticles.slice(0, 20).map((dust) => (
                <motion.div
                  key={dust.id}
                  className="absolute w-0.5 h-0.5 bg-white/25 rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                    marginLeft: dust.marginLeft * 0.6,
                    marginTop: dust.marginTop * 0.6,
                    boxShadow: '0 0 2px rgba(255,255,255,0.3)',
                    willChange: 'transform, opacity'
                  }}
                  animate={{
                    opacity: [0, 0.5, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: dust.duration,
                    repeat: Infinity,
                    delay: dust.delay,
                    ease: "easeInOut"
                  }}
                />
              ))}

              {/* Energy Waves */}
              {[60, 80, 100].map((waveRadius, waveIndex) => (
                <motion.div
                  key={waveIndex}
                  className="absolute top-1/2 left-1/2 border border-white/10"
                  style={{
                    width: waveRadius * 2 * 0.6,
                    height: waveRadius * 2 * 0.6,
                    borderRadius: '50%',
                    marginLeft: -waveRadius * 0.6,
                    marginTop: -waveRadius * 0.6,
                    willChange: 'transform, opacity'
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0, 0.3]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: waveIndex * 1.3,
                    ease: "easeOut"
                  }}
                />
              ))}

            </div>

            <div className="relative z-100">
              <div className="absolute inset-0 text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-[anzo2] text-white/20 blur-sm">
                <span className="font-[anzo3] italic block mb-1 sm:mb-2">Hey There,</span>
                <span>I'm Aayush!</span>
              </div>
              
              <h1 className="relative text-5xl sm:text-5xl md:text-6xl lg:text-6xl font-[anzo2] leading-tight">
                <span className="font-[anzo3] italic text-white/90 block mb-1 sm:mb-2 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                  Hey There,
                </span> 
                <span className="text-white font-bold drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                  I'm Aayush!
                </span>
              </h1>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="h-px w-8 sm:w-12 md:w-16 lg:w-20 bg-gradient-to-r from-white via-white/60 to-transparent"></div>
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full animate-pulse"></div>
              <div className="h-px w-4 sm:w-6 md:w-8 lg:w-12 bg-gradient-to-r from-white/60 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Main Image - Centered on x-axis and fixed to bottom */}
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 h-3/5 sm:h-4/5 w-max">
          <div className="relative h-full">
            
            {/* Optimized Liquid Glass Background - Responsive scaling */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              
              <motion.div
                className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: '500px',
                  height: '500px',
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
                  borderRadius: '48% 52% 68% 32% / 42% 68% 32% 58%',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: `
                    inset 0 1px 0 rgba(255,255,255,0.1),
                    0 20px 40px rgba(0,0,0,0.3),
                    0 0 80px rgba(255,255,255,0.05)
                  `,
                  willChange: 'transform'
                }}
                animate={{
                  borderRadius: [
                    '48% 52% 68% 32% / 42% 68% 32% 58%',
                    '52% 48% 32% 68% / 68% 32% 58% 42%',
                    '32% 68% 48% 52% / 58% 42% 68% 32%',
                    '68% 32% 52% 48% / 32% 58% 42% 68%',
                    '48% 52% 68% 32% / 42% 68% 32% 58%'
                  ],
                  scale: [1, 1.05, 0.98, 1.02, 1],
                  rotateZ: [0, 5, -3, 2, 0]
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Secondary Glass Elements - Hidden on mobile */}
              <motion.div
                className="hidden md:block absolute top-1/4 right-1/4"
                style={{
                  width: '120px',
                  height: '150px',
                  background: 'linear-gradient(125deg, rgba(255,255,255,0.06), rgba(255,255,255,0.01))',
                  borderRadius: '65% 35% 45% 55% / 38% 62% 38% 62%',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 10px 30px rgba(0,0,0,0.2)',
                  willChange: 'transform'
                }}
                animate={{
                  borderRadius: [
                    '65% 35% 45% 55% / 38% 62% 38% 62%',
                    '35% 65% 55% 45% / 62% 38% 62% 38%',
                    '45% 55% 65% 35% / 38% 62% 38% 62%',
                    '55% 45% 35% 65% / 62% 38% 62% 38%',
                    '65% 35% 45% 55% / 38% 62% 38% 62%'
                  ],
                  y: [0, -20, 10, -5, 0],
                  rotateZ: [0, -8, 4, -2, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />

              <motion.div
                className="hidden md:block absolute bottom-1/3 left-1/5"
                style={{
                  width: '90px',
                  height: '108px',
                  background: 'linear-gradient(165deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
                  borderRadius: '42% 58% 38% 62% / 55% 45% 65% 35%',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 25px rgba(0,0,0,0.15)',
                  willChange: 'transform'
                }}
                animate={{
                  borderRadius: [
                    '42% 58% 38% 62% / 55% 45% 65% 35%',
                    '58% 42% 62% 38% / 45% 55% 35% 65%',
                    '38% 62% 42% 58% / 65% 35% 55% 45%',
                    '62% 38% 58% 42% / 35% 65% 45% 55%',
                    '42% 58% 38% 62% / 55% 45% 65% 35%'
                  ],
                  x: [0, 15, -10, 5, 0],
                  rotateZ: [0, 6, -4, 3, 0]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />

              {/* Glass Reflection Lines - Simplified */}
              <motion.div
                className="absolute top-1/3 left-1/3"
                style={{
                  width: '120px',
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                  borderRadius: '2px',
                  transform: 'rotate(25deg)',
                  willChange: 'transform, opacity'
                }}
                animate={{
                  opacity: [0, 0.8, 0.3, 0.8, 0],
                  scaleX: [0.5, 1.2, 0.8, 1, 0.5]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.div
                className="hidden md:block absolute bottom-1/2 right-1/3"
                style={{
                  width: '100px',
                  height: '1px',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)',
                  borderRadius: '1px',
                  transform: 'rotate(-15deg)',
                  willChange: 'transform, opacity'
                }}
                animate={{
                  opacity: [0, 0.6, 0.2, 0.6, 0],
                  scaleX: [0.3, 1, 0.7, 0.9, 0.3]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              />

              <div
                className="absolute inset-0"
                style={{
                  background: `
                    radial-gradient(circle at 30% 20%, rgba(255,255,255,0.03) 0%, transparent 50%),
                    radial-gradient(circle at 70% 80%, rgba(255,255,255,0.02) 0%, transparent 40%),
                    radial-gradient(circle at 20% 70%, rgba(255,255,255,0.025) 0%, transparent 35%)
                  `,
                  filter: 'blur(40px)'
                }}
              />
            </div>

            <img 
              src="pfp.png" 
              alt="" 
              className="h-full w-auto object-cover relative z-10"
              style={{
                filter: 'brightness(1.1) contrast(1.1)',
                willChange: 'auto'
              }}
            />
          </div>
        </div>

        {/* Skills Section - Responsive positioning and text */}
        <div className="absolute bottom-32 sm:bottom-40 lg:bottom-45 left-4 sm:left-8 lg:left-16 w-full sm:w-3/5 lg:w-2/5 invisible lg:visible mb-4 sm:mb-6 lg:mb-8 pr-4 sm:pr-8 lg:pr-0">
          <div className="space-y-2 sm:space-y-3 lg:space-y-4">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-[anzo2] text-white/90 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Everyday's A New Lesson
            </h2>
            <p className="font-[anzo3] text-xs sm:text-sm text-white/70 leading-relaxed">
              Skills are honed through experience, and knowledge<br className="hidden sm:block" />
              is constantly expanded through every project and certification.
            </p>
          </div>
        </div>

        {/* TiltText - Responsive positioning */}
        <div className="absolute aver invisible rotate-0 lg:rotate-0 lg:top-145 md:rotate-90 md:-left-100 md:top-60 lg:visible md:visible bottom-12 sm:bottom-16 lg:bottom-20 sm:left-8 lg:left-8">
          <div className="scale-75 md:scale-110 sm:scale-90 lg:scale-100 origin-left">
            <TiltText />
          </div>
        </div>

        {/* Speech Component - Responsive positioning and sizing */}
        <div className="absolute top-60 w-[720px] md:top-60 md:left-50 sm:top-80 lg:top-50 -left-4 sm:left-0 lg:left-[55%]  pr-4 sm:pr-0 sm:transform-translate-x-1/2 lg:translate-x-0">
          <div className="scale-80 sm:scale-90 lg:scale-100">
            <Speech />
          </div>
        </div>

        {/* Solar System - Responsive positioning */}
        <div className="absolute -bottom-15 right-20 md:-bottom-0 md:right-68 sm:bottom-40 lg:bottom-25 sm:right-12 lg:right-17 z-10">
          <div className="scale-75 md:scale-100 sm:scale-90 lg:scale-100">
            <SolarSystem />
          </div>
        </div>
      </div>

      {/* Optimized floating particles with memoization - Reduce count on mobile */}
      {staticParticles.slice(0, window.innerWidth < 640 ? 8 : 15).map((particle) => (
        <div
          key={particle.id}
          className="absolute pointer-events-none"
          style={{
            width: `${particle.width}px`,
            height: `${particle.height}px`,
            background: `rgba(255, 255, 255, ${particle.opacity})`,
            top: `${particle.top}%`,
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            animationName: 'float-monochrome',
            animationDuration: `${particle.duration}s`,
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            boxShadow: `0 0 ${particle.blur}px rgba(255, 255, 255, 0.3)`,
            borderRadius: particle.isCircle ? '50%' : '0%',
            zIndex: 5,
            willChange: 'transform'
          }}
        />
      ))}

      {/* Add required CSS animations */}
      <style jsx>{`
        @keyframes float-monochrome {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          25% { transform: translateY(-20px) rotate(90deg); opacity: 0.8; }
          50% { transform: translateY(-40px) rotate(180deg); opacity: 0.6; }
          75% { transform: translateY(-20px) rotate(270deg); opacity: 0.8; }
        }

        @keyframes pulse-custom {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        @keyframes grid-drift {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(-120px) translateY(-120px); }
        }

        @keyframes pulseGlow {
          0%, 100% { 
            box-shadow: 0 0 25px rgba(255,70,70,0.6);
            transform: rotate(90deg) scale(1);
          }
          50% { 
            box-shadow: 0 0 40px rgba(255,70,70,0.9);
            transform: rotate(90deg) scale(1.05);
          }
        }

        /* Mobile-specific adjustments */
        @media (max-width: 640px) {
          .front {
            padding-bottom: 2rem;
          }
          
          /* Adjust galaxy animation for mobile performance */
          .absolute[style*="willChange"] {
            animation-duration: 1.5s !important;
          }
          
          /* Reduce blur effects on mobile */
          .blur-3xl {
            filter: blur(20px) !important;
          }
          
          .blur-2xl {
            filter: blur(15px) !important;
          }
        }

        /* Tablet adjustments */
        @media (min-width: 641px) and (max-width: 1024px) {
          .front {
            padding-bottom: 1rem;
          }
        }

        /* Hide complex animations on smaller screens for performance */
        @media (max-width: 480px) {
          .animate-spin,
          .animate-pulse {
            animation-duration: 3s !important;
          }
          
          /* Simplify galaxy animation */
          motion div {
            animation-duration: 2s !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Front;