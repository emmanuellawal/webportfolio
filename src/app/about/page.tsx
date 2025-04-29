"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Function to generate random vibrant colors
const getRandomVibrantColor = () => {
  const vibrantColors = [
    'shadow-[0_0_15px_rgba(59,130,246,0.5)] bg-blue-500/10',
    'shadow-[0_0_15px_rgba(168,85,247,0.5)] bg-purple-500/10',
    'shadow-[0_0_15px_rgba(236,72,153,0.5)] bg-pink-500/10',
    'shadow-[0_0_15px_rgba(249,115,22,0.5)] bg-orange-500/10',
    'shadow-[0_0_15px_rgba(34,197,94,0.5)] bg-green-500/10',
    'shadow-[0_0_15px_rgba(20,184,166,0.5)] bg-teal-500/10',
    'shadow-[0_0_15px_rgba(6,182,212,0.5)] bg-cyan-500/10',
    'shadow-[0_0_15px_rgba(244,63,94,0.5)] bg-rose-500/10',
    'shadow-[0_0_15px_rgba(99,102,241,0.5)] bg-indigo-500/10',
    'shadow-[0_0_15px_rgba(139,92,246,0.5)] bg-violet-500/10'
  ];
  return vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
};

export default function AboutPage() {
  const [skillColors, setSkillColors] = useState<{ [key: string]: string }>({});

  const updateSkillColor = (skill: string) => {
    setSkillColors(prev => ({
      ...prev,
      [skill]: getRandomVibrantColor()
    }));
  };

  const education = [
    {
      school: "New Jersey Institute of Technology (NJIT)",
      degree: "Information Systems B.S., Web & Information Systems (WIS)",
      period: "2023 - Present",
      description: "College of Computing Sciences. Current GPA: 3.8. Relevant coursework includes Data Structures & Algorithms, Software Design & Development, Database Management Systems."
    },
    {
      school: "Essex County College",
      degree: "Associate in Science, Computer Science",
      period: "2020 - 2022",
      description: "Graduated with honors. Member of Phi Theta Kappa Honor Society."
    }
  ];

  const activities = [
    {
      title: "Leadership & Activities",
      items: [
        "Member of Phi Theta Kappa Honor Society",
        "Member of National Society of Leadership and Success",
        "Member of Black Student Union",
        "Member of Computer Science Club"
      ]
    }
  ];

  const skills = [
    "JavaScript/TypeScript",
    "React/Next.js",
    "Node.js",
    "Python",
    "Java",
    "HTML/CSS",
    "Tailwind CSS",
    "Git/GitHub",
    "OpenAI API",
    "MongoDB",
    "Express.js",
    "React Native"
  ];

  return (
    <div className="min-h-screen bg-background pt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* About Me Section */}
          <section className="space-y-8">
            <h1 className="text-4xl font-bold">About Me</h1>
            <div className="prose prose-lg dark:prose-invert">
              <p>
                Hi, I'm Emmanuel Lawal, a Computer Science student at NJIT with a passion for Full Stack Development 
                and AI integration. I'm driven by the challenge of creating robust, user-centric applications that 
                solve real-world problems.
              </p>
              <p>
                My journey in computer science began at Essex County College, where I discovered my love for 
                programming and problem-solving. Now at NJIT, I'm expanding my knowledge and skills while working 
                on exciting projects that combine modern web technologies with AI capabilities.
              </p>
              <p>
                I believe in continuous learning and growth, which is reflected in my active participation in 
                various academic and professional organizations. My goal is to leverage technology to create 
                meaningful solutions that make a positive impact.
              </p>
            </div>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="/contact" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" /> Contact Me
                </Link>
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" /> Download Resume
              </Button>
            </div>
          </section>

          {/* Education Section */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="p-6">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold">{edu.school}</h3>
                        <p className="text-muted-foreground">{edu.degree}</p>
                      </div>
                      <span className="text-sm text-muted-foreground">{edu.period}</span>
                    </div>
                    <p className="text-medium-contrast">{edu.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Activities Section */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold">Leadership & Activities</h2>
            <div className="space-y-6">
              {activities.map((activity, index) => (
                <Card key={index} className="p-6">
                  <div className="space-y-4">
                    <ul className="list-disc list-inside space-y-2">
                      {activity.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-medium-contrast">{item}</li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold">Technical Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border bg-card text-card-foreground transition-all duration-300 hover:scale-105 cursor-default ${skillColors[skill] || ''}`}
                  onMouseEnter={() => updateSkillColor(skill)}
                  onMouseLeave={() => {
                    setSkillColors(prev => {
                      const newColors = { ...prev };
                      delete newColors[skill];
                      return newColors;
                    });
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
