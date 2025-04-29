import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const BrandHero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Mastering Complexity Through
            <span className="block text-blue-500 mt-2">
              <TypeAnimation
                sequence={[
                  'Full-Stack Development',
                  2000,
                  'AI Integration',
                  2000,
                  'Problem Solving',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            A dedicated Web & Information Systems student at NJIT's College of Computing Sciences, with expertise in Full-Stack Development 
            and AI integration, driven to overcome technical challenges and build robust, 
            user-centric applications.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View My Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors"
            >
              Let's Connect
            </motion.a>
          </div>
          
          <div className="mt-12 flex justify-center space-x-6">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white">3+</h3>
              <p className="text-gray-400">Years of Study</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white">3.8</h3>
              <p className="text-gray-400">GPA at NJIT</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white">10+</h3>
              <p className="text-gray-400">Technologies</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandHero; 