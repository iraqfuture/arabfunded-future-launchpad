
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const NotificationForm = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error("الرجاء إدخال بريد إلكتروني صحيح");
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Store email in localStorage to persist it
      const existingEmails = JSON.parse(localStorage.getItem('subscribedEmails') || '[]');
      
      // Check if email already exists
      if (existingEmails.includes(email)) {
        toast.info("هذا البريد الإلكتروني مسجل بالفعل");
        setIsLoading(false);
        return;
      }
      
      // Add new email to the list
      existingEmails.push(email);
      localStorage.setItem('subscribedEmails', JSON.stringify(existingEmails));
      
      // You could add an API call here to send the email to your backend
      // For example:
      // await fetch('https://your-api.com/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // });
      
      toast.success("شكراً! سنعلمك عند إطلاق المنصة.");
      setEmail('');
    } catch (error) {
      console.error("Error saving email:", error);
      toast.error("حدث خطأ أثناء حفظ بريدك الإلكتروني، يرجى المحاولة مرة أخرى");
    } finally {
      setIsLoading(false);
    }
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
