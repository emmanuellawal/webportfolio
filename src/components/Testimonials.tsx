import { motion } from 'framer-motion';
import { Star, Award, BadgeCheck, VerifiedIcon } from 'lucide-react';

// Updated collaborations with peers instead of client testimonials
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

// Updated to reflect academic and peer recognition
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
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-3">
            <span className="bg-accent-500/20 text-accent-500 text-sm font-medium py-1 px-3 rounded-full flex items-center gap-1 mx-auto w-fit">
              <BadgeCheck className="h-4 w-4" />
              <span>Collaborative Projects</span>
            </span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Peer Collaborations</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I've had the opportunity to work with talented peers on various projects.
            Here's what they have to say about our collaborative experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collaborations.map((collaboration, index) => (
            <motion.div
              key={collaboration.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              {/* Credibility markers */}
              <div className="absolute -top-3 right-8 bg-white px-3 py-1 rounded-full shadow">
                <div className="flex gap-1">
                  {[...Array(collaboration.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              
              <div className="flex items-center mb-3">
                <div className="w-16 h-16 rounded-full bg-gray-200 mr-4">
                  {/* Add actual images later */}
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                  <h4 className="text-xl font-semibold text-slate-900">{collaboration.author}</h4>
                    <VerifiedIcon className="h-4 w-4 text-blue-500" />
                  </div>
                  <p className="text-slate-600">{collaboration.position}</p>
                  <p className="text-slate-500 text-sm">{collaboration.organization}</p>
                </div>
              </div>
              
              <div className="mb-4 text-sm font-medium text-slate-500">
                <span className="bg-slate-100 px-2 py-1 rounded flex items-center w-fit">
                  <span>Project: {collaboration.project}</span>
                </span>
              </div>
              
              <blockquote className="text-slate-700 italic mb-4">"{collaboration.quote}"</blockquote>
              
              {/* Social proof verification element */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Award className="h-3 w-3" />
                  <span>Academic Collaboration</span>
                </span>
                <span>Collaboration Period: 2023</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 bg-white/5 rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Academic Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recognitions.map((item, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-5 backdrop-blur-sm hover:bg-white/15 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="h-6 w-6 text-accent-500" />
                  <h4 className="text-xl font-medium text-white">{item.title}</h4>
                </div>
                <p className="text-gray-300 mb-2">{item.organization}</p>
                <p className="text-sm text-gray-400">Recognized in {item.year}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white/10 rounded-lg px-6 py-4">
              <h3 className="text-3xl font-bold text-white mb-2">15+</h3>
              <p className="text-gray-300">Team Projects</p>
            </div>
            <div className="bg-white/10 rounded-lg px-6 py-4">
              <h3 className="text-3xl font-bold text-white mb-2">8</h3>
              <p className="text-gray-300">Hackathons</p>
            </div>
            <div className="bg-white/10 rounded-lg px-6 py-4">
              <h3 className="text-3xl font-bold text-white mb-2">4.9/5</h3>
              <p className="text-gray-300">Peer Rating</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 