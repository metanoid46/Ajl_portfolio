import HomePage from '@/Pages/HomePage/HomePage';
import React, { useState, useEffect, useRef } from 'react';
import './MainLayout.css';
import AppBar from '@/components/AppBar/AppBar';
import AboutPage from '@/Pages/AboutPage/AboutPage';
import ProjectPage from '@/Pages/ProjectPage/ProjectPage';
import ContactPage from '@/Pages/ContactPage/ContactPage';
import { Menu, X } from 'lucide-react'; 

interface Page {
  id: number;
  title: string;
  content: React.ReactNode;
  color: string;
}

interface PageMainProps {
  pages?: Page[];
  onPageChange?: (pageId: number) => void;
}

const Main: React.FC<PageMainProps> = ({
  pages = [
    { id: 1, title: "HOME", content: <HomePage />, color: "#811C0E" },
    { id: 2, title: "ABOUT", content: <AboutPage />, color: "#631107ff" },
    { id: 3, title: "PROJECTS", content: <ProjectPage />, color: "#420c05ff" },
    { id: 4, title: "CONTACT", content: <ContactPage />, color: "#080100ff" },
  ],
  onPageChange
}) => {
  const [currentPageId, setCurrentPageId] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // ✅ menu toggle
  const contentRef = useRef<HTMLDivElement>(null);
  const pageRefs = useRef<{ [key: number]: HTMLDivElement }>({});

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;

      const scrollTop = contentRef.current.scrollTop;
      const containerHeight = contentRef.current.clientHeight;
      const scrollCenter = scrollTop + containerHeight / 2;

      let closestPage = 1;
      let minDistance = Infinity;

      pages.forEach(page => {
        const pageElement = pageRefs.current[page.id];
        if (pageElement) {
          const pageTop = pageElement.offsetTop;
          const pageHeight = pageElement.offsetHeight;
          const pageCenter = pageTop + pageHeight / 2;
          const distance = Math.abs(scrollCenter - pageCenter);

          if (distance < minDistance) {
            minDistance = distance;
            closestPage = page.id;
          }
        }
      });

      if (closestPage !== currentPageId) {
        setCurrentPageId(closestPage);
        onPageChange?.(closestPage);
      }
    };

    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.addEventListener('scroll', handleScroll);
      handleScroll();

      return () => {
        contentElement.removeEventListener('scroll', handleScroll);
      };
    }
  }, [currentPageId, pages, onPageChange]);

  const handlePageClick = (pageId: number) => {
    const pageElement = pageRefs.current[pageId];
    if (pageElement && contentRef.current) {
      const offsetTop = pageElement.offsetTop;
      const containerHeight = contentRef.current.clientHeight;
      const pageHeight = pageElement.offsetHeight;
      const scrollTo = offsetTop - (containerHeight - pageHeight) / 2;

      contentRef.current.scrollTo({
        top: Math.max(0, scrollTo),
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false); // ✅ close menu when navigating
  };

  const calculateOpacity = (pageId: number, currentId: number) => {
    const currentIndex = pages.findIndex(page => page.id === currentId);
    const pageIndex = pages.findIndex(page => page.id === pageId);
    const distance = Math.abs(pageIndex - currentIndex);

    if (distance === 0) return 1;
    if (distance === 1) return 0.4;
    if (distance === 2) return 0.3;
    if (distance === 3) return 0.2;
    return 0.1;
  };

  const currentColor = pages.find(p => p.id === currentPageId)?.color || "";

  return (
    <div className='body' style={{ backgroundColor: currentColor, transition: 'background-color 0.5s ease' }}>
      <header className='header'>
        <AppBar />

        {/* ✅ Hamburger for small screens */}
        <button className="hamburger" onClick={() => setIsMenuOpen(true)}>
          <Menu size={28} />
        </button>
      </header>

      <main className="mainContent">
        {/* ✅ Desktop Sidebar */}
        <div className="sideBar">
          <nav className="sidebar-nav">
            {pages.map((page) => {
              const opacity = calculateOpacity(page.id, currentPageId);
              return (
                <button
                  key={page.id}
                  onClick={() => handlePageClick(page.id)}
                  className={`sidebar-button ${currentPageId === page.id ? "active" : ""}`}
                  style={{ opacity }}
                >
                  <div className="page-name">
                    <span className="truncate">{page.title}</span>
                  </div>
                </button>
              );
            })}
          </nav>
        </div>

        {/* ✅ Mobile Sidebar Modal */}
        {isMenuOpen && (
          <div className="sidebar-modal">
            <button className="close-btn" onClick={() => setIsMenuOpen(false)}>
              <X size={28} />
            </button>
            <nav className="sidebar-modal-nav">
              {pages.map((page) => (
                <button
                  key={page.id}
                  onClick={() => handlePageClick(page.id)}
                  className={`sidebar-button ${currentPageId === page.id ? "active" : ""}`}
                >
                  <div className="page-name">
                    <span className="truncate">{page.title}</span>
                  </div>
                </button>
              ))}
            </nav>
          </div>
        )}

        <div ref={contentRef} className="page">
          {pages.map((page) => (
            <div
              key={page.id}
              ref={(el) => { if (el) pageRefs.current[page.id] = el; }}
              className="page-section"
            >
              <div className="page-content">
                {page.content}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Main;
