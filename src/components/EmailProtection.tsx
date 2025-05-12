'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    
    // Store in localStorage so it persists between scrolls and page refreshes
    localStorage.setItem('emailRevealed', 'true');
  };

  // Check localStorage on component mount
  useEffect(() => {
    const revealed = localStorage.getItem('emailRevealed');
    if (revealed === 'true') {
      setShowEmail(true);
    }
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };
  
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <AnimatePresence mode="wait">
        {!showEmail ? (
          <motion.div
            key="button"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
          >
            <Button 
              onClick={revealEmail} 
              variant="outline" 
              className="flex items-center gap-2 hover:bg-primary-500/10"
            >
              <Mail className="h-5 w-5" />
              <span>Show Email Address</span>
            </Button>
          </motion.div>
        ) : (
          <motion.div
            key="email"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            className="flex flex-col items-center gap-2"
          >
            <motion.p 
              className="text-medium-contrast"
              variants={itemVariants}
            >
              {emailUser}@{emailDomain}
            </motion.p>
            <motion.div variants={itemVariants}>
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 