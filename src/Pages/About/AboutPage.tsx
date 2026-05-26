import { motion } from 'framer-motion'
import data from './AboutContent.json'

function AboutPage() {


  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="w-full p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="w-full max-w-6xl py-6 md:py-8">
    
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12 md:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-boska text-foreground mb-2">
            {data.Title}
          </h1>
          <div className="h-1 w-16 bg-primary rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-foreground font-switzer max-w-3xl">
            {data.Description}
          </p>
        </motion.div>

       

        {/* Languages & Frameworks Section */}
        {('Languages' in data && 'Frameworks' in data) && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-16"
          >
            <h2 className="text-2xl sm:text-3xl font-boska text-foreground mb-6">Languages</h2>
            <div className="flex flex-wrap gap-3 mb-10">
              {(data['Languages' as keyof typeof data] as string[])?.map((lang: string, index: number) => (
                <motion.div key={index} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <div className="px-4 py-2 rounded-lg bg-primary/30 border border-primary/50 text-sm font-switzer text-foreground hover:bg-primary/40 transition-colors">
                    {lang}
                  </div>
                </motion.div>
              ))}
            </div>

            <h2 className="text-2xl sm:text-3xl font-boska text-foreground mb-6">Frameworks & Libraries</h2>
            <div className="flex flex-wrap gap-3 mb-12">
              {(data['Frameworks' as keyof typeof data] as string[])?.map((framework: string, index: number) => (
                <motion.div key={index} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <div className="px-4 py-2 rounded-lg bg-secondary/30 border border-secondary/50 text-sm font-switzer text-foreground hover:bg-secondary/40 transition-colors">
                    {framework}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </div>
  )
}

export default AboutPage