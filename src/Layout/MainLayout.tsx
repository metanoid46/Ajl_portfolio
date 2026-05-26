import { lazy, Suspense } from 'react'
import AppBar from '@/components/Navigation/AppBar/AppBar'
import HomePage from '@/Pages/HomePage/HomePage'
import FlowArt, { FlowSection } from '../components/story-scroll.tsx'
import { GlassCard} from "@/components/glass-card"

// Lazy load pages that aren't visible on first load
const AboutPage = lazy(() => import('@/Pages/About/AboutPage.tsx'))
const ProjectsPage = lazy(() => import('@/Pages/Projects/ProjectsPage.tsx'))
const ExperiencePage = lazy(() => import('@/Pages/Experience/ExperiencePage.tsx'))
const ContactPage = lazy(() => import('@/Pages/Contact/ContactPage.tsx'))

// Loading fallback
const LoadingFallback = () => <div className="min-h-full bg-background" />

const MainLayout = () => {
  return (
   <div className="full w-full max-h-full ">
    <header className="w-full fixed p-4 top-0 left-0  z-50 bg-background ">
      <AppBar />
    </header>
    <main className="text-foreground flex flex-col">
      <div className="flex-1">
      <FlowArt>
        <FlowSection data-section="Home" className="min-h-full flex items-center justify-center pt-20 ">
          <HomePage />
        </FlowSection>

        <FlowSection data-section="About" className="min-h-full flex items-center justify-center pt-20 ">
          <GlassCard >
            <Suspense fallback={<LoadingFallback />}>
              <AboutPage />
            </Suspense>
          </GlassCard>
        </FlowSection>

        <FlowSection data-section="Projects" className="min-h-full flex items-center justify-center pt-20">
          <GlassCard>
            <Suspense fallback={<LoadingFallback />}>
              <ProjectsPage />
            </Suspense>
          </GlassCard>
        </FlowSection>

        <FlowSection data-section="Experience" className="min-h-full flex items-center justify-center pt-20">
          <GlassCard className='bg-foreground'>
            <Suspense fallback={<LoadingFallback />}>
              <ExperiencePage />
            </Suspense>
          </GlassCard>
        </FlowSection>
        <FlowSection  data-section="Contact" className="min-h-full flex items-center justify-center pt-20 bg-background" >

        <ContactPage />
        </FlowSection>
      </FlowArt>
      </div>
        <footer >
          <p className='px-6 text-boska'>
            I think therefore I am 
          </p>
      </footer>
    </main>
  </div>
  )
}

export default MainLayout