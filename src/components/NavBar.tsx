import { useState, useEffect, useRef } from 'react'

import { Menu, X } from 'lucide-react'

interface NavItem {
  id: string
  label: string
}

const navItems: NavItem[] = [
  { id: 'Home', label: 'Home' },
  { id: 'About', label: 'About' },
  { id: 'Projects', label: 'Projects' },
  { id: 'Experience', label: 'Experience' },
  { id: 'Contact', label: 'Contact' },
]

const ScrollNavBar = () => {
  const [, setActiveSection] = useState('Home')
  const [isOpen, setIsOpen] = useState(false)
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isScrollingToSection = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingToSection.current) return

      const sections = document.querySelectorAll('[data-section]')
      const headerHeight = 100
      let closestSection = 'Home'
      let closestDistance = Infinity

      sections.forEach((section) => {
        const element = section as HTMLElement
        const rect = element.getBoundingClientRect()
        const sectionId = element.getAttribute('data-section')

        if (rect.top <= headerHeight + 50 && rect.bottom >= headerHeight) {
          const distance = Math.abs(rect.top - headerHeight)
          if (distance < closestDistance) {
            closestDistance = distance
            closestSection = sectionId || 'Home'
          }
        }
      })

      setActiveSection(closestSection)
    }

    const debouncedHandleScroll = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
      scrollTimeoutRef.current = setTimeout(handleScroll, 50)
    }

    window.addEventListener('scroll', debouncedHandleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`)
    if (element) {
      isScrollingToSection.current = true
      
      const headerHeight = 100
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const targetPosition = elementPosition - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      })

      setActiveSection(sectionId)

      setTimeout(() => {
        isScrollingToSection.current = false
      }, 1000)
    }
  }

  return (
    <>
      <nav className="fixed top-4 right-4 z-50 md:top-6 md:left-1/2 md:right-auto md:-translate-x-1/2">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 bg-background/70 backdrop-blur-xl border border-primary/20 rounded-full px-8 py-3 shadow-xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-xs sm:text-sm font-medium text-primary hover:text-foreground px-3 py-2 transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2 bg-background/70 backdrop-blur-xl  border-primary/20 rounded-2xl px-4 py-2 shadow-xl">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-primary hover:text-foreground transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-16 right-4 z-40 md:hidden w-48 bg-background/90 backdrop-blur-xl border border-primary/20 rounded-2xl p-4 shadow-xl">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id)
                  setIsOpen(false)
                }}
                className="text-sm font-medium text-foreground/80 hover:text-primary px-4 py-2 text-left hover:bg-primary/10 rounded-lg transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default ScrollNavBar