import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import resume from '../assests/Resume.pdf'

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [timeoutId, setTimeoutId] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      
      const newTimeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > 50)
        
        // Update active section based on scroll position
        const sections = ['home', 'about', 'skills', 'projects', 'contact']
        const scrollPosition = window.scrollY + 100

        for (const sectionId of sections) {
          const section = document.getElementById(sectionId)
          if (section) {
            const sectionTop = section.offsetTop
            const sectionHeight = section.offsetHeight
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
              setActiveSection(sectionId)
              break
            }
          }
        }
      }, 100)
      
      setTimeoutId(newTimeoutId)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [setActiveSection, timeoutId])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setMobileMenuOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-white/10"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold tracking-wide"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">RP</span>
          </motion.a>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? 'text-primary' : 'text-gray-300'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Right Section - Icons + Resume */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com/RAJ5872"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <FaGithub className="text-xl" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/rajpanchalgecvgecictdte?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <FaLinkedin className="text-xl" />
            </motion.a>
            <motion.a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-full text-sm font-semibold text-white"
              whileHover={{ scale: 1.05 }}
            >
              Resume
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 glass rounded-lg p-4"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-2 px-4 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'text-primary bg-primary/10'
                    : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
