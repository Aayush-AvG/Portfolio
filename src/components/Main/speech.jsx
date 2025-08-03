import React, { useEffect, useState, } from 'react';

const Speech = (props) => {
      const words = ["Dream Big", "Build Bold", "Create Magic", "Inspire Change"];
  const [text, setText] = useState(''); 
  const [isDeleting, setIsDeleting] = useState(false); 
  const [wordIndex, setWordIndex] = useState(0); 
  const [speed, setSpeed] = useState(100); 

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      setText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );
      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000); 
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
      setSpeed(isDeleting ? 50 : 50);
    };
    const typingTimeout = setTimeout(handleTyping, speed);
    return () => clearTimeout(typingTimeout); 
  }, [text, isDeleting, speed, wordIndex, words]);
  return (
    <div className='flex justify-center items-center w-1/2 gap-10'>
      <div className="bg-zinc-300 text-zinc-600 w-full h-[80px] italic rounded-bl-2xl font-[anzo3] text-center py-4 text-2xl rounded-tr-2xl p-3">{text} <br />
        <span className='blinking-cursor text-base text-black'>Because it all starts with you!</span>
      </div>

      <div className="relative inline-block">
        <div className="absolute inset-0 rounded-full border-2 border-amber-100/40 animate-ping"></div>
        <div className="absolute inset-0 rounded-full border-2 border-amber-100/35 animate-ping" style={{animationDelay: '0.2s'}}></div>
        <div className="absolute inset-0 rounded-full border-2 border-amber-100/35 animate-ping" style={{animationDelay: '0.9s'}}></div>
        <div className="absolute inset-0 rounded-full border-2 border-amber-100/30 animate-ping" style={{animationDelay: '1.6s'}}></div>
        <div className="absolute inset-0 rounded-full border-2 border-amber-100/35 animate-ping" style={{animationDelay: '2.3s'}}></div>
        <div className="absolute inset-0 rounded-full border-2 border-amber-100/25 animate-ping" style={{animationDelay: '3s'}}></div>
        <div className="absolute inset-0 rounded-full border-2 border-amber-100/20 animate-ping" style={{animationDelay: '3.7s'}}></div>
       
        {/* Outer glow shadow */}
        <div className="absolute inset-0 rounded-full bg-amber-100/20 blur-md animate-pulse"></div>
        
        {/* Main image */}
        <img 
          src="pfp.png" 
          alt="" 
          className="relative z-10 rounded-full border-amber-100 border-2 w-25 shadow-lg shadow-amber-100/50 hover:w-30 hover:shadow-xl hover:shadow-amber-100/70 transition-all duration-300"
        />
      </div>
    </div>
  )
}
export default Speech;