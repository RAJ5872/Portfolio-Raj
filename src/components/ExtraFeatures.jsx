import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ExtraFeatures = () => {
  const { scrollYProgress } = useScroll()
  const [isVisible, setIsVisible] = useState(false)

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.1) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white shadow-lg z-50 hover:scale-110 transition-transform glow-soft"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaArrowUp />
      </motion.button>
    </>
  )
}

export default ExtraFeatures
