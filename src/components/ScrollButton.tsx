'use client';

import { Button } from "@/components/ui/button";

interface ScrollButtonProps {
  targetId: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  children: React.ReactNode;
}

export function ScrollButton({ targetId, variant = 'default', size = 'default', className, children }: ScrollButtonProps) {
  const scrollToSection = () => {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={scrollToSection}
    >
      {children}
    </Button>
  );
} 