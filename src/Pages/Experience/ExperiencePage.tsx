import { motion } from 'framer-motion'
import data from './ExperienceContent.json'

interface Experience {
  id: number
  title: string
  company: string
  dateRange: string
  highlights: string[]
}

function ExperiencePage() {
  const experiences = data.experiences as Experience[]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto py-6 md:py-8">
    
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-boska text-background mb-2">
            Experience
          </h1>
          <div className="h-1 w-16 bg-primary rounded-full"></div>
        </motion.div>

        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="overflow-y-hidden overflow-x-auto max-h-[70vh] pr-2 flex flex-row"
        >
          {experiences.map((experience) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              className="relative flex-shrink-0 w-full md:w-11/12"
            >

              {/* Content Card */}
              <div className="mx-4 md:mx-8 border-primary rounded-2xl">
                <div className="bg-primary/10 lg:p-12 border border-primary rounded-2xl md:p-8 p-6 text-background shadow-lg h-full flex flex-col justify-between">
                  {/* Header */}
                  <div className="mb-6 md:mb-8">
                    <h3 className="text-2xl md:text-3xl font-boska font-bold text-background mb-1">
                      {experience.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <p className="text-lg md:text-xl text-background font-semibold font-switzer">
                        {experience.company}
                      </p>
                      <p className="text-sm md:text-base text-background font-switzer uppercase tracking-wide">
                        {experience.dateRange}
                      </p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-4 md:space-y-6">
                    {experience.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-3 md:gap-4">
                        <span className="text-background font-bold text-lg md:text-2xl sm:text-xl flex-shrink-0 mt-0.5">•</span>
                        <span className="text-background sm:text-lg md:text-xl text-background/85 leading-relaxed font-switzer">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

             
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default ExperiencePage
