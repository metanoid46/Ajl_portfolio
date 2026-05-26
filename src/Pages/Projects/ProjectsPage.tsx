import { motion } from 'framer-motion'
import { ProjectsCarousel } from '@/components/projects-carousel'

function ProjectsPage() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-12 py-6 md:py-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-boska text-foreground mb-2">
            Projects
          </h1>
          <div className="h-1 w-16 bg-primary rounded-full"></div>
        </motion.div>

   
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ProjectsCarousel />
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectsPage
