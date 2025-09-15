import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import './ProjectPage.css';

const projects = [
  {
    id: 1,
    title: 'White Knight',
    link: 'https://example.com/white-knight',
    description: `A secure cloud-based platform for fast and efficient legal document management with
    role-based, team, and project features. Allows users to send, sign, and fill documents, request edits,
    collaborate, and manage versions. Includes chat and step-by-step progress tracking.`,
    stacks: ["React", "Express", "Node", "AWS DynamoDB", "AWS S3", "TypeScript", "AntD", "JWT", "SMTP"],
    icon: ''
  },
  {
    id: 2,
    title: 'Produle',
    link: 'https://example.com/produle',
    description: `A project manager that helps users break projects into smaller steps for
    easier tracking, collaboration, and accountability.`,
    stacks: ["React", "MongoDB", "Express", "Node", "JavaScript", "AntD", "JWT", "SMTP"],
    icon: ''
  },
];

const ProjectPage: React.FC = () => {
  return (
    <div className="project-page">
      <div className="projects-grid">
        {projects.map(project => (
            <div
              key={project.id}
              className="project-wrapper"
            >
              <div className='project-card-glow '/>
              <Card className="project-card">
                <div className="project-card-liquid"  />
                <div className="project-card-border" />
                <div className="project-card-ripples">
                  <div  />
                  <div  />
                </div>
                <div className="project-card-header">
                  <CardTitle className="project-card-title">{project.title}</CardTitle>
                </div>
                <CardContent className="project-card-content">
                  <CardDescription className="project-card-description">{project.description}</CardDescription>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-btn">
                    <ExternalLink />
                    <span>View Project</span>            </a>
                </CardContent>
                <CardFooter className="project-card-footer">
                  {project.stacks.map((stack, index) => {
                    return (
                      <Badge key={index} className="project-badge">
                        <span>{stack}</span>
                      </Badge>
                    );
                  })}
                </CardFooter>
              </Card>
            </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
