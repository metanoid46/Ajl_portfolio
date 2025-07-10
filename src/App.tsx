import { Route, Routes, useLocation,Navigate } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import MainLayout from './Layout/mainLayout/MainLayout';
import { HomePage } from './pages/homepage/HomePage';
import { ProjectPage } from './pages/projectpage/ProjectPage';
import { AboutPage } from './pages/aboutpage/AboutPage';
import ContactPage from './pages/contactpage/ContactPage';
import PageTransitionWrapper from './components/Transitions/Transitions'; 

function App() {
  const location = useLocation();

  return (
    <ThemeProvider>
      <MainLayout>
        <Routes location={location} key={location.pathname}>
          <Route 
            path="/Ajl_portfolio" 
            element={
              <PageTransitionWrapper transitionType="zoom">
                <HomePage />
              </PageTransitionWrapper>
            } 
          />
          <Route
            path="/"
            element={<Navigate to="/Ajl_portfolio" replace />}
          />
          <Route 
            path="/projects" 
            element={
              <PageTransitionWrapper transitionType="pushUp">
                <ProjectPage />
              </PageTransitionWrapper>
            } 
          />
          <Route 
            path="/about" 
            element={
              <PageTransitionWrapper transitionType="pushDown">
                <AboutPage />
              </PageTransitionWrapper>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <PageTransitionWrapper transitionType="fade">
                <ContactPage />
              </PageTransitionWrapper>
            } 
          />
        </Routes>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
