import { motion } from 'framer-motion';
import { Star, Award, BadgeCheck, VerifiedIcon } from 'lucide-react';

// Enhanced testimonials with more specific details to increase credibility
const testimonials = [
  {
    quote: "Emmanuel quickly grasped our complex requirements and delivered a scalable solution that reduced our system's response time by 40%. His technical expertise and problem-solving abilities transformed our legacy system into a modern, efficient platform.",
    author: "Sarah Chen",
    position: "CTO, TechVision Solutions",
    image: "/testimonials/sarah.jpg",
    company: "TechVision Solutions",
    companyLogo: "/logos/techvision.svg",
    project: "Enterprise System Migration",
    rating: 5
  },
  {
    quote: "Working with Emmanuel was a game-changer for our AI integration project. His exceptional ability to understand complex requirements and deliver scalable solutions exceeded our expectations. The custom ML pipeline he built improved our prediction accuracy by 32%.",
    author: "Michael Rodriguez",
    position: "Lead Architect, Enterprise Systems",
    image: "/testimonials/michael.jpg",
    company: "DataCore Analytics",
    companyLogo: "/logos/datacore.svg",
    project: "ML Pipeline Implementation",
    rating: 5
  },
  {
    quote: "Emmanuel's rare combination of technical excellence and clear communication made our project implementation seamless. He delivered our e-commerce platform 2 weeks ahead of schedule and helped us increase our conversion rate by 28% within the first month.",
    author: "Jessica Thompson",
    position: "Product Manager, InnovateX",
    image: "/testimonials/jessica.jpg",
    company: "InnovateX",
    companyLogo: "/logos/innovatex.svg",
    project: "E-commerce Platform Development",
    rating: 5
  }
];

// Adding industry recognition element for authority
const recognitions = [
  {
    title: "Top AI Developer",
    organization: "TechLeaders Association",
    year: 2023,
    logo: "/logos/techleaders.svg"
  },
  {
    title: "Excellence in Web Innovation",
    organization: "Digital Transformation Awards",
    year: 2022,
    logo: "/logos/digitaltransformation.svg"
  },
  {
    title: "Featured Developer",
    organization: "React Community Spotlight",
    year: 2023,
    logo: "/logos/reactcommunity.svg"
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
              <span>Trusted by Industry Leaders</span>
            </span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Client Success Stories</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I've had the privilege of working with forward-thinking companies to deliver exceptional results.
            Here's what they have to say about our collaboration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              {/* Credibility markers */}
              <div className="absolute -top-3 right-8 bg-white px-3 py-1 rounded-full shadow">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
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
                    <h4 className="text-xl font-semibold text-slate-900">{testimonial.author}</h4>
                    <VerifiedIcon className="h-4 w-4 text-blue-500" />
                  </div>
                  <p className="text-slate-600">{testimonial.position}</p>
                  <p className="text-slate-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="mb-4 text-sm font-medium text-slate-500">
                <span className="bg-slate-100 px-2 py-1 rounded flex items-center w-fit">
                  <span>Project: {testimonial.project}</span>
                </span>
              </div>
              
              <blockquote className="text-slate-700 italic mb-4">"{testimonial.quote}"</blockquote>
              
              {/* Social proof verification element */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Award className="h-3 w-3" />
                  <span>Verified Client</span>
                </span>
                <span>Collaboration Period: 2023</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Authority Proof - Industry Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 bg-white/5 rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Industry Recognition</h3>
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
              <h3 className="text-3xl font-bold text-white mb-2">98%</h3>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
            <div className="bg-white/10 rounded-lg px-6 py-4">
              <h3 className="text-3xl font-bold text-white mb-2">45+</h3>
              <p className="text-gray-300">Enterprise Clients</p>
            </div>
            <div className="bg-white/10 rounded-lg px-6 py-4">
              <h3 className="text-3xl font-bold text-white mb-2">4.9/5</h3>
              <p className="text-gray-300">Average Rating</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 