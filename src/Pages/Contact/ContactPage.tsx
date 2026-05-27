import { motion } from 'framer-motion'
import githubLogo from '@/assets/GitHub.svg'
import linkedinLogo from '@/assets/LinkedIn.svg'
import mailLogo from '@/assets/Mail.svg'

function ContactPage() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: githubLogo,
      url: 'https://github.com/metanoid46', 
    },
    {
      name: 'LinkedIn',
      icon: linkedinLogo,
      url: 'https://www.linkedin.com/in/athuljoseliju/', 
    },
    {
      name: 'Email',
      icon: mailLogo,
      url: 'mailto:athuljlofficial@gmail.com',
    },
  ]

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center py-6 md:py-8 w-full bg-background/80 border-t border-primary/20 min-h-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-boska font-bold mb-4">
            Let's Connect
          </h1>
          <p className="text-lg md:text-xl opacity-70 font-switzer">
            Feel free to reach out on any of these platforms
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center items-center gap-8 md:gap-12 flex-wrap"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group relative"
              aria-label={link.name}
            >
              <div className="p-6 md:p-8 rounded-2xl bg-primary/10 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg bg-primary">
                <img
                  src={link.icon}
                  alt={link.name}
                  loading="lazy"
                  className="w-12 h-12 text-background 
                  group-hover:text-primary transition-colors duration-300"
                  decoding="async"
                />
              </div>
              <p className="text-sm md:text-foreground font-switzer font-semibold mt-3 text-foreground group-hover:text-foreground transition-colors duration-300 ">
                {link.name}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default ContactPage
