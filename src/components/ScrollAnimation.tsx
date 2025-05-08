'use client';

import { useEffect, useRef, ReactNode } from 'react';

type ScrollAnimationProps = {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'slide-in-right' | 'slide-in-left' | 'zoom-in';
  delay?: number;
  threshold?: number;
  once?: boolean;
};

export function ScrollAnimation({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1,
  once = true,
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate');
            }, delay);
            
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            entry.target.classList.remove('animate');
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px',
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
  }, [delay, once, threshold]);
  
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
  
  return (
    <div ref={ref} className={`scroll-animation ${getAnimationClass()} ${className}`}>
      {children}
    </div>
  );
} 