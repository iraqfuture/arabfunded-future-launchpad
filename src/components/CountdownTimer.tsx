
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
      <TimeUnit value={timeLeft.days} label="DAYS" />
      <TimeUnit value={timeLeft.hours} label="HOURS" />
      <TimeUnit value={timeLeft.minutes} label="MINS" />
      <TimeUnit value={timeLeft.seconds} label="SECS" />
    </div>
  );
};

const TimeUnit = ({ value, label }: { value: number, label: string }) => {
  return (
    <div className="flex flex-col items-center animate-float" style={{ animationDelay: `${Math.random() * 2}s` }}>
      <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-lg px-2 py-3 md:px-5 md:py-6 w-full">
        <div className="text-2xl md:text-4xl font-bold text-arabfunded-purple text-center">
          {value.toString().padStart(2, '0')}
        </div>
      </div>
      <div className="text-xs md:text-sm font-semibold text-arabfunded-textGray mt-2">
        {label}
      </div>
    </div>
  );
};

export default CountdownTimer;
