
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#130c34] via-[#2a1166] to-[#150c38]" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 grid-bg"></div>
      
      {/* Floating orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>
      
      {/* Glowing circles */}
      <div className="absolute top-[10%] left-[15%] w-40 h-40 rounded-full bg-arabfunded-purple/20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-[20%] right-[10%] w-52 h-52 rounded-full bg-arabfunded-lightPink/20 blur-3xl animate-pulse-medium"></div>
      
      {/* Galaxy effect */}
      <div className="galaxy">
        <div className="galaxy-ring galaxy-ring-1"></div>
        <div className="galaxy-ring galaxy-ring-2"></div>
        <div className="galaxy-ring galaxy-ring-3"></div>
      </div>
      
      {/* Moving particles */}
      <div className="particles particles-1"></div>
      <div className="particles particles-2"></div>
      <div className="particles particles-3"></div>
      
      {/* Light rays */}
      <div className="light-ray light-ray-1"></div>
      <div className="light-ray light-ray-2"></div>
      <div className="light-ray light-ray-3"></div>
      
      {/* Holographic elements */}
      <div className="holographic-element h-element-1"></div>
      <div className="holographic-element h-element-2"></div>
      <div className="holographic-element h-element-3"></div>
      
      {/* Digital rain effect */}
      <div className="digital-rain"></div>
      
      {/* Animated wave */}
      <div className="wave-container">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>
      
      {/* Glowing panels */}
      <div className="panel panel-1"></div>
      <div className="panel panel-2"></div>
      <div className="panel panel-3"></div>
      
      {/* Purple glow in bottom */}
      <div 
        className="absolute -bottom-32 left-1/3 w-96 h-96 rounded-full bg-gradient-to-r from-arabfunded-purple to-arabfunded-glowPurple opacity-30 blur-3xl animate-pulse-slow"
      />
    </div>
  );
};

export default AnimatedBackground;
