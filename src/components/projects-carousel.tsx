import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import projectsData from '@/Pages/Projects/ProjectsContent.json';

interface ProjectItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  impact: string;
  date: string;
  tech: string[];
  highlights?: string[];
}

export function ProjectsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const projects = projectsData.projects as ProjectItem[];

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const currentProject = projects[activeIndex];

  return (
    <div className="w-full py-8 md:py-12 px-4">
      {/* Main Card */}
      <div className="flex flex-col lg:flex-row items-center gap-8 max-w-6xl mx-auto">
        {/* Card */}
        <div className="w-full lg:w-2/3  rounded-3xl bg-foreground ">
          <div className=" rounded-3xl p-8 md:p-12 min-h-96 flex flex-col justify-between text-background shadow-2xl">
            {/* Header */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm uppercase tracking-widest opacity-80 mb-2">{currentProject.date}</p>
                  <h2 className="text-4xl md:text-5xl font-boska font-bold mb-2">{currentProject.title}</h2>
                </div>
                <div className="text-5xl font-boska opacity-30">
                  {String(activeIndex + 1).padStart(2, '0')}
                </div>
              </div>

              <p className="text-lg md:text-xl opacity-90 mb-4">{currentProject.subtitle}</p>

              <p className="text-base md:text-lg leading-relaxed opacity-85 mb-6">
                {currentProject.description}
              </p>

              {currentProject.impact && (
                <p className="text-base md:text-lg font-switzer font-semibold mb-6 flex items-center gap-2">
                  {currentProject.impact}
                </p>
              )}
            </div>

            
            <div>
              <p className="text-sm uppercase tracking-widest opacity-70 mb-3">Technologies</p>
              <div className="flex flex-wrap gap-2">
                {currentProject.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm  rounded-full text-background font-switzer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>


        <div className="w-full lg:w-1/3 flex flex-col items-center gap-8">
          
          <div className="flex gap-4">
            <button
              onClick={goToPrevious}
              className="p-4 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:scale-110"
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="p-4 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:scale-110"
              aria-label="Next project"
            >
              <ChevronRight size={24} />
            </button>
          </div>

        
          <div className="flex gap-3 flex-wrap justify-center">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-foreground w-8'
                    : 'bg-foreground/30 hover:bg-foreground/50'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-foreground font-switzer">
              <span className="text-foreground font-bold text-lg">{String(activeIndex + 1).padStart(2, '0')}</span>
              <span className="mx-2">/</span>
              <span className="text-lg">{String(projects.length).padStart(2, '0')}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
