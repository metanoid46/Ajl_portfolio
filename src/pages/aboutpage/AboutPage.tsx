
import Aboutme from './AboutMe'
import { techStack } from './LanguagesAndFrameworks'
import './About.css'

export const AboutPage = () => {
    const data = Aboutme[0];
    
  const sections = [
  {
    id: 1,
    heading: 'About Me',
    content: (
      <p>{data?.About}</p>
    ),
  },
 {
  id: 2,
  heading: 'Experience',
  content: (
    <div className="section-content">
      {data?.Experience.map((exp, i) => (
        <div key={i} className="experience-item mb-4">
          <div className="position-row">
            <strong>{exp.position}</strong>
            <span className="date">{exp.startDate} - {exp.endDate}</span>
          </div>
          <p className="place">{exp.company}</p>
          <p>{exp.description}</p>
        </div>
      ))}
    </div>
  ),
},
{
  id: 3,
  heading: 'Education',
  content: (
    <div className="section-content">
      {data?.Education.map((edu, i) => (
        <div key={i} className="education-item mb-4">
          <div className="position-row">
            <strong>{edu.Degree}</strong>
            <span className="date">{edu.startDate} - {edu.endDate}</span>
          </div>
          <p className="place">{edu.University}</p>
          <p>Achievements: {edu.achievements}</p>
        </div>
      ))}
    </div>
  ),
},
{
  id: 4,
  heading: 'Skills and Languages',
  content: (
    <div className="section-content">
      <ul className="skills-list">
        {data?.Soft.map((skill, i) => (
          <li key={i} className="skill-item">{skill}</li>
        ))}
      </ul>
      <ul className="skills-list">
        <ul className="skills-list">
  <div className="grid grid-cols-6 sm:grid-cols-3 md:grid-cols-12 gap-6 mt-6">
    {techStack.map((tech) => (
      <div key={tech.name} className="flex flex-col items-center">
        <img src={tech.icon} alt={tech.name} className="w-16 h-16 object-contain" />
      </div>
    ))}
  </div>
</ul>

      </ul>
    </div>
  ),
},
];


  return (
    <div className='aboutContents'>
        <div className="aboutPageContainer">
        {sections.map(({ id, heading, content }) => (
            <div key={id} >
            <h2 className='heading'>{heading}</h2>
            <div className='mb-[20%]'>{content}</div>
            </div>
        ))}
        </div>
    </div>
  )
}
