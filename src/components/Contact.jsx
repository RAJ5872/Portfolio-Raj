import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        'service_7quages',
        'template_5p94jl9',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'tijTJb_7pVIs6YGif'
      )
      .then(() => {
        alert('✅ Message sent successfully!')
        setFormData({ name: '', email: '', message: '' })
      })
      .catch((error) => {
        console.error('EmailJS Error:', error)
        alert('❌ Failed to send message')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'panchalraj1902@gmail.com',
      color: 'primary',
    },
    {
      icon: FaPhone,
      label: 'Mobile',
      value: '+91 70433 53822',
      color: 'secondary',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Ahmedabad, Gujarat',
      color: 'accent',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/RAJ5872',
      url: 'https://github.com/RAJ5872',
      color: 'primary',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/rajpanchalgecvgecictdte',
      url: 'https://www.linkedin.com/in/rajpanchalgecvgecictdte?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      color: 'secondary',
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 md:px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 pointer-events-none"></div>
      
      {/* Animated glowing circles - reduced blur */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-xl animate-pulse-glow" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-xl animate-pulse-glow" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            Get In <span className="text-primary text-glow">Touch</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-center mb-16 max-w-2xl mx-auto"
          >
            Have a project in mind or want to collaborate? Feel free to reach out!
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-strong rounded-2xl p-8 shadow-soft"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary resize-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.url || '#'}
                  target={item.url ? '_blank' : '_self'}
                  rel={item.url ? 'noopener noreferrer' : ''}
                  className="glass-card rounded-xl p-6 flex items-center gap-4 hover:bg-white/10 transition-all cursor-pointer group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <div className={`w-12 h-12 bg-${item.color}/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <item.icon className={`text-xl text-${item.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-400">{item.label}</div>
                    {item.value && <div className="text-white font-medium">{item.value}</div>}
                  </div>
                  {item.value && (
                    <div className={`w-2 h-2 bg-${item.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                  )}
                </motion.a>
              ))}

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="glass-card rounded-xl p-6 mt-6"
              >
                <h3 className="text-lg font-semibold mb-4">Connect with me</h3>
                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com/RAJ5872"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 hover:neon-border transition-all"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <FaGithub className="text-xl" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/rajpanchalgecvgecictdte?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 hover:neon-border transition-all"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <FaLinkedin className="text-xl" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
