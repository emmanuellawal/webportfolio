import { motion } from 'framer-motion';

const expertiseAreas = [
  {
    title: 'Full-Stack Development',
    description: 'Building scalable web applications with modern frameworks and best practices',
    icon: '🚀',
    technologies: ['React', 'Node.js', 'TypeScript', 'Next.js']
  },
  {
    title: 'System Architecture',
    description: 'Designing robust and scalable system architectures for enterprise applications',
    icon: '🏗️',
    technologies: ['AWS', 'Docker', 'Microservices', 'API Design']
  },
  {
    title: 'Database Engineering',
    description: 'Optimizing database performance and designing efficient data structures',
    icon: '🗄️',
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'SQL']
  },
  {
    title: 'DevOps & CI/CD',
    description: 'Implementing automated deployment pipelines and infrastructure as code',
    icon: '⚙️',
    technologies: ['Jenkins', 'GitHub Actions', 'Terraform', 'Kubernetes']
  }
];

const ExpertiseGrid = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Expertise</h2>
          <p className="text-xl text-slate-600">Specialized knowledge areas that drive innovation</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{area.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{area.title}</h3>
              <p className="text-slate-600 mb-6">{area.description}</p>
              <div className="flex flex-wrap gap-2">
                {area.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseGrid; 