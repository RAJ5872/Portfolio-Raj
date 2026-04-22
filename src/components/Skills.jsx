import { motion } from 'framer-motion'
import { useState } from 'react'

const Skills = () => {
  const [hoveredRow, setHoveredRow] = useState(null)

  const frontendSkills = [
    { name: 'React', icon: '⚛️' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎭' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Redux', icon: '🔄' },
  ]

  const backendSkills = [
    { name: 'Node.js', icon: '🟢' },
    { name: 'Express', icon: '🚂' },
    { name: 'REST APIs', icon: '🔌' },
    { name: 'JWT', icon: '🔑' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'GraphQL', icon: '🔷' },
  ]

  const databaseTools = [
    { name: 'MongoDB', icon: '🍃' },
    { name: 'SQL', icon: '💾' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Git', icon: '�' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Docker', icon: '�' },
    { name: 'Vercel', icon: '▲' },
    { name: 'Postman', icon: '📮' },
  ]

  const SkillRow = ({ skills, direction = 'left', rowIndex, hoveredRow, setHoveredRow }) => (
    <div 
      className="relative overflow-hidden py-8"
      onMouseEnter={() => setHoveredRow(rowIndex)}
      onMouseLeave={() => setHoveredRow(null)}
    >
      <motion.div
        className={`flex gap-6 ${hoveredRow === rowIndex ? 'animate-marquee-fast' : `animate-marquee-${direction}`}`}
      >
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <motion.div
            key={`${skill.name}-${index}`}
            className="flex-shrink-0 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-3 hover:bg-white/10 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-2xl">{skill.icon}</span>
            <span className="text-white font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Gradient fade effect */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
    </div>
  )

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-sm font-semibold text-primary tracking-wider">TOOLKIT</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mt-2">
              SKILLS & TECH <span className="text-primary">/</span>
            </h2>
          </motion.div>

          {/* Marquee Rows */}
          <SkillRow skills={frontendSkills} direction="left" rowIndex={0} hoveredRow={hoveredRow} setHoveredRow={setHoveredRow} />
          <SkillRow skills={backendSkills} direction="right" rowIndex={1} hoveredRow={hoveredRow} setHoveredRow={setHoveredRow} />
          <SkillRow skills={databaseTools} direction="left" rowIndex={2} hoveredRow={hoveredRow} setHoveredRow={setHoveredRow} />
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
