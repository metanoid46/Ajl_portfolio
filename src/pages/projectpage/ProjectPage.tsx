import './ProjectPage.css';
import logo from '@/assets/Logo_red_BG.svg';
import whiteKnight from '@/assets/WhiteKnight.png';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const projectData = [
  {
    id: 1,
    title: 'White Knight',
    description: 'A secure cloud-based platform for fast and efficient legal document processing',
    badges: ['React', 'AWS DynamoDB', 'AWS S3', 'TypeScript'],
    image: whiteKnight,
  },
  {
    id: 2,
    title: 'Currently Working On projects',
    description: 'Will be available soon',
    badges: [],
    image: logo,
  }
];

export const ProjectPage = () => {

  return (
    <div className="projectPageWrapper">
      <Carousel
        className="mainCarousal"
      >
        <CarouselContent className='contentCarousal'>
          {projectData.map((project, index) => (
            <CarouselItem key={index} className='itemCarousal'>
              <div className="projectCard">
                <img
                  src={project.image}
                  alt="project"
                  className="projectImage"
                />
                <div className="projectInfo">
                  <div className="projectTitle">
                    {project.title}
                  </div>
                  <div className="projectDescription">
                    {project.description}
                  </div>
                  <div className="projectBadges">
                    {project.badges.map((badge, i) => (
                      <span key={i} className="badge">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
         <div className="pagination">
        <CarouselPrevious/>
        <CarouselNext/>
      </div>
      </Carousel>     
    </div>
  );
};
