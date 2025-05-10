
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Purple space gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0628] via-[#2d1b69] to-[#100a2d]" />
      
      {/* Stars */}
      <div className="stars-small"></div>
      <div className="stars-medium"></div>
      <div className="stars-large"></div>
      
      {/* Purple glow in bottom left */}
      <div 
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-arabfunded-glowPurple to-arabfunded-lightBg opacity-50 blur-3xl animate-pulse-slow"
      />
      
      {/* Rotating circle elements */}
      <div className="absolute top-16 right-16 w-96 h-96 animate-rotate-slow opacity-20">
        <div className="absolute inset-0 border-2 border-arabfunded-purple rounded-full" />
        <div className="absolute inset-[25%] border-2 border-arabfunded-darkPurple rounded-full" />
        <div className="absolute inset-[50%] border-2 border-arabfunded-purple rounded-full" />
      </div>
      
      {/* Floating elements - nebulas and planets */}
      <div className="absolute top-24 left-1/4 w-8 h-8 rounded-full bg-arabfunded-lightPink bg-opacity-50 blur-sm animate-float-slow opacity-70" />
      <div className="absolute bottom-32 right-1/4 w-12 h-12 rounded-full border-2 border-arabfunded-purple animate-float-slow opacity-60" style={{ animationDelay: '-3s' }} />
      <div className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-arabfunded-lightPink bg-opacity-40 blur-sm animate-float-slow opacity-40" style={{ animationDelay: '-6s' }} />
      
      {/* Shooting stars */}
      <div className="shooting-star" style={{ top: '20%', left: '30%', animationDelay: '0s' }}></div>
      <div className="shooting-star" style={{ top: '60%', left: '70%', animationDelay: '4s' }}></div>
      <div className="shooting-star" style={{ top: '80%', left: '20%', animationDelay: '8s' }}></div>
    </div>
  );
};

export default AnimatedBackground;
