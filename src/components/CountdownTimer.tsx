
import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  // Set launch date to 30 days from now
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);
  
  const calculateTimeLeft = () => {
    const difference = +launchDate - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  };
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="grid grid-cols-4 gap-4 md:gap-6 opacity-0 animate-slide-up-delay-300">
      <TimeUnit value={timeLeft.days} label="DAYS" delay={0} />
      <TimeUnit value={timeLeft.hours} label="HOURS" delay={0.1} />
      <TimeUnit value={timeLeft.minutes} label="MINS" delay={0.2} />
      <TimeUnit value={timeLeft.seconds} label="SECS" delay={0.3} />
    </div>
  );
};

const TimeUnit = ({ value, label, delay }: { value: number, label: string, delay: number }) => {
  return (
    <div 
      className="flex flex-col items-center transform transition-all hover:scale-105 duration-300" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div 
        className="bg-white/20 backdrop-blur-lg rounded-lg shadow-lg px-2 py-3 md:px-5 md:py-6 w-full border border-arabfunded-purple/30 transition-all duration-500"
        style={{ 
          backdropFilter: 'blur(8px)',
          boxShadow: '0 8px 32px rgba(143, 92, 255, 0.15)'
        }}
      >
        <div 
          className="text-2xl md:text-4xl font-bold text-white text-center countdown-value transition-all duration-300"
          style={{ textShadow: '0 0 10px rgba(143, 92, 255, 0.5)' }}
        >
          {value.toString().padStart(2, '0')}
        </div>
      </div>
      <div className="text-xs md:text-sm font-semibold text-white mt-2">
        {label}
      </div>
    </div>
  );
};

export default CountdownTimer;
