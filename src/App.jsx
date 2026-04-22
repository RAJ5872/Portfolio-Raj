import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ExtraFeatures from './components/ExtraFeatures'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <ExtraFeatures />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="py-8 text-center text-gray-400 border-t border-white/10">
        <p>&copy; 2026, Built by Raj Panchal ❤️</p>
      </footer>
    </div>
  )
}

export default App
