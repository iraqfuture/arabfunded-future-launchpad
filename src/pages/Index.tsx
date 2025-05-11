
import React, { useEffect } from 'react';
import { Toaster } from "sonner";
import AnimatedBackground from '@/components/AnimatedBackground';
import CountdownTimer from '@/components/CountdownTimer';
import NotificationForm from '@/components/NotificationForm';
import SocialLinks from '@/components/SocialLinks';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    document.title = "ArabFunded - Coming Soon";
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center p-4 md:p-6">
      <Toaster position="top-center" />
      <AnimatedBackground />
      
      <div className="container max-w-5xl mx-auto flex flex-col items-center justify-center z-10 py-8 md:py-12">
        {/* Logo */}
        <div className="mb-6 md:mb-8 opacity-0 animate-slide-up">
          <h1 className="text-3xl md:text-6xl font-bold text-white tracking-tight">
            Arab<span className="text-arabfunded-purple">Funded</span>
          </h1>
        </div>
        
        {/* Main heading */}
        <h2 className="text-2xl md:text-5xl font-bold text-center mb-4 md:mb-6 opacity-0 animate-slide-up">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-arabfunded-purple">
            حسابات التداول الممولة قادمة قريبًا
          </span>
        </h2>
        
        {/* Subheading */}
        <p className="text-base md:text-xl text-white text-center max-w-2xl mb-8 md:mb-10 opacity-0 animate-slide-up-delay-300">
          نحن نعمل بجد لإطلاق منصتنا. كن أول من يعلم عند إطلاق ArabFunded - شركة PropFirm الرائدة للحسابات التداول الممولة.
        </p>
        
        {/* Countdown timer */}
        <div className="w-full max-w-2xl mb-8 md:mb-10">
          <CountdownTimer />
        </div>
        
        {/* Notification form */}
        <div className="w-full flex justify-center mb-8 md:mb-12">
          <NotificationForm />
        </div>
        
        {/* Social links */}
        <div className="mt-4 md:mt-6">
          <SocialLinks />
        </div>
        
        {/* Copyright - Added ArabFunded copyright */}
        <div className="mt-8 text-white/70 text-xs md:text-sm opacity-0 animate-fade-in-delay-300">
          &copy; {new Date().getFullYear()} ArabFunded. جميع الحقوق محفوظة
        </div>
      </div>
    </div>
  );
};

export default Index;
