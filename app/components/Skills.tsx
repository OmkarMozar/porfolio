'use client'

import { motion } from 'framer-motion'
import { FaJava, FaPython, FaDatabase, FaAws, FaGoogle, FaMicrosoft, FaAngular } from 'react-icons/fa'
import { SiSpring, SiHibernate, SiSnowflake, SiMongodb, SiRedis, SiDocker } from 'react-icons/si'

const skills = [
  { category: 'Programming Languages', items: [
    { name: 'Java', icon: <FaJava /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'SQL', icon: <FaDatabase /> }
  ]},
  { category: 'Frameworks & Technologies', items: [
    { name: 'Spring Boot', icon: <SiSpring /> },
    { name: 'Hibernate', icon: <SiHibernate /> },
    { name: 'AngularJS', icon: <FaAngular /> },
    { name: 'REST', icon: null },
    { name: 'Kafka', icon: null }
  ]},
  { category: 'Cloud & Infrastructure', items: [
    { name: 'AWS', icon: <FaAws /> },
    { name: 'GCP', icon: <FaGoogle /> },
    { name: 'Azure', icon: <FaMicrosoft /> },
    { name: 'Snowflake', icon: <SiSnowflake /> }
  ]},
  { category: 'Databases', items: [
    { name: 'PostgreSQL', icon: <FaDatabase /> },
    { name: 'MySQL', icon: <FaDatabase /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Redis', icon: <SiRedis /> }
  ]},
  { category: 'Tools & Practices', items: [
    { name: 'Git', icon: null },
    { name: 'Agile', icon: null },
    { name: 'CI/CD', icon: null },
    { name: 'Docker', icon: <SiDocker /> }
  ]},
]

const Skills = () => {
  return (
    <section id="skills" className="py-12 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              className="bg-gray-700 rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-400">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item.name} className="flex items-center text-gray-300">
                    {item.icon && <span className="mr-2 text-blue-400">{item.icon}</span>}
                    {item.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

