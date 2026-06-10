'use client';

import Link from 'next/link'
import { Github, Linkedin, Mail, ArrowRight, CircleCheck as CheckCircle } from 'lucide-react'
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
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" role="contentinfo">
      <div className="container py-8">
        {/* Newsletter Signup - Using Commitment and Consistency */}
        {/*
        <div className="mb-12 max-w-3xl mx-auto border border-primary-500/20 rounded-lg p-6 bg-primary-500/5">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold mb-2">Join the Innovation Journey</h3>
            <p className="text-medium-contrast max-w-xl mx-auto">
              Stay updated with the latest in tech and development. I share insights and resources that have helped me grow as a developer.
            </p>

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
          <div>
            <h3 id="footer-nav-heading" className="text-sm font-semibold mb-2">Navigation</h3>
            <nav aria-labelledby="footer-nav-heading">
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground" role="list">
                <li><Link href="/" className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded">Home</Link></li>
                <li><Link href="/about" className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded">About</Link></li>
                <li><Link href="/skills" className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded">Skills</Link></li>
                <li><Link href="/projects" className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded">Projects</Link></li>
                <li><Link href="/contact" className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded">Contact</Link></li>
              </ul>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h3 id="footer-resources-heading" className="text-sm font-semibold mb-2">Resources</h3>
            <nav aria-labelledby="footer-resources-heading">
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground" role="list">
                <li><Link href="/vision" className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded">Vision</Link></li>
                <li><Link href="/leadership" className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded">Leadership</Link></li>
                <li><Link href="/projects" className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded">Projects</Link></li>
              </ul>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 id="footer-legal-heading" className="text-sm font-semibold mb-2">Legal</h3>
            <nav aria-labelledby="footer-legal-heading">
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground" role="list">
                <li><Link href="/privacy" className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded">Terms of Service</Link></li>
              </ul>
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h3 id="footer-social-heading" className="text-sm font-semibold mb-2">Connect</h3>
            <nav aria-label="Social media links" className="flex gap-4 text-muted-foreground">
              <a
                href="https://github.com/emmanuellawal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Emmanuel's GitHub profile (opens in new tab)"
                className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
              >
                <Github className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/emmanuel-lawal-98519718b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Emmanuel's LinkedIn profile (opens in new tab)"
                className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="mailto:emmanuellawal2024@gmail.com"
                aria-label="Send email to Emmanuel Lawal"
                className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
              </a>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex items-center justify-center border-t border-border/40 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Emmanuel Lawal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 