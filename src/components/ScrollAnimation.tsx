'use client';

import { useEffect, useRef, ReactNode, useState } from 'react';

type ScrollAnimationProps = {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'slide-in-right' | 'slide-in-left' | 'zoom-in';
  delay?: number;
  threshold?: number;
};

export function ScrollAnimation({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1,
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Set visibility state based on intersection
          setIsVisible(entry.isIntersecting);
          
          if (entry.isIntersecting) {
            // Add animation class when element enters viewport
            setTimeout(() => {
              entry.target.classList.add('animate');
            }, delay);
          } else {
            // Element is no longer in viewport, but we'll keep the animation state
            // No removal of the animate class to maintain consistent appearance when scrolling up
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px', // Adjusted to trigger animations a bit earlier
      }
    );
    
    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, threshold]);
  
  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-up':
        return 'sa-fade-up';
      case 'fade-in':
        return 'sa-fade-in';
      case 'slide-in-right':
        return 'sa-slide-in-right';
      case 'slide-in-left':
        return 'sa-slide-in-left';
      case 'zoom-in':
        return 'sa-zoom-in';
      default:
        return 'sa-fade-up';
    }
  };
  
  // We apply the animate class directly based on visibility state
  // This ensures the animation persists even when scrolling up
  return (
    <div 
      ref={ref} 
      className={`scroll-animation ${getAnimationClass()} ${isVisible ? 'animate' : ''} ${className}`}
    >
      {children}
    </div>
  );
} 