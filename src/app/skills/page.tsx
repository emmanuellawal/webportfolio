import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code2, Database, Layout, Server, Settings, Terminal } from "lucide-react";

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Layout,
      description: "Building beautiful and responsive user interfaces",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Redux/State Management", level: 85 }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      description: "Creating robust and scalable server applications",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "RESTful APIs", level: 90 },
        { name: "GraphQL", level: 80 },
        { name: "Authentication/Security", level: 85 }
      ]
    },
    {
      title: "Database Management",
      icon: Database,
      description: "Working with various database systems",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 90 },
        { name: "Redis", level: 75 },
        { name: "Database Design", level: 85 },
        { name: "Data Modeling", level: 80 }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: Settings,
      description: "Managing deployment and development workflows",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 80 },
        { name: "CI/CD", level: 85 },
        { name: "AWS Services", level: 80 },
        { name: "Linux/Shell Scripting", level: 75 }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Skills & Expertise</h1>
            <p className="text-lg text-medium-contrast max-w-2xl">
              With over 5 years of experience in full stack development, I've developed a comprehensive 
              skill set across various technologies and tools.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <category.icon className="h-6 w-6 text-primary" />
                    <CardTitle>{category.title}</CardTitle>
                  </div>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold">Additional Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Jest/Testing",
                "Agile/Scrum",
                "UI/UX Design",
                "Performance Optimization",
                "SEO",
                "Web Accessibility",
                "Technical Writing",
                "Team Leadership"
              ].map((skill, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border bg-card text-card-foreground shadow-sm text-center"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 