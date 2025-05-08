import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ScrollAnimation } from "@/components/ScrollAnimation";

export default function ProjectsPage() {
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
      title: "Modern Web Portfolio",
      description: "A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features responsive design, dark mode, and smooth animations.",
      image: "/projects/data-viz.jpg",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <ScrollAnimation animation="fade-up">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">Projects</h1>
              <p className="text-lg text-medium-contrast max-w-2xl">
                Here are some of my key projects that showcase my skills in full-stack development, 
                mobile development, and AI integration. Each project represents my commitment to 
                creating robust and user-centric solutions.
              </p>
            </div>
          </ScrollAnimation>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  delay={index * 100}
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
                          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <Globe className="h-4 w-4" /> Live Demo
                          </Link>
                        </Button>
                        <Button asChild variant="outline" size="sm" className="transition-colors hover:bg-background/80">
                          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <Github className="h-4 w-4" /> View Code
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>

          {/* Contact CTA */}
          <ScrollAnimation animation="fade-up">
            <div className="text-center space-y-6 py-8">
              <h2 className="text-2xl font-semibold">Interested in discussing a project?</h2>
              <Button asChild size="lg">
                <Link href="/contact">Let's Connect</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
