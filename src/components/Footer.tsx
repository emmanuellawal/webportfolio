'use client';

import Link from 'next/link'
import { Github, Linkedin, Mail, ArrowRight, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [commitmentChoice, setCommitmentChoice] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      // In a real implementation, you would send this to your API
      setEmail('')
    }
  }

  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-8">
        {/* Newsletter Signup - Using Commitment and Consistency */}
        {/* 
        <div className="mb-12 max-w-3xl mx-auto border border-primary-500/20 rounded-lg p-6 bg-primary-500/5">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold mb-2">Join the Innovation Journey</h3>
            <p className="text-medium-contrast max-w-xl mx-auto">
              Stay updated with the latest in tech and development. I share insights and resources that have helped me grow as a developer.
            </p>
          </div>
          
          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                {['Web Development', 'AI & ML', 'Career Growth'].map((topic) => (
                  <div 
                    key={topic}
                    onClick={() => setCommitmentChoice(topic)}
                    className={`cursor-pointer p-3 border rounded-md text-center transition-colors
                      ${commitmentChoice === topic 
                        ? 'border-primary-500 bg-primary-500/10 text-primary-500' 
                        : 'border-border/50 hover:border-primary-500/50 hover:bg-primary-500/5'
                      }`}
                  >
                    {topic}
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow bg-background/50"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-primary-500 hover:bg-primary-600 text-white"
                >
                  Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <p className="text-xs text-center text-medium-contrast mt-3">
                I respect your privacy and will never share your information.
                You can unsubscribe at any time.
              </p>
            </form>
          ) : (
            <div className="text-center p-4 bg-success-500/10 border border-success-500/20 rounded-md">
              <div className="flex items-center justify-center gap-2 text-success-500 mb-2">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Successfully subscribed!</span>
              </div>
              <p className="text-medium-contrast">
                Thank you for joining. Your first resource about {commitmentChoice} will arrive shortly.
              </p>
            </div>
          )}
        </div>
        */}
        
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {/* Navigation Links */}
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold">Navigation</h3>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">Home</Link>
              <Link href="/about" className="hover:text-foreground">About</Link>
              <Link href="/skills" className="hover:text-foreground">Skills</Link>
              <Link href="/projects" className="hover:text-foreground">Projects</Link>
              <Link href="/contact" className="hover:text-foreground">Contact</Link>
            </nav>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold">Resources</h3>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/vision" className="hover:text-foreground">Vision</Link>
              <Link href="/leadership" className="hover:text-foreground">Leadership</Link>
              <Link href="/projects" className="hover:text-foreground">Projects</Link>
            </nav>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold">Legal</h3>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-foreground">Terms of Service</Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold">Connect</h3>
            <div className="flex gap-4 text-muted-foreground">
              <a
                href="https://github.com/emmanuellawal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/emmanuel-lawal-98519718b/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:emmanuellawal2024@gmail.com"
                className="hover:text-foreground"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex items-center justify-center border-t border-border/40 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Emmanuel Lawal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 