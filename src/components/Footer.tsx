import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col gap-8 py-8">
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
        <div className="flex items-center justify-center border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Emmanuel Lawal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 