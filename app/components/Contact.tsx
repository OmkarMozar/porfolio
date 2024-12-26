'use client'

import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaTwitter, FaFileAlt, FaStackOverflow } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>
        <motion.div
          className="max-w-lg mx-auto bg-gray-700 rounded-lg p-8 shadow-md text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="mb-4">
            <strong>Email:</strong>{' '}
            <a href="mailto:omkarmozar29@gmail.com" className="text-blue-400 hover:underline">
              omkarmozar29@gmail.com
            </a>
          </p>
          <p className="mb-4">
            <strong>Phone:</strong> +91 8668918283
          </p>
          <p className="mb-4">
            <strong>Location:</strong> Pune, Maharashtra, India
          </p>
          <div className="flex justify-center space-x-4 mt-6">
            <a
              href="https://www.linkedin.com/in/omkar-mozar"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/OmkarMozar"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://x.com/GenAiEnthu29"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://drive.google.com/file/d/1zobPxLWNuxyxl1120KkatZEAK-EnpsIa/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              <FaFileAlt size={24} />
            </a>
            <a
              href="https://stackoverflow.com/users/5250644/omkar-mozar"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              <FaStackOverflow size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

