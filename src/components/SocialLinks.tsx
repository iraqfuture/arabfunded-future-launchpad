
import React from 'react';
import { Instagram } from "lucide-react";
import { TikTok } from "./TikTok";
import { XLogo } from "./XLogo";

const SocialLinks = () => {
  return (
    <div className="flex space-x-4 opacity-0 animate-fade-in-delay-300">
      <SocialLink href="https://www.instagram.com/arab.funded/" icon={<Instagram size={20} />} />
      <SocialLink href="https://x.com/ArabFunded" icon={<XLogo size={20} />} />
      <SocialLink href="https://www.tiktok.com/@arabfunded" icon={<TikTok size={20} />} />
    </div>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-arabfunded-purple text-arabfunded-purple hover:bg-arabfunded-purple hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-glow"
    >
      {icon}
    </a>
  );
};

export default SocialLinks;
