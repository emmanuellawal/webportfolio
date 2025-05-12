'use client';

import { motion } from 'framer-motion';
import { Clock, Calendar, ThumbsUp, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { ScrollButton } from '@/components/ScrollButton';

const AvailabilitySection = () => {
  const [remainingSpots, setRemainingSpots] = useState(2);
  
  // Data for displaying authority credentials
  const credentials = [
    {
      title: "10+ Years",
      description: "Professional Experience",
      icon: <Clock className="h-5 w-5 text-secondary-500" />
    },
    {
      title: "45+ Clients",
      description: "Successful Collaborations",
      icon: <ThumbsUp className="h-5 w-5 text-secondary-500" />
    },
    {
      title: "July 2024",
      description: "Next availability",
      icon: <Calendar className="h-5 w-5 text-secondary-500" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background/80 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          {/* Scarcity indicator - Limited available spots */}
          <div className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-6 mb-8 text-center">
            <div className="inline-flex items-center gap-2 bg-primary-500/20 px-3 py-1 rounded-full mb-4">
              <AlertTriangle className="h-4 w-4 text-primary-500" />
              <span className="text-sm font-medium text-primary-500">Limited Availability</span>
            </div>
            
            <h2 className="text-3xl font-bold mb-3">Currently accepting select projects</h2>
            <p className="text-medium-contrast mb-6 max-w-xl mx-auto">
              Due to high demand and my commitment to delivering exceptional quality, 
              I only take on a limited number of projects each quarter.
            </p>
            
            <div className="bg-background/50 backdrop-blur-sm rounded-lg p-4 inline-block">
              <div className="text-center">
                <span className="text-4xl font-bold text-primary-500">{remainingSpots}</span>
                <span className="text-lg text-medium-contrast"> project slots remaining this quarter</span>
              </div>
            </div>
          </div>
          
          {/* Authority indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {credentials.map((credential, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card/40 backdrop-blur-sm rounded-lg p-5 flex items-center gap-4 border border-border/50"
              >
                <div className="p-3 bg-background/50 rounded-lg">
                  {credential.icon}
                </div>
                <div>
                  <h3 className="font-bold text-xl">{credential.title}</h3>
                  <p className="text-medium-contrast text-sm">{credential.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-medium mb-6">
              Interested in working together?
            </h3>
            <ScrollButton
              targetId="#contact"
              className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:opacity-90 hover-lift glow px-8"
              size="lg"
            >
              Reserve Your Consultation
            </ScrollButton>
            <p className="mt-4 text-sm text-medium-contrast">
              Free 30-minute discovery calls to discuss your project needs
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AvailabilitySection; 