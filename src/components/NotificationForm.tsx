
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
      toast.error("Please enter a valid email address");
      return;
    }
    
    setIsLoading(true);
    
    // Simulating API call
    setTimeout(() => {
      toast.success("Thanks! We'll notify you when we launch.");
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };
  
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md opacity-0 animate-slide-up-delay-600">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="أدخل بريدك الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white bg-opacity-80 border-arabfunded-purple placeholder:text-arabfunded-textGray"
          dir="rtl"
        />
        <Button 
          type="submit" 
          className="bg-arabfunded-darkPurple hover:bg-arabfunded-purple text-white transition-all duration-300 transform hover:scale-105"
          disabled={isLoading}
        >
          {isLoading ? "جاري الإرسال..." : "أعلمني عند الإطلاق"}
        </Button>
      </div>
    </form>
  );
};

export default NotificationForm;
