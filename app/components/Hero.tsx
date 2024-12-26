'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaLinkedin, FaGithub, FaTwitter, FaFileAlt, FaStackOverflow } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0 text-gray-100"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-400">
            Omkar Mozar
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-300">
            Software Engineer | Distributed Systems | Snowflake Developer | Cloud Enthusiast | Agile Practitioner
          </p>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/omkar-mozar" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/OmkarMozar" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://x.com/GenAiEnthu29" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="https://stackoverflow.com/users/5250644/omkar-mozar" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
              <FaStackOverflow size={24} />
            </a>
            <a href="https://drive.google.com/file/d/1kjJXUjQ3s2Q0BWKJc_TmqUxaesUlQ8MG/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
              <FaFileAlt size={24} />
            </a>
          </div>
        </motion.div>
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="/profile.jpg"
            alt="Omkar Mozar"
            width={400}
            height={400}
            priority
            className="rounded-full shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

