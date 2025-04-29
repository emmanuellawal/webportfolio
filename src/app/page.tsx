import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, ArrowRight, Code, Server, Palette } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto space-y-16 pt-32 px-4">
        {/* Hero Section */}
        <div className="text-center space-y-6 max-w-[800px] mx-auto">
          <div className="relative inline-block">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 pb-2 glow">
              Emmanuel Lawal
            </h1>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full"></div>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">
            Full Stack Developer
          </h2>
          <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
            I craft exceptional digital experiences with modern technologies, focusing on scalable and user-centric solutions.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:opacity-90 hover-lift glow">
              <Link href="/projects">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover-lift border-primary-500/20 hover:border-primary-500 backdrop-blur-sm">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
          <div className="flex gap-4 justify-center pt-8">
            <Link href="https://github.com/emmanuellawal" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:bg-primary-500/10 hover:text-primary-500 hover-lift backdrop-blur-sm">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/emmanuel-lawal-98519718b/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:bg-secondary-500/10 hover:text-secondary-500 hover-lift backdrop-blur-sm">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="mailto:emmanuellawal2024@gmail.com">
              <Button variant="ghost" size="icon" className="hover:bg-accent-500/10 hover:text-accent-500 hover-lift backdrop-blur-sm">
                <Mail className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
          <Card className="hover-lift border-l-4 border-l-primary-500 group hover:border-l-primary-400 glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 group-hover:text-primary-500 transition-colors">
                <Code className="h-5 w-5" />
                Frontend Development
              </CardTitle>
              <CardDescription>Building beautiful interfaces</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-medium-contrast">
                React, Next.js, TypeScript, Tailwind CSS, and modern frontend tools to create responsive and accessible web applications.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift border-l-4 border-l-secondary-500 group hover:border-l-secondary-400 glow-secondary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 group-hover:text-secondary-500 transition-colors">
                <Server className="h-5 w-5" />
                Backend Development
              </CardTitle>
              <CardDescription>Powering the applications</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-medium-contrast">
                Node.js, Express, PostgreSQL, MongoDB, and RESTful APIs to build robust and scalable backend solutions.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift border-l-4 border-l-accent-500 group hover:border-l-accent-400 glow-accent">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 group-hover:text-accent-500 transition-colors">
                <Palette className="h-5 w-5" />
                UI/UX Design
              </CardTitle>
              <CardDescription>Creating experiences</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-medium-contrast">
                User-centered design principles, wireframing, prototyping, and modern design tools to create intuitive experiences.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Featured Projects Preview */}
        <div className="text-center space-y-8 py-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500 glow inline-block">
              Featured Projects
            </h2>
            <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience.
            </p>
          </div>
          <Button asChild size="lg" className="bg-gradient-to-r from-secondary-500 to-accent-500 hover:opacity-90 hover-lift glow-secondary">
            <Link href="/projects" className="flex items-center gap-2">
              View All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
