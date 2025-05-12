'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Mail } from 'lucide-react';

interface EmailProtectionProps {
  className?: string;
}

export function EmailProtection({ className = "" }: EmailProtectionProps) {
  const [showEmail, setShowEmail] = useState(false);
  
  // The email is split into parts to avoid detection by scrapers
  const emailUser = "emmanuellawal2024";
  const emailDomain = "gmail.com";
  
  // Function to reveal the email when requested by a human
  const revealEmail = () => {
    setShowEmail(true);
  };

  // Email obfuscation using Base64 encoding
  const obfuscatedEmail = "ZW1tYW51ZWxsYXdhbDIwMjRAZ21haWwuY29t"; // Base64 encoded email
  
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      {!showEmail ? (
        <Button 
          onClick={revealEmail} 
          variant="outline" 
          className="flex items-center gap-2 hover:bg-primary-500/10"
        >
          <Mail className="h-5 w-5" />
          <span>Show Email Address</span>
        </Button>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <p className="text-medium-contrast">{emailUser}@{emailDomain}</p>
          <Button 
            asChild
            variant="outline" 
            className="flex items-center gap-2 hover:bg-primary-500/10"
          >
            <a 
              href={`mailto:${emailUser}@${emailDomain}`}
              className="flex items-center gap-2"
            >
              <Mail className="h-5 w-5" />
              <span>Send Email</span>
            </a>
          </Button>
        </div>
      )}
    </div>
  );
} 