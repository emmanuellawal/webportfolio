export const portfolioData = {
  developer: {
    name: "Emmanuel Lawal",
    role: "Full Stack Developer",
    location: {
      city: "Newark",
      state: "NJ",
      country: "US"
    },
    education: [
      {
        institution: "New Jersey Institute of Technology (NJIT)",
        degree: "Information Systems B.S., Web & Information Systems (WIS)",
        period: "2023 - Present",
        gpa: "3.8"
      },
      {
        institution: "Essex County College",
        degree: "Associate in Science, Computer Science",
        period: "2020 - 2022",
        honors: "Phi Theta Kappa Honor Society"
      }
    ],
    contact: {
      email: "emmanuellawal2024@gmail.com",
      github: "https://github.com/emmanuellawal",
      linkedin: "https://www.linkedin.com/in/emmanuel-lawal-98519718b/"
    },
    skills: {
      frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
      backend: ["Node.js", "Express.js", "RESTful APIs", "GraphQL"],
      database: ["PostgreSQL", "MongoDB", "Redis"],
      devops: ["Git/GitHub", "Docker", "CI/CD", "AWS"],
      languages: ["JavaScript", "TypeScript", "Python", "Java"],
      ai: ["OpenAI API", "Natural Language Processing", "Machine Learning Integration"]
    },
    interests: ["music production", "AI research", "hiking", "problem-solving"]
  },
  projects: [
    {
      id: "three-decades-mobility",
      name: "Three Decades of Mobility",
      type: "Web Application",
      description: "A data visualization project exploring the relationship between vehicle registration trends and cost of living over 30 years.",
      technologies: ["React", "D3.js", "TypeScript"],
      category: "Data Visualization",
      outcomes: ["Economic analysis", "Interactive charts", "CPI data integration"],
      urls: {
        live: "https://visualization-project-iota.vercel.app/",
        repository: "https://github.com/emmanuellawal/visualization_Project"
      },
      status: "deployed"
    },
    {
      id: "ai-calculator",
      name: "AI-Enhanced Calculator",
      type: "Mobile Application",
      description: "A modern calculator app with natural language processing powered by OpenAI GPT-3.5-turbo.",
      technologies: ["React Native", "Expo", "TypeScript", "OpenAI API"],
      category: "Mobile Development",
      outcomes: ["Conversational calculations", "Unit conversions", "NLP integration"],
      urls: {
        repository: "https://github.com/emmanuellawal/expo-calculator-app"
      },
      status: "in-development"
    },
    {
      id: "cultural-ai",
      name: "Cultural AI",
      type: "Platform",
      description: "AI-powered platform providing cultural insights and recommendations.",
      technologies: ["React Native", "Node.js", "SQL Server", "OpenAI", "Docker"],
      category: "AI Integration",
      outcomes: ["Cultural analysis", "Personalized recommendations", "AI-powered insights"],
      urls: {
        repository: "https://github.com/emmanuellawal/culturalai"
      },
      status: "in-development"
    }
  ],
  services: [
    {
      name: "AI Integration & Development",
      description: "Integrating artificial intelligence into web and mobile applications"
    },
    {
      name: "Full Stack Web Applications",
      description: "End-to-end web application development with modern technologies"
    },
    {
      name: "Scalable System Architecture",
      description: "Designing and implementing robust, scalable system architectures"
    }
  ],
  availability: {
    status: "available",
    acceptsNewProjects: true,
    projectTypes: ["AI development", "web applications", "technical consulting"]
  },
  meta: {
    lastUpdated: "2024-06-10",
    version: "1.0.0",
    portfolioUrl: "https://emmanuellawal.dev"
  }
};

export type PortfolioData = typeof portfolioData;
