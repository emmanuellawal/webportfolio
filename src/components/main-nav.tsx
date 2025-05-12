"use client"

import { useState } from "react"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

export function MainNav() {
  const routes = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Me" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "My Playground" },
    { href: "#contact", label: "Contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="flex items-center justify-between w-full py-4 px-4 md:px-8 max-w-7xl mx-auto">
        <button 
          onClick={() => scrollToSection('#home')} 
          className="text-xl font-mono font-bold relative group flex items-center gap-2"
        >
          <div className="relative w-6 h-6">
            <Image
              src="/celestial-gear.svg"
              alt="Logo"
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
          <div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
              Emmanuel
            </span>
            <span className="text-accent-500">.dev</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:w-full transition-all duration-300"></span>
          </div>
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {routes.map((route) => (
            <button 
              key={route.href}
              onClick={() => scrollToSection(route.href)}
              className="relative text-base font-medium group cursor-pointer"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-primary-500">
                {route.label}
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </div>
        
        {/* Mobile Navigation - NavDrawer */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button 
                aria-label="Open menu" 
                className="p-2 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm shadow-sm hover:bg-primary-50 transition-colors"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 max-w-[90vw] bg-gradient-subtle backdrop-blur-md border-l border-border/50">
              <SheetHeader className="border-b border-border/50 px-6 py-4">
                <SheetTitle className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2 py-6 px-6">
                {routes.map((route) => (
                  <button
                    key={route.href}
                    onClick={() => {
                      scrollToSection(route.href);
                      const sheet = document.querySelector('[data-state="open"]');
                      if (sheet) {
                        const closeButton = sheet.querySelector('button[aria-label="Close"]');
                        if (closeButton && closeButton instanceof HTMLButtonElement) {
                          closeButton.click();
                        }
                      }
                    }}
                    className="block w-full rounded-lg px-4 py-3 text-base font-medium text-left hover:bg-primary-500/10 hover:text-primary-500 transition-colors"
                  >
                    {route.label}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}