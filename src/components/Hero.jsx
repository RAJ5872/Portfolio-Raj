import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react'
import resume from '../assests/Resume.pdf'

const Hero = () => {
  const heroRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (heroRef.current) {
        const { left, top, width, height } = heroRef.current.getBoundingClientRect()
        const x = (event.clientX - (left + width / 2)) / (width / 2)
        const y = (event.clientY - (top + height / 2)) / (height / 2)
        setMousePosition({ x, y })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const floatingIcons = [
    { icon: '⚛️', delay: 0 },
    { icon: '🟢', delay: 0.2 },
    { icon: '💾', delay: 0.4 },
    { icon: '☕', delay: 0.6 },
    { icon: '�', delay: 0.8 },
  ]

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen flex items-center justify-center px-4 md:px-6 overflow-hidden bg-background grid-pattern">
      {/* Radial glow behind hero text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Background floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 0.3, y: 0 }}
            transition={{ delay: item.delay, duration: 1 }}
            className="absolute text-6xl"
            style={{
              top: `${20 + index * 15}%`,
              left: `${10 + index * 20}%`,
              animation: `float ${6 + index}s ease-in-out infinite`,
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary neon-border">
              👋 Hello, I'm
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 break-words">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent text-glow">
              Raj Panchal
            </span>
          </h1>
          
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 min-h-[4rem] sm:min-h-[5rem] md:h-16">
            <TypeAnimation
              sequence={[
                'Full Stack Engineer',
                2000,
                'Java + DSA Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-primary text-glow"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-lg leading-relaxed px-2"
          >
            Final Year ICT Student at Vishwakarma Government Engineering College.
            <span className="text-primary font-semibold"> Building scalable web apps & solving real-world problems.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start px-2"
          >
            <motion.a
              href="#projects"
              className="group px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-white glow-soft hover:glow-strong transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </motion.a>
            <motion.a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-primary rounded-lg font-semibold text-primary hover:bg-primary/10 hover:neon-border transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload />
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-6 justify-center lg:justify-start"
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors text-3xl"
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors text-3xl"
              whileHover={{ scale: 1.2, rotate: -10 }}
            >
              <FaLinkedin />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Content - Animated Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="lg:w-1/2 relative flex items-center justify-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="relative w-[400px] h-[400px]"
          >
            <div className="absolute inset-0 border-2 border-primary/20 rounded-full"></div>
            <div className="absolute inset-8 border-2 border-secondary/20 rounded-full"></div>
            <div className="absolute inset-16 border-2 border-accent/20 rounded-full"></div>
            
            {/* Floating tech icons around the circle */}
            {floatingIcons.map((item, index) => (
              <motion.div
                key={index}
                className="absolute text-5xl"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${index * 72}deg) translate(140px) rotate(-${index * 72}deg)`,
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <motion.span
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {item.icon}
                </motion.span>
              </motion.div>
            ))}
            
            {/* Center element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center glow">
              <span className="text-6xl">💻</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
