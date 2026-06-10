import { motion } from 'framer-motion';
import { Star, Award, BadgeCheck, EggFried as VerifiedIcon } from 'lucide-react';

const collaborations = [
  {
    quote: "Working with Emmanuel on our data visualization project was an incredible experience. His technical expertise and innovative approach to problem-solving helped us create visualizations that were both informative and visually striking. His ability to translate complex data into meaningful insights was impressive.",
    author: "Alex Chen",
    position: "Data Scientist",
    image: "/testimonials/alex.jpg",
    organization: "NJIT Data Science Club",
    project: "Urban Mobility Analysis",
    rating: 5
  },
  {
    quote: "Emmanuel's contributions to our AI research project were invaluable. He quickly grasped complex ML concepts and implemented elegant solutions that improved our model's accuracy significantly. His collaborative spirit and clear communication made working together seamless and productive.",
    author: "Maya Rodriguez",
    position: "ML Engineer",
    image: "/testimonials/maya.jpg",
    organization: "AI Research Collaborative",
    project: "Natural Language Processing",
    rating: 5
  },
  {
    quote: "During our hackathon, Emmanuel demonstrated exceptional leadership and technical skills. He not only contributed significant code but also helped other team members overcome challenges. His ability to stay focused under pressure and deliver quality work was crucial to our team winning first place.",
    author: "Jordan Thompson",
    position: "Software Developer",
    image: "/testimonials/jordan.jpg",
    organization: "HackNJIT",
    project: "Healthcare AI Solution",
    rating: 5
  }
];

const recognitions = [
  {
    title: "Outstanding Team Member",
    organization: "NJIT Computer Science Department",
    year: 2023,
    logo: "/logos/njit.svg"
  },
  {
    title: "Hackathon Winner",
    organization: "HackNJIT 2022",
    year: 2022,
    logo: "/logos/hacknj.svg"
  },
  {
    title: "Research Contributor",
    organization: "AI Research Collaborative",
    year: 2023,
    logo: "/logos/airesearch.svg"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="testimonials-section py-20 bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden max-w-[100vw] [scrollbar-width:none]" style={{ WebkitOverflowScrolling: 'touch', msOverflowStyle: 'none' }}>
      <div className="container mx-auto px-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-3">
            <span className="bg-accent-500/20 text-accent-500 text-sm font-medium py-1 px-3 rounded-full flex items-center gap-1 mx-auto w-fit">
              <BadgeCheck className="h-4 w-4" aria-hidden="true" />
              <span>Collaborative Projects</span>
            </span>
          </div>
          <h2 id="testimonials-heading" className="text-4xl font-bold text-white mb-4">Peer Collaborations</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I've had the opportunity to work with talented peers on various projects.
            Here's what they have to say about our collaborative experiences.
          </p>
        </motion.div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list" aria-label="Peer collaboration testimonials">
          {collaborations.map((collaboration, index) => (
            <li key={collaboration.author}>
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative h-full"
              >
                <div className="absolute -top-3 right-8 bg-white px-3 py-1 rounded-full shadow" role="img" aria-label={`${collaboration.rating} out of 5 stars`}>
                  <div className="flex gap-1" aria-hidden="true">
                    {[...Array(collaboration.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  <div className="w-16 h-16 rounded-full bg-gray-200 mr-4" aria-hidden="true">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <h3 className="text-xl font-semibold text-slate-900">{collaboration.author}</h3>
                      <VerifiedIcon className="h-4 w-4 text-blue-500" aria-hidden="true" />
                    </div>
                    <p className="text-slate-600">{collaboration.position}</p>
                    <p className="text-slate-500 text-sm">{collaboration.organization}</p>
                  </div>
                </div>

                <div className="mb-4 text-sm font-medium text-slate-500">
                  <span className="bg-slate-100 px-2 py-1 rounded">
                    Project: {collaboration.project}
                  </span>
                </div>

                <blockquote className="text-slate-700 italic mb-4">
                  <p>"{collaboration.quote}"</p>
                </blockquote>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Award className="h-3 w-3" aria-hidden="true" />
                    <span>Academic Collaboration</span>
                  </span>
                  <time dateTime="2023">Collaboration Period: 2023</time>
                </div>
              </motion.article>
            </li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-white/5 rounded-2xl p-8 border border-white/10"
        >
          <h3 id="recognition-heading" className="text-2xl font-bold text-white text-center mb-8">Academic Recognition</h3>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list" aria-labelledby="recognition-heading">
            {recognitions.map((item, index) => (
              <li key={index}>
                <article className="bg-white/10 rounded-lg p-5 backdrop-blur-sm hover:bg-white/15 transition-colors h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="h-6 w-6 text-accent-500" aria-hidden="true" />
                    <h4 className="text-xl font-medium text-white">{item.title}</h4>
                  </div>
                  <p className="text-gray-300 mb-2">{item.organization}</p>
                  <p className="text-sm text-gray-400">
                    <time dateTime={item.year.toString()}>Recognized in {item.year}</time>
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <ul className="flex flex-wrap justify-center gap-8" role="list" aria-label="Collaboration statistics">
            <li className="bg-white/10 rounded-lg px-6 py-4">
              <p className="text-3xl font-bold text-white mb-2" aria-label="15 or more team projects">15+</p>
              <p className="text-gray-300">Team Projects</p>
            </li>
            <li className="bg-white/10 rounded-lg px-6 py-4">
              <p className="text-3xl font-bold text-white mb-2" aria-label="8 hackathons attended">8</p>
              <p className="text-gray-300">Hackathons</p>
            </li>
            <li className="bg-white/10 rounded-lg px-6 py-4">
              <p className="text-3xl font-bold text-white mb-2" aria-label="4.9 out of 5 peer rating">4.9/5</p>
              <p className="text-gray-300">Peer Rating</p>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 