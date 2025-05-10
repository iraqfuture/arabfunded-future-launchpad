
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const NotificationForm = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error("الرجاء إدخال بريد إلكتروني صحيح");
      return;
    }
    
    setIsLoading(true);
    
    // Simulating API call
    setTimeout(() => {
      toast.success("شكراً! سنعلمك عند إطلاق المنصة.");
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };
  
  return (
    <div className="w-full max-w-md opacity-0 animate-slide-up-delay-600">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-4">
        <Input
          type="email"
          placeholder="أدخل بريدك الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/20 backdrop-blur-lg border-arabfunded-purple placeholder:text-white/70"
          dir="rtl"
        />
        <Button 
          type="submit" 
          className="bg-arabfunded-darkPurple hover:bg-arabfunded-purple text-white transition-all duration-300 transform hover:scale-105 hover:shadow-glow"
          disabled={isLoading}
        >
          {isLoading ? "جاري الإرسال..." : "أعلمني عند الإطلاق"}
        </Button>
      </form>
      <p className="text-center text-white/90 text-sm">
        أو تواصل معنا مباشرة: <a href="mailto:contact@arabfunded.com" className="text-arabfunded-purple hover:underline">contact@arabfunded.com</a>
      </p>
    </div>
  );
};

export default NotificationForm;
