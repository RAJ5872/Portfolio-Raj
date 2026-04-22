import { motion } from 'framer-motion'

const About = () => {
  const highlights = [
    { text: 'Problem Solver', color: 'primary' },
    { text: 'Quick Learner', color: 'secondary' },
    { text: 'Team Player', color: 'accent' },
    { text: 'Communication Skill', color: 'primary' },
  ]

  return (
    <section id="about" className="py-16 sm:py-20 px-4 md:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          {/* Left - Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative circles */}
              <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-pulse"></div>
              <div className="absolute inset-8 border-2 border-secondary/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              {/* Center glow */}
              <div className="absolute inset-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl"></div>
              
              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="glass-strong rounded-2xl p-8 text-center neon-border"
                >
                  <div className="text-8xl mb-4">👨‍💻</div>
                  <h3 className="text-2xl font-bold text-glow">Final Year ICT Student</h3>
                  <p className="text-gray-400 mt-2">VGEC, Chandkheda</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              About <span className="text-primary text-glow">Me</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-gray-300 leading-relaxed"
            >
              <p>
                I'm a final-year <span className="text-primary font-semibold">ICT student</span> at 
                <span className="text-secondary font-semibold"> Vishwakarma Government Engineering College</span>, 
                passionate about building scalable web applications and solving complex problems.
              </p>
              <p>
                As a <span className="text-accent font-semibold">MERN Stack Developer</span> and 
                <span className="text-primary font-semibold"> Java + DSA enthusiast</span>, 
                I love participating in hackathons and working on real-world projects that make a difference.
              </p>
            </motion.div>

            {/* Keyword Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-300">What I bring to the table:</h3>
              <div className="flex flex-wrap gap-3">
                {highlights.map((item, index) => (
                  <motion.span
                    key={item.text}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className={`px-4 py-2 bg-${item.color}/20 border border-${item.color}/50 rounded-full text-${item.color} font-medium`}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    {item.text}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
