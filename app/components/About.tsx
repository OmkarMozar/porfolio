'use client'

import { motion } from 'framer-motion'
import { SiSnowflake } from 'react-icons/si'

const About = () => {
  return (
    <section id="about" className="py-12 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="text-lg text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="mb-4">
            I&apos;m a highly skilled software engineer with expertise in designing and optimizing scalable systems. 
            Proficient in Java, Python, Snowflake, and cloud platforms like AWS and GCP, I have consistently 
            delivered impactful solutions that enhance performance and efficiency.
          </p>
          <p className="mb-4">
            My work includes modernizing legacy applications, building real-time data pipelines, and leading 
            performance improvements. With a strong foundation in Agile practices, I excel in collaborative 
            environments to achieve business goals effectively.
          </p>
          <motion.div 
            className="mt-8 bg-blue-600 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a 
              href="https://snowflakeconcepts.hashnode.dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center text-white hover:text-blue-200 transition-colors"
            >
              <SiSnowflake className="mr-2" size={24} />
              <span className="text-xl font-semibold">Explore My Snowflake Concepts Blog</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

