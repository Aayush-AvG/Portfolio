// import React, { useEffect, useRef, useState, useMemo } from 'react';

// const FuturisticContactForm = () => {
//   const formRef = useRef(null);
//   const containerRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);
  
//   // Form state
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
  
//   const [errors, setErrors] = useState({});

//   // Memoized floating particles - matching your Front component style
//   const staticParticles = useMemo(() => {
//     return [...Array(12)].map((_, i) => ({
//       id: i,
//       width: 1 + Math.random() * 2,
//       height: 1 + Math.random() * 2,
//       opacity: 0.2 + Math.random() * 0.4,
//       top: Math.random() * 100,
//       left: Math.random() * 100,
//       delay: Math.random() * 8,
//       duration: 6 + Math.random() * 10,
//       blur: 5 + Math.random() * 15,
//       isCircle: i % 2 === 0
//     }));
//   }, []);

//   // Animation trigger
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !isVisible) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }

//     return () => observer.disconnect();
//   }, [isVisible]);

//   const validateForm = () => {
//     const newErrors = {};
    
//     if (!formData.name.trim()) {
//       newErrors.name = 'Name is required';
//     }
    
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/^\S+@\S+$/i.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email';
//     }
    
//     if (!formData.subject.trim()) {
//       newErrors.subject = 'Subject is required';
//     }
    
//     if (!formData.message.trim()) {
//       newErrors.message = 'Message is required';
//     } else if (formData.message.length < 10) {
//       newErrors.message = 'Message must be at least 10 characters';
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }));
    
//     if (errors[field]) {
//       setErrors(prev => ({
//         ...prev,
//         [field]: ''
//       }));
//     }
//   };

//   const handleSubmit = async () => {
//     if (!validateForm()) return;
    
//     setIsSubmitting(true);
//     setSubmitStatus(null);

//     try {
//       const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setSubmitStatus('success');
//         setFormData({ name: '', email: '', subject: '', message: '' });
//       } else {
//         setSubmitStatus('error');
//       }
//     } catch (error) {
//       setSubmitStatus('error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div 
//       ref={containerRef}
//       className="h-screen snap-y snap-center snap-mandatory overflow-hidden relative flex flex-col lg:flex-row"
//       style={{
//         background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 15%, #1a1a1a 30%, #2a2a2a 45%, #1a1a1a 60%, #0f0f0f 80%, #000000 100%)',
//         willChange: 'auto'
//       }}
//     >
//       {/* Background Elements - matching your Front component */}
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Geometric shapes */}
//         <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 border border-white/10 rotate-45" 
//              style={{
//                animation: 'spin 30s linear infinite',
//                transformOrigin: 'center',
//                willChange: 'transform'
//              }}>
//         </div>
//         <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-32 sm:w-48 lg:w-60 h-32 sm:h-48 lg:h-60 border border-white/8 rounded-full" 
//              style={{
//                animation: 'pulse-custom 4s ease-in-out infinite',
//                willChange: 'opacity'
//              }}>
//         </div>
//         <div className="absolute top-1/2 left-1/4 w-20 sm:w-32 lg:w-40 h-20 sm:h-32 lg:h-40 border border-white/6 transform rotate-12" 
//              style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}>
//         </div>
        
//         {/* Grid pattern */}
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `
//               linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
//               linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
//             `,
//             backgroundSize: '60px 60px, 120px 120px',
//             animation: 'grid-drift 50s linear infinite',
//             willChange: 'transform'
//           }} />
//         </div>

//         {/* Light rays */}
//         <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" 
//              style={{animation: 'pulse-custom 3s ease-in-out infinite'}}></div>
//         <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/8 to-transparent" 
//              style={{animation: 'pulse-custom 4s ease-in-out infinite', animationDelay: '1s'}}></div>
        
//         {/* Gradient orbs */}
//         <div className="absolute top-1/4 right-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-gradient-radial from-white/8 via-white/3 to-transparent rounded-full blur-3xl" 
//              style={{animation: 'pulse-custom 6s ease-in-out infinite', willChange: 'opacity'}}></div>
//         <div className="absolute bottom-1/3 left-1/5 w-36 sm:w-56 lg:w-72 h-36 sm:h-56 lg:h-72 bg-gradient-radial from-white/6 via-white/2 to-transparent rounded-full blur-2xl" 
//              style={{animation: 'pulse-custom 8s ease-in-out infinite', animationDelay: '3s', willChange: 'opacity'}}></div>
//       </div>

//       {/* Main Container - 50% width, left-sided */}
//       <div className="w-full max-w-6xl flex relative z-20 p-8">
//         <div className="w-1/2 pr-8">
//           <div
//             ref={formRef}
//             className={`
//               relative bg-gray-900 bg-opacity-50 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl
//               transition-all duration-1500 ease-out
//               ${isVisible 
//                 ? 'opacity-100 translate-y-0 scale-100' 
//                 : 'opacity-0 translate-y-20 scale-95'
//               }
//             `}
//             style={{
//               animation: isVisible ? 'slideInLeft 1.5s ease-out, formGlow 3s ease-in-out infinite alternate' : 'none',
//               boxShadow: `
//                 inset 0 1px 0 rgba(255,255,255,0.1),
//                 0 20px 40px rgba(0,0,0,0.3),
//                 0 0 80px rgba(255,255,255,0.05)
//               `
//             }}
//           >
//             {/* Decorative Corner Elements */}
//             <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/30 rounded-tl-3xl"></div>
//             <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/30 rounded-tr-3xl"></div>
//             <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/30 rounded-bl-3xl"></div>
//             <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/30 rounded-br-3xl"></div>

//             {/* Scanning line effect */}
//             <div className="absolute inset-0 overflow-hidden rounded-3xl">
//               <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-30 animate-scan"></div>
//             </div>

//             {/* Header */}
//             <div className="mb-8">
//               <h2 className="text-4xl font-bold text-white mb-2 drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">
//                 Get In Touch
//               </h2>
//               <p className="text-white/70 text-lg">Let's build something amazing together</p>
//               <div className="flex items-center mt-4 space-x-4">
//                 <div className="w-20 h-px bg-gradient-to-r from-white via-white/60 to-transparent"></div>
//                 <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
//                 <div className="w-12 h-px bg-gradient-to-r from-white/60 to-transparent"></div>
//               </div>
//             </div>

//             {/* Form Fields */}
//             <div className="space-y-6">
//               {/* Name Field */}
//               <div className={`relative ${isVisible ? 'animate-fadeInUp' : ''}`} style={{animationDelay: '0.3s'}}>
//                 <label className="block text-white/80 text-sm font-medium mb-2">
//                   Full Name
//                 </label>
//                 <div className="relative">
//                   <input
//                     type="text"
//                     value={formData.name}
//                     onChange={(e) => handleInputChange('name', e.target.value)}
//                     className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/50 focus:bg-black/40 transition-all duration-300 hover:border-white/30"
//                     placeholder="Your full name"
//                     style={{
//                       boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.02)'
//                     }}
//                   />
//                   <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 focus-within:opacity-100 transition-opacity duration-300"></div>
//                 </div>
//                 {errors.name && <p className="text-white/60 text-sm mt-1">{errors.name}</p>}
//               </div>

//               {/* Email Field */}
//               <div className={`relative ${isVisible ? 'animate-fadeInUp' : ''}`} style={{animationDelay: '0.5s'}}>
//                 <label className="block text-white/80 text-sm font-medium mb-2">
//                   Email Address
//                 </label>
//                 <div className="relative">
//                   <input
//                     type="email"
//                     value={formData.email}
//                     onChange={(e) => handleInputChange('email', e.target.value)}
//                     className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/50 focus:bg-black/40 transition-all duration-300 hover:border-white/30"
//                     placeholder="your@email.com"
//                     style={{
//                       boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.02)'
//                     }}
//                   />
//                   <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 focus-within:opacity-100 transition-opacity duration-300"></div>
//                 </div>
//                 {errors.email && <p className="text-white/60 text-sm mt-1">{errors.email}</p>}
//               </div>

//               {/* Subject Field */}
//               <div className={`relative ${isVisible ? 'animate-fadeInUp' : ''}`} style={{animationDelay: '0.7s'}}>
//                 <label className="block text-white/80 text-sm font-medium mb-2">
//                   Subject
//                 </label>
//                 <div className="relative">
//                   <input
//                     type="text"
//                     value={formData.subject}
//                     onChange={(e) => handleInputChange('subject', e.target.value)}
//                     className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/50 focus:bg-black/40 transition-all duration-300 hover:border-white/30"
//                     placeholder="What's this about?"
//                     style={{
//                       boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.02)'
//                     }}
//                   />
//                   <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 focus-within:opacity-100 transition-opacity duration-300"></div>
//                 </div>
//                 {errors.subject && <p className="text-white/60 text-sm mt-1">{errors.subject}</p>}
//               </div>

//               {/* Message Field */}
//               <div className={`relative ${isVisible ? 'animate-fadeInUp' : ''}`} style={{animationDelay: '0.9s'}}>
//                 <label className="block text-white/80 text-sm font-medium mb-2">
//                   Message
//                 </label>
//                 <div className="relative">
//                   <textarea
//                     rows={5}
//                     value={formData.message}
//                     onChange={(e) => handleInputChange('message', e.target.value)}
//                     className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/50 focus:bg-black/40 transition-all duration-300 resize-none hover:border-white/30"
//                     placeholder="Tell me about your project..."
//                     style={{
//                       boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.02)'
//                     }}
//                   />
//                   <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 focus-within:opacity-100 transition-opacity duration-300"></div>
//                 </div>
//                 {errors.message && <p className="text-white/60 text-sm mt-1">{errors.message}</p>}
//               </div>

//               {/* Submit Button */}
//               <div className={`${isVisible ? 'animate-fadeInUp' : ''}`} style={{animationDelay: '1.1s'}}>
//                 <button
//                   onClick={handleSubmit}
//                   disabled={isSubmitting}
//                   className="group relative w-full bg-white/10 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-lg border border-white/20 overflow-hidden transition-all duration-300 hover:bg-white/20 hover:border-white/40 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
//                   style={{
//                     boxShadow: `
//                       inset 0 1px 0 rgba(255,255,255,0.1),
//                       0 10px 30px rgba(0,0,0,0.3),
//                       0 0 40px rgba(255,255,255,0.05)
//                     `
//                   }}
//                 >
//                   <span className="relative z-10 flex items-center justify-center">
//                     {isSubmitting ? (
//                       <>
//                         <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
//                         Sending...
//                       </>
//                     ) : (
//                       <>
//                         Send Message
//                         <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
//                       </>
//                     )}
//                   </span>
//                   <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
//                   <div className="absolute -inset-1 bg-white/10 rounded-lg blur opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
//                 </button>
//               </div>

//               {/* Status Messages */}
//               {submitStatus === 'success' && (
//                 <div className="bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 px-4 py-3 rounded-lg animate-fadeInUp flex items-center">
//                   <span className="text-xl mr-2">✓</span>
//                   Message sent successfully! I'll get back to you soon.
//                 </div>
//               )}
//               {submitStatus === 'error' && (
//                 <div className="bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 px-4 py-3 rounded-lg animate-fadeInUp flex items-center">
//                   <span className="text-xl mr-2">✗</span>
//                   Something went wrong. Please try again.
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
        
//         {/* Right side - Decorative space */}
//         <div className="w-1/2 flex items-center justify-center relative">
//           <div className="text-center text-white/60 relative">
//             {/* Main code symbol */}
//             <div className="text-8xl mb-4 font-bold drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]" 
//                  style={{animation: 'pulse-custom 4s ease-in-out infinite'}}>
//               {'</>'}
//             </div>
//             <p className="text-xl mb-8 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">Let's Code Together</p>
            
//             {/* Floating Code Elements */}
//             <div className="absolute -top-20 -left-10 text-white/30 text-2xl" style={{animation: 'float-monochrome 6s ease-in-out infinite'}}>
//               {'{ }'}
//             </div>
//             <div className="absolute -bottom-10 -right-10 text-white/25 text-xl" style={{animation: 'float-monochrome 8s ease-in-out infinite', animationDelay: '2s'}}>
//               {'[ ]'}
//             </div>
//             <div className="absolute top-10 -right-20 text-white/20 text-lg" style={{animation: 'float-monochrome 10s ease-in-out infinite', animationDelay: '4s'}}>
//               {'< />'}
//             </div>
            
//             {/* Additional decorative elements */}
//             <div className="absolute top-1/2 -left-16 w-8 h-8 border border-white/20 rotate-45" style={{animation: 'spin 20s linear infinite'}}></div>
//             <div className="absolute bottom-1/3 right-0 w-6 h-6 border border-white/15 rounded-full" style={{animation: 'pulse-custom 3s ease-in-out infinite'}}></div>
//           </div>
//         </div>
//       </div>

//       {/* Floating particles - matching your Front component */}
//       {staticParticles.map((particle) => (
//         <div
//           key={particle.id}
//           className="absolute pointer-events-none"
//           style={{
//             width: `${particle.width}px`,
//             height: `${particle.height}px`,
//             background: `rgba(255, 255, 255, ${particle.opacity})`,
//             top: `${particle.top}%`,
//             left: `${particle.left}%`,
//             animationDelay: `${particle.delay}s`,
//             animationName: 'float-monochrome',
//             animationDuration: `${particle.duration}s`,
//             animationTimingFunction: 'ease-in-out',
//             animationIterationCount: 'infinite',
//             boxShadow: `0 0 ${particle.blur}px rgba(255, 255, 255, 0.3)`,
//             borderRadius: particle.isCircle ? '50%' : '0%',
//             zIndex: 5,
//             willChange: 'transform'
//           }}
//         />
//       ))}

//       <style jsx>{`
//         @keyframes slideInLeft {
//           from {
//             opacity: 0;
//             transform: translateX(-100px) scale(0.9);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0) scale(1);
//           }
//         }
        
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes formGlow {
//           from {
//             box-shadow: 
//               inset 0 1px 0 rgba(255,255,255,0.1),
//               0 20px 40px rgba(0,0,0,0.3),
//               0 0 80px rgba(255,255,255,0.05);
//           }
//           to {
//             box-shadow: 
//               inset 0 1px 0 rgba(255,255,255,0.15),
//               0 20px 40px rgba(0,0,0,0.3),
//               0 0 120px rgba(255,255,255,0.08);
//           }
//         }
        
//         @keyframes pulse-custom {
//           0%, 100% { opacity: 0.6; }
//           50% { opacity: 1; }
//         }

//         @keyframes grid-drift {
//           0% { transform: translateX(0) translateY(0); }
//           100% { transform: translateX(-120px) translateY(-120px); }
//         }
        
//         @keyframes float-monochrome {
//           0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
//           25% { transform: translateY(-20px) rotate(90deg); opacity: 0.8; }
//           50% { transform: translateY(-40px) rotate(180deg); opacity: 0.6; }
//           75% { transform: translateY(-20px) rotate(270deg); opacity: 0.8; }
//         }
        
//         @keyframes scan {
//           0% {
//             transform: translateY(-100px);
//           }
//           100% {
//             transform: translateY(500px);
//           }
//         }
        
//         .animate-fadeInUp {
//           animation: fadeInUp 0.8s ease-out forwards;
//           opacity: 0;
//         }
        
//         .animate-scan {
//           animation: scan 4s linear infinite;
//         }

//         .bg-gradient-radial {
//           background: radial-gradient(circle, var(--tw-gradient-stops));
//         }

//         /* Mobile responsiveness */
//         @media (max-width: 768px) {
//           .w-full.md\\:w-3\\/4.lg\\:w-1\\/2 {
//             width: 100% !important;
//           }
//           .pr-0.md\\:pr-6.lg\\:pr-8 {
//             padding-right: 0 !important;
//           }
//         }
        
//         @media (min-width: 768px) and (max-width: 1024px) {
//           .w-full.md\\:w-3\\/4.lg\\:w-1\\/2 {
//             width: 75% !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default FuturisticContactForm;