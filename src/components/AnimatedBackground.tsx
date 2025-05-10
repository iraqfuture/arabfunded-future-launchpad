
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Purple glow in bottom left */}
      <div 
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-arabfunded-glowPurple to-arabfunded-lightBg opacity-40 blur-3xl animate-pulse-glow"
      />
      
      {/* Rotating circle elements */}
      <div className="absolute top-16 right-16 w-96 h-96 animate-rotate-slow opacity-10">
        <div className="absolute inset-0 border-2 border-arabfunded-purple rounded-full" />
        <div className="absolute inset-[25%] border-2 border-arabfunded-darkPurple rounded-full" />
        <div className="absolute inset-[50%] border-2 border-arabfunded-purple rounded-full" />
      </div>
      
      {/* Dots pattern background */}
      <div className="absolute inset-0 dots-bg opacity-50" />
      
      {/* Floating elements */}
      <div className="absolute top-24 left-1/4 w-6 h-6 rounded-full bg-arabfunded-lightPink animate-float opacity-70" />
      <div className="absolute bottom-32 right-1/4 w-10 h-10 rounded-full border-2 border-arabfunded-purple animate-float opacity-50" style={{ animationDelay: '-2s' }} />
      <div className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-arabfunded-lightPink animate-float opacity-40" style={{ animationDelay: '-4s' }} />
    </div>
  );
};

export default AnimatedBackground;
