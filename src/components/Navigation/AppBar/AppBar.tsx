import AnimatedThemeToggler from '@/components/animated-theme-toggler'
import { useState, useEffect } from 'react'
import LogoLight from '@/assets/logo_light.svg'
import LogoDark from '@/assets/logo_dark.svg'
import './AppBar.css'
import ScrollNavBar from '@/components/NavBar'

const AppBar = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }
    checkTheme()
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })
    return () => observer.disconnect()
  }, [])

  return (

     <div className='appBar'>

      <img src={isDark ? LogoLight : LogoDark} alt="Logo" className="h-8 sm:h-10 md:h-12 w-auto" />

      <ScrollNavBar/>
      <AnimatedThemeToggler />
    </div>
  )
}

export default AppBar