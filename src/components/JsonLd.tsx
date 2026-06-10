export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Emmanuel Lawal",
    url: "https://emmanuellawal.dev",
    image: "https://emmanuellawal.dev/celestial-gear.svg",
    sameAs: [
      "https://github.com/emmanuellawal",
      "https://linkedin.com/in/emmanuel-lawal-98519718b"
    ],
    jobTitle: "Full Stack Developer",
    description: "Full Stack Developer specializing in building exceptional digital experiences with modern technologies, focusing on scalable and user-centric solutions.",
    email: "emmanuellawal2024@gmail.com",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "New Jersey Institute of Technology"
    },
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Full Stack Development",
      "Web Development",
      "Artificial Intelligence",
      "Machine Learning"
    ],
    address: {
      "@type": "PostalAddress",
      addressRegion: "NJ",
      addressCountry: "US"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Emmanuel Lawal Portfolio",
    url: "https://emmanuellawal.dev",
    description: "Full Stack Developer Portfolio - Crafting exceptional digital experiences with modern technologies",
    author: {
      "@type": "Person",
      name: "Emmanuel Lawal"
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://emmanuellawal.dev/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://emmanuellawal.dev/"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://emmanuellawal.dev/about"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Skills",
        item: "https://emmanuellawal.dev/skills"
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Projects",
        item: "https://emmanuellawal.dev/projects"
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact",
        item: "https://emmanuellawal.dev/contact"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProjectJsonLd({ projects }: { projects: Array<{ title: string; description: string; liveUrl: string; githubUrl: string; tags: string[]; image: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: project.title,
        description: project.description,
        url: project.liveUrl !== "#" ? project.liveUrl : undefined,
        image: `https://emmanuellawal.dev${project.image}`,
        author: {
          "@type": "Person",
          name: "Emmanuel Lawal"
        },
        codeRepository: project.githubUrl !== "#" ? project.githubUrl : undefined,
        programmingLanguage: project.tags.join(", "),
        applicationCategory: "WebApplication"
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
