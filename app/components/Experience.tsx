'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const experiences = [
  {
    title: 'Staff Software Engineer',
    company: 'Acquia',
    period: '5/2021 - Present',
    logo: '/acquia.jpeg',
    description: [
      'Developed new features expanding the product portfolio, delivering impactful solutions.',
      'Designed real-time data pipelines using AWS, GCP, and Snowflake, optimizing workflows.',
      'Led performance optimizations reducing processing times by over 50%.',
      'Re-designed and modernized legacy Cloudera applications by migrating to Snowflake.',
      'Applied Agile methodologies and collaborated with cross-functional teams.'
    ]
  },
  {
    title: 'Senior Software Engineer',
    company: 'Avaya',
    period: '1/2019 - 5/2021',
    logo: '/avaya.jpeg',
    description: [
      'Worked on Proactive Outreach Manager, an outbound telecommunication product.',
      'Built a contact list import microservice using Java Spring Boot.',
      'Contributed to components like Campaign Director and Campaign Manager.',
      'Developed new AngularJS pages and corresponding backend REST services.'
    ]
  },
  {
    title: 'Software Design Engineer',
    company: 'Onlinesales.AI',
    period: '9/2017 - 12/2018',
    logo: '/onlinesalesai.jpeg',
    description: [
      'Developed a scalable framework for populating data on reporting AWS clusters.',
      'Integrated a new marketing campaign service into the platform.',
      'Collaborated with the infrastructure team to migrate products to Google Cloud and Azure.'
    ]
  }
]

const Experience = () => {
  return (
    <section id="experience" className="py-12 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 rounded-lg p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-blue-400">{exp.title}</h3>
                  <p className="text-gray-300">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.period}</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-300">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

