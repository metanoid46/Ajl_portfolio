import AppBar from '@/Navigation/AppBar/AppBar';
import React, { type ReactNode } from 'react'
import './MainLayout.css'
import NavBar from '@/Navigation/NavBar/NavBar';
import { Card } from '@/components/ui/card';
import ReactiveBackground from '@/components/Background/Background';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({children}:MainLayoutProps) => {
  return (
    <>
    <ReactiveBackground/>
    <div className='wrapper'>
        <header>
            <AppBar/>
        </header>
        <main className='main'>
        <div className='contents'>
            <Card className='mainCard'>
                {children}
            </Card>
        </div>
        <div className='sideBar'><NavBar/></div>
        </main>
    </div>

  </>
  )
}

export default MainLayout