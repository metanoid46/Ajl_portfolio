import React from 'react'
import { useTheme } from '@/components/ThemeProvider';
import {LogoLight,LogoDark, ModeToggle} from '@/components/Imports'
import'./AppBar.css'

const AppBar = () => {
    const {theme}=useTheme();
    console.log(theme);
  return (
   <>
 <div className='appBar bg:transparent' >
    <div className='logo_name'>
  {theme === "light" ? (
   <img src={LogoLight} className="h-8 sm:h-10 md:h-6 lg:h-8 xl:h-10"/>
  ) : theme === "dark" ? (
    <img src={LogoDark} className="h-8 sm:h-10 md:h-6 lg:h-8 xl:h-10"/>
  ) : null}
  <div className='appName'>
    AJL
  </div>
</div>

  <ModeToggle />
</div>

   </>
  )
}

export default AppBar