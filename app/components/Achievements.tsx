'use client'

import { motion } from 'framer-motion'

const achievements = [
  'Granted a patent for "Systems And Methods To Terminate an Active Communications" (US 11,418,646 B1) in August 2022.',
  'Reduced processing times by over 50% through performance optimizations at Acquia.',
  'Modernized Cloudera applications by migrating to Snowflake, improving system scalability.',
  'Successfully migrated legacy systems to cloud platforms like AWS and GCP, ensuring enhanced efficiency.',
  'Developed a scalable framework for populating data on reporting AWS clusters at Onlinesales.AI.',
  'Contributed to the Proactive Outreach Manager product at Avaya, enhancing its functionality and performance.'
]

const Achievements = () => {
  return (
    <section id="achievements" className="py-12 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Key Achievements
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 rounded-lg p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300">{achievement}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements

