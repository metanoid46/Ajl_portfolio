import { Card } from '@/components/ui/card'

import './AboutPage.css'
const Education=[ 
    {
        id: 1,
      Degree: 'Bachelor Of Computer Science (AI and Big Data)',
      University: 'University of Wollongong',
      startDate: 'June 2022',
      endDate: 'July 2025',
      achievements: 'University Excellence Scholarship',
    }
  ] 
  const workExperience =  [
    {
      id: 1,
      position: 'Web-App Developer Intern',
      company: 'Sample Assist',
      startDate: 'October 2024',
      endDate: 'June 2025',
      description: `As a Web Developer/UI Designer intern at SampleAssist, I’ve played a key role in a collaborative team of five to design and
develop user-friendly interfaces, creating wireframes that enhanced the overall user experience. I helped implement testing protocols through manual testing,
working closely with developers to identify and resolve critical bugs, ultimately improving application functionality. I utilized
Figma to create prototypes and visual designs, ensuring a cohesive design language that aligned with the project’s goals. Additionally,
I contributed to building a robust and scalable web application using React for the front-end, AWS hosting services for deployment, and DynamoDB for database management.`,
    },
    {
        id: 2,
      position: 'Project Manager Intern',
      company: 'Practera Technology Australia',
      startDate: 'June 2023',
      endDate: 'July 2023',
      description: `During my 4-week professional experience in the Practera vacation program, I shadowed the role of a Project Manager for Opera Canberra. I assisted in the early stages of
project initiation, where I contributed to research, defined the project scope, and identified key stakeholders.
Throughout the internship, I collaborated closely with cross-functional teams, including IT, marketing, and operations,
to ensure that the project aligned with the broader organizational goals and met the necessary requirements.
This experience helped me develop strong skills in project planning, team coordination, and stakeholder management.`,
    }
  ]
const AboutPage = () => {
  return (
    <div className='aboutPage timeline'>
      <div className='education tab'>
            
                <div className='educationTitle title'>Education</div>
                {Education.map((edu)=>(
                    <Card key={edu.id} className='aboutCard educationCard timelineItem'>
                    <div className='educationDetails'>
                        <div className='degree'><div>{edu.Degree}</div> <div>{edu.startDate} - {edu.endDate}</div></div>
                        <div className='university sub'>{edu.University}</div>
                        <div className='achievements sub'>{edu.achievements}</div>
                    </div>
                    </Card>
                ))}
            
        </div> 
        <div className='workExperience tab'>
           
                <div className='workTitle title'>Work Experience</div>
                {workExperience.map((work)=>(
                     <Card key={work.id} className='aboutCard workCard timelineItem'>
                    <div className='workDetails'>
                        <div className='position'><div>{work.position}</div> <div> {work.startDate} - {work.endDate}</div></div>
                        <div className='company sub'>{work.company}</div>
                        <div className='description sub'>{work.description}</div>
                    </div>
                    </Card>
                ))}
            
        </div>
        
    </div>
  )
}
export default AboutPage;