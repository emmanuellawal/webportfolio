import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Their technical expertise and problem-solving abilities transformed our legacy system into a modern, efficient platform.",
    author: "Sarah Chen",
    position: "CTO, TechVision Solutions",
    image: "/testimonials/sarah.jpg"
  },
  {
    quote: "Exceptional ability to understand complex requirements and deliver scalable solutions that exceed expectations.",
    author: "Michael Rodriguez",
    position: "Lead Architect, Enterprise Systems",
    image: "/testimonials/michael.jpg"
  },
  {
    quote: "A rare combination of technical excellence and clear communication made our project implementation seamless.",
    author: "Jessica Thompson",
    position: "Product Manager, InnovateX",
    image: "/testimonials/jessica.jpg"
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
          <h2 className="text-4xl font-bold text-white mb-4">Industry Recognition</h2>
          <p className="text-xl text-gray-300">What industry leaders say about our collaboration</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-200 mr-4">
                  {/* Add actual images later */}
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-900">{testimonial.author}</h4>
                  <p className="text-slate-600">{testimonial.position}</p>
                </div>
              </div>
              <blockquote className="text-slate-700 italic">"{testimonial.quote}"</blockquote>
            </motion.div>
          ))}
        </div>

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