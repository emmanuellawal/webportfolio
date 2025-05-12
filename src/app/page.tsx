'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, ArrowRight, Code, Server, Palette, User, Phone, Globe, Brain, Sparkles, Send } from "lucide-react";
import { ScrollButton } from "@/components/ScrollButton";
import { ContactDialog } from "@/components/ContactDialog";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import AvailabilitySection from "@/components/AvailabilitySection";
import Image from "next/image";

export default function Home() {
  const projects = [
    {
      title: "Three Decades of Mobility",
      description: "A data visualization project exploring the relationship between vehicle registration trends and cost of living over 30 years. Analyzes how areas with different housing costs show varying patterns of vehicle ownership using economic indicators like CPI.",
      image: "/projects/ai-calc.jpg",
      tags: ["React", "D3.js", "TypeScript", "Data Visualization", "Economic Analysis"],
      liveUrl: "https://visualization-project-iota.vercel.app/",
      githubUrl: "https://github.com/emmanuellawal/visualization_Project"
    },
    {
      title: "AI-Enhanced Calculator",
      description: "A modern calculator app built with Expo and React Native, featuring natural language processing powered by OpenAI's GPT-3.5-turbo. Supports conversational calculations and unit conversions.",
      image: "/projects/data-viz.jpg",
      tags: ["React Native", "Expo", "OpenAI API", "TypeScript", "Mobile Development"],
      liveUrl: "#",
      githubUrl: "https://github.com/emmanuellawal/expo-calculator-app"
    },
    {
      title: "Cultural AI",
      description: "A platform that leverages AI to provide cultural insights and recommendations. Features cultural content recommendations, AI-powered cultural analysis, and personalized user experiences. Built with React Native frontend and Node.js/Express backend with SQL Server integration.",
      image: "/projects/cultural-ai.jpg",
      tags: ["React Native", "Node.js", "SQL Server", "OpenAI", "Docker"],
      liveUrl: "#",
      githubUrl: "https://github.com/emmanuellawal/culturalai"
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <main className="container mx-auto space-y-32 px-4 relative">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-16">
          <ScrollAnimation animation="fade-up">
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
                <ScrollButton
                  targetId="#projects"
                  size="lg"
                  className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:opacity-90 hover-lift glow"
                >
                  View My Work
                </ScrollButton>
                <ScrollButton
                  targetId="#contact"
                  variant="outline"
                  size="lg"
                  className="hover-lift border-primary-500/20 hover:border-primary-500 backdrop-blur-sm"
                >
                  Get in Touch
                </ScrollButton>
              </div>
              <div className="flex gap-4 justify-center pt-8">
                <a href="https://github.com/emmanuellawal" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="hover:bg-primary-500/10 hover:text-primary-500 hover-lift backdrop-blur-sm">
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/emmanuel-lawal-98519718b/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="hover:bg-secondary-500/10 hover:text-secondary-500 hover-lift backdrop-blur-sm">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
                <a href="mailto:emmanuellawal2024@gmail.com">
                  <Button variant="ghost" size="icon" className="hover:bg-accent-500/10 hover:text-accent-500 hover-lift backdrop-blur-sm">
                    <Mail className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </section>

        {/* About Section - Enhanced with Liking principle */}
        <section id="about" className="py-16">
          <div className="text-center space-y-12 max-w-4xl mx-auto">
            <ScrollAnimation animation="fade-up">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500 glow inline-block">
                  About Me
                </h2>
                <p className="text-lg text-medium-contrast">
                  Crafting the future through code and artificial intelligence.
                </p>
              </div>
            </ScrollAnimation>
            
            {/* Personal image - Adding human element to increase likability */}
            <ScrollAnimation animation="fade-in" delay={100}>
              <div className="relative w-48 h-48 mx-auto mb-8">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 blur-lg opacity-50"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background">
                  <Image 
                    src="/profile-photo.jpg" 
                    alt="Emmanuel Lawal" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollAnimation>
            
            {/* Common ground/values - Highlighting relatable qualities */}
            <ScrollAnimation animation="fade-in" delay={200}>
              <div className="bg-card/40 backdrop-blur-sm p-5 rounded-lg border border-border/50 max-w-2xl mx-auto mb-8">
                <p className="text-medium-contrast leading-relaxed">
                  Beyond coding, I'm passionate about <span className="text-primary-500 font-medium">music production</span>, 
                  exploring the latest <span className="text-secondary-500 font-medium">AI research papers</span>, and enjoying 
                  <span className="text-accent-500 font-medium"> hiking trips</span> that clear my mind for better problem-solving.
                  I believe the best solutions come from balancing technical expertise with creative thinking.
                </p>
              </div>
            </ScrollAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollAnimation animation="slide-in-left" delay={100}>
                <Card className="text-left p-6 bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary-500/10">
                      <Code className="h-6 w-6 text-primary-500" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">Development Journey</h3>
                      <p className="text-medium-contrast">
                        As a Full Stack Developer and Information Systems student at NJIT, 
                        I've cultivated a deep understanding of both frontend and backend technologies. 
                        My approach combines technical expertise with a keen eye for user experience.
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation animation="slide-in-right" delay={200}>
                <Card className="text-left p-6 bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-secondary-500/10">
                      <Brain className="h-6 w-6 text-secondary-500" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">AI Innovation & Research</h3>
                      <p className="text-medium-contrast">
                        I'm deeply passionate about artificial intelligence and its potential to transform software development. 
                        I actively integrate AI technologies into my projects, from natural language processing to intelligent automation.
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation animation="slide-in-left" delay={300}>
                <Card className="text-left p-6 bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent-500/10">
                      <Sparkles className="h-6 w-6 text-accent-500" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">Innovation Focus</h3>
                      <p className="text-medium-contrast">
                        My goal is to push the boundaries of what's possible in web development. 
                        I'm constantly exploring new technologies and methodologies to create more 
                        intelligent and efficient solutions.
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation animation="slide-in-right" delay={400}>
                <Card className="text-left p-6 bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary-500/10">
                      <Server className="h-6 w-6 text-primary-500" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">Technical Expertise</h3>
                      <p className="text-medium-contrast">
                        With a strong foundation in modern web technologies and AI frameworks, 
                        I specialize in creating scalable applications that leverage the power 
                        of artificial intelligence and machine learning.
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollAnimation>
            </div>

            <ScrollAnimation animation="fade-in" delay={500}>
              <div className="max-w-2xl mx-auto bg-card/40 backdrop-blur-sm rounded-lg p-6 border border-border/50">
                <p className="text-lg text-medium-contrast italic">
                  "I believe in the transformative power of combining traditional software development 
                  with artificial intelligence to create solutions that not only meet current needs 
                  but anticipate future challenges."
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <ScrollAnimation animation="fade-up">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500 glow inline-block">
                My Skills
              </h2>
              <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
                Here are the key areas where I excel and the technologies I work with.
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollAnimation animation="fade-up" delay={100}>
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
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={200}>
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
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={300}>
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
            </ScrollAnimation>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <ScrollAnimation animation="fade-up">
            <div className="text-center space-y-8 max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500 glow inline-block">
                My Playground
              </h2>
              <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
                Here are some of my recent projects that showcase my skills and experience in full-stack development, 
                mobile development, and AI integration.
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {projects.map((project, index) => {
              // Determine the primary color based on the first tag
              let hueColor = "from-blue-500/20 to-purple-500/20"; // default gradient
              const firstTag = project.tags[0];
              if (firstTag.includes("React") || firstTag.includes("Next.js")) {
                hueColor = "from-blue-500/20 to-cyan-500/20";
              } else if (firstTag.includes("Type")) {
                hueColor = "from-blue-400/20 to-indigo-500/20";
              } else if (firstTag.includes("D3") || firstTag.includes("Data")) {
                hueColor = "from-green-500/20 to-emerald-500/20";
              } else if (firstTag.includes("OpenAI") || firstTag.includes("AI")) {
                hueColor = "from-purple-500/20 to-pink-500/20";
              } else if (firstTag.includes("Mobile") || firstTag.includes("Expo")) {
                hueColor = "from-orange-500/20 to-red-500/20";
              }

              return (
                <ScrollAnimation 
                  key={index} 
                  animation={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}
                  delay={index * 150}
                >
                  <div className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${hueColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-xl`} />
                    <Card className="relative group overflow-hidden border-0 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:bg-accent/80 hover:-translate-y-1">
                      <div className="aspect-video relative">
                        <Image
                          src={project.image}
                          alt={`Screenshot of ${project.title}`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          priority={index < 2}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background/20 transition-opacity duration-300 group-hover:opacity-0" />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                        <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => {
                            // Define color classes based on technology category
                            let colorClass = "bg-primary/10 text-primary";
                            if (tag.includes("React") || tag.includes("Next.js")) {
                              colorClass = "bg-blue-500/10 text-blue-500";
                            } else if (tag.includes("Type")) {
                              colorClass = "bg-blue-400/10 text-blue-400";
                            } else if (tag.includes("D3") || tag.includes("Data")) {
                              colorClass = "bg-green-500/10 text-green-500";
                            } else if (tag.includes("OpenAI") || tag.includes("AI")) {
                              colorClass = "bg-purple-500/10 text-purple-500";
                            } else if (tag.includes("Mobile") || tag.includes("Expo")) {
                              colorClass = "bg-orange-500/10 text-orange-500";
                            } else if (tag.includes("Economic")) {
                              colorClass = "bg-yellow-500/10 text-yellow-500";
                            } else if (tag.includes("Tailwind")) {
                              colorClass = "bg-cyan-500/10 text-cyan-500";
                            } else if (tag.includes("Vercel")) {
                              colorClass = "bg-gray-500/10 text-gray-500";
                            }
                            
                            return (
                              <span
                                key={tagIndex}
                                className={`px-3 py-1.5 text-sm font-medium rounded-full ${colorClass} transition-colors duration-200 hover:bg-opacity-20`}
                              >
                                {tag}
                              </span>
                            );
                          })}
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-4">
                        <Button asChild variant="outline" size="sm" className="transition-colors hover:bg-background/80">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <Globe className="h-4 w-4" /> Live Demo
                          </a>
                        </Button>
                        <Button asChild variant="outline" size="sm" className="transition-colors hover:bg-background/80">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <Github className="h-4 w-4" /> View Code
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </section>

        {/* Availability Section - Using Scarcity principle */}
        <AvailabilitySection />
        
        {/* Contact Section */}
        <section id="contact" className="py-16 mb-16">
          <ScrollAnimation animation="fade-up">
            <div className="text-center space-y-12 max-w-4xl mx-auto">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500 glow inline-block">
                  Let's Create Something Amazing Together
                </h2>
                <p className="text-lg text-medium-contrast">
                  Whether you have a groundbreaking project idea or want to explore AI possibilities,
                  I'm here to turn your vision into reality.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollAnimation animation="slide-in-left" delay={100}>
              <Card className="bg-card/40 backdrop-blur-sm border border-border/50 p-8 hover:bg-card/60 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary-500" />
                    Direct Contact
                  </CardTitle>
                  <CardDescription>
                    Reach out directly through your preferred channel
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <a 
                      href="mailto:emmanuellawal2024@gmail.com"
                      className="flex items-center gap-3 text-medium-contrast hover:text-primary-500 transition-colors p-3 rounded-lg hover:bg-primary-500/10"
                    >
                      <Mail className="h-5 w-5" />
                      <span className="text-lg">Email</span>
                    </a>
                    <a 
                      href="https://github.com/emmanuellawal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-medium-contrast hover:text-secondary-500 transition-colors p-3 rounded-lg hover:bg-secondary-500/10"
                    >
                      <Github className="h-5 w-5" />
                      <span className="text-lg">GitHub</span>
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/emmanuel-lawal-98519718b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-medium-contrast hover:text-accent-500 transition-colors p-3 rounded-lg hover:bg-accent-500/10"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="text-lg">LinkedIn</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-in-right" delay={200}>
              <Card className="bg-card/40 backdrop-blur-sm border border-border/50 p-8 hover:bg-card/60 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-secondary-500" />
                    Project Collaboration
                  </CardTitle>
                  <CardDescription>
                    Let's discuss your next big idea
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-medium-contrast">
                    I specialize in:
                    <ul className="list-none space-y-2 mt-2">
                      <li className="flex items-center gap-2">
                        <Brain className="h-4 w-4 text-primary-500" />
                        AI Integration & Development
                      </li>
                      <li className="flex items-center gap-2">
                        <Code className="h-4 w-4 text-secondary-500" />
                        Full Stack Web Applications
                      </li>
                      <li className="flex items-center gap-2">
                        <Server className="h-4 w-4 text-accent-500" />
                        Scalable System Architecture
                      </li>
                    </ul>
                  </p>
                  <ContactDialog>
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:opacity-90 hover:scale-[1.02] transition-all duration-300"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Start a Conversation
                    </Button>
                  </ContactDialog>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>

          <ScrollAnimation animation="fade-in" delay={300}>
            <Card className="bg-card/40 backdrop-blur-sm border border-border/50 p-8 mt-8">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold">Available for Select Projects</h3>
                <p className="text-medium-contrast max-w-2xl mx-auto">
                  Currently accepting new projects in AI development, web applications, and technical consulting. 
                  Let's discuss how we can work together to bring your ideas to life.
                </p>
              </div>
            </Card>
          </ScrollAnimation>
        </section>
      </main>
    </div>
  );
}
