import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, ArrowRight, Code, Server, Palette, User, Phone } from "lucide-react";
import { ScrollButton } from "@/components/ScrollButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto space-y-32 px-4">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-16">
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
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500 glow inline-block">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-medium-contrast">
              <p>
                I'm a passionate Full Stack Developer and Information Systems student at NJIT's College of Computing Sciences. 
                My journey in tech is driven by a deep curiosity for building innovative solutions that make a real impact.
              </p>
              <p>
                With a strong foundation in both frontend and backend development, I specialize in creating seamless, 
                user-centric applications that solve complex problems while maintaining clean, efficient code.
              </p>
              <p>
                When I'm not coding, I'm constantly learning new technologies and best practices to stay at the forefront 
                of web development.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500 glow inline-block">
              My Skills
            </h2>
            <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
              Here are the key areas where I excel and the technologies I work with.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500 glow inline-block">
              Featured Projects
            </h2>
            <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {/* Project cards will be added here */}
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle>Project 1</CardTitle>
                  <CardDescription>Description of project 1</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-contrast">Details about project 1...</p>
                </CardContent>
              </Card>
              {/* Add more project cards as needed */}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 mb-16">
          <div className="text-center space-y-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500 glow inline-block">
              Get in Touch
            </h2>
            <p className="text-lg text-medium-contrast">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="flex flex-col gap-4 items-center justify-center">
              <a 
                href="mailto:emmanuellawal2024@gmail.com"
                className="flex items-center gap-2 text-lg hover:text-primary-500 transition-colors"
              >
                <Mail className="h-5 w-5" />
                emmanuellawal2024@gmail.com
              </a>
              <div className="flex gap-4 mt-4">
                <a href="https://github.com/emmanuellawal" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="hover-lift">
                    <Github className="h-5 w-5 mr-2" /> GitHub
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/emmanuel-lawal-98519718b/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="hover-lift">
                    <Linkedin className="h-5 w-5 mr-2" /> LinkedIn
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
