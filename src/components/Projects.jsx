import { motion } from 'framer-motion'
import { useState, memo } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectCard = memo(({ project, index, hoveredProject, setHoveredProject }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    onHoverStart={() => setHoveredProject(index)}
    onHoverEnd={() => setHoveredProject(null)}
    className="flex flex-col justify-between h-full min-h-[480px] glass-strong rounded-xl border border-white/10 p-5 transition-all duration-300"
    whileHover={{ translateY: '-3px', scale: 1.02 }}
  >
    {/* Image Container */}
    <div className="relative overflow-hidden rounded-lg mb-3 h-[200px] flex-shrink-0">
      <motion.img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="w-full h-full object-cover"
        animate={{
          scale: hoveredProject === index ? 1.05 : 1,
        }}
        transition={{ duration: 0.5 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
      
      {project.featured && (
        <div className="absolute top-3 right-3 bg-gradient-to-r from-primary to-secondary px-2 py-1 rounded-full text-[10px] font-semibold">
          Featured • HackMIT 2024
        </div>
      )}
    </div>

    {/* Title */}
    <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
    
    {/* Description */}
    <p className="text-gray-300 mb-3 line-clamp-3 flex-shrink-0 text-sm">
      {project.description}
    </p>

    {/* Tech Stack */}
    <div className="flex flex-wrap gap-2 mb-3">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full border border-primary/30"
        >
          {tag}
        </span>
      ))}
    </div>

    {/* Divider */}
    <div className="h-px bg-white/10 mb-3 flex-shrink-0 opacity-20"></div>

    {/* Problem & Solution */}
    <div className="mb-3 flex-grow">
      <div className="mb-2">
        <div className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1 flex-shrink-0"></span>
          <div>
            <span className="text-xs font-semibold text-primary">Problem:</span>
            <p className="text-xs text-gray-400 mt-0.5 line-clamp-2">{project.problem}</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-1 flex-shrink-0"></span>
          <div>
            <span className="text-xs font-semibold text-secondary">Solution:</span>
            <p className="text-xs text-gray-400 mt-0.5 line-clamp-2">{project.solution}</p>
          </div>
        </div>
      </div>
    </div>

    {/* Buttons */}
    <div className="flex gap-3 mt-auto pt-3">
      <motion.a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 px-4 py-2 border border-primary/50 rounded-lg text-sm font-semibold hover:bg-primary/10 transition-colors flex items-center justify-center gap-2"
        whileHover={{ scale: 1.05 }}
      >
        <FaGithub />
        Code
      </motion.a>
      <motion.a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        whileHover={{ scale: 1.05 }}
      >
        <FaExternalLinkAlt />
        Live Demo
      </motion.a>
    </div>
  </motion.div>
))

ProjectCard.displayName = 'ProjectCard'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      title: 'Care Navigator',
      description: 'AI-powered healthcare assistant for smart navigation.',
      image: '/carenavigator.png',
      tags: ['React', 'Node.js', 'MongoDB'],
      featured: false,
      problem: 'Patients struggled to find correct healthcare services',
      solution: 'Created AI-based assistant for guidance and booking',
      github: 'https://github.com/RAJ5872/Care-Navigator',
      live: 'https://care-navigator-client.vercel.app/',
    },
    {
      title: 'Edu-Safe',
      description: 'Interactive pre-learning platform that helps students build foundational understanding before diving into advanced topics.',
      image: '/edusafe.png',
      tags: ['React', 'Node.js', 'MongoDB'],
      featured: false,
      problem: 'Students struggle with weak fundamentals before starting new subjects',
      solution: 'Developed a guided pre-learning system with structured modules and progress tracking',
      github: 'https://github.com/RAJ5872/Edu-Safe',
      live: 'https://sih-frontend-one-mu.vercel.app/',
    },
    {
      title: 'Fleet-Flow',
      description: 'Real-time fleet management system with tracking and route optimization.',
      image: '/fleet-flow.png',
      tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      featured: true,
      problem: 'Managing large fleets efficiently with real-time data',
      solution: 'Built real-time tracking dashboard with route optimization',
      github: 'https://github.com/RAJ5872/Fleet-Flow-',
      live: 'https://fleet-flow-prr4.vercel.app/',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce platform with authentication, cart, and payments.',
      image: '/ecommerce.png',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      featured: false,
      problem: 'Need for seamless online shopping experience',
      solution: 'Implemented secure checkout with Stripe and real-time inventory',
      github: 'https://github.com/RAJ5872/E-commerce',
      live: 'https://e-commercefrontend-woad.vercel.app/',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 pointer-events-none"></div>
      
      {/* Floating particles - reduced to 4 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-3 h-3 bg-primary rounded-full opacity-20 animate-float-up" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-4 h-4 bg-secondary rounded-full opacity-20 animate-float-down" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-accent rounded-full opacity-20 animate-float-up-slow" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-60 left-1/2 w-3 h-3 bg-primary rounded-full opacity-20 animate-float-down" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            My <span className="text-primary text-glow">Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-center mb-16 max-w-2xl mx-auto"
          >
            A showcase of my recent work and personal projects. Each project represents my passion for solving real-world problems.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                hoveredProject={hoveredProject}
                setHoveredProject={setHoveredProject}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
