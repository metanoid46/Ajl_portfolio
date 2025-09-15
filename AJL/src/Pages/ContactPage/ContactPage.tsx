import React from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Mail } from 'lucide-react';
import './ContactPage.css';

const ContactPage: React.FC = () => {

  return (
    <div className="contact-page">
      <div
        className="contact-card-wrapper"
       
      >
        <div
          className="radial-glow"
        />

        <Card className="contact-card">
          <div
            className="inner-glow"
          />

          <div className="contact-header">
            <CardTitle className="contact-title">Send a Message</CardTitle>
          </div>

          <CardContent>
             <div className='social-icons'>
                <a
                href="https://https://github.com/metanoid46"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className='icon'
                >
                <Github className="w-[clamp(24px,6vw,40px)] h-[clamp(24px,6vw,40px)]" />
                </a>

                <a
                href="mailto:athuljoseliju123@gmail.com"
                aria-label="Email"
                className='icon'
                >
                <Mail className="w-[clamp(24px,6vw,40px)] h-[clamp(24px,6vw,40px)]" />
                </a>

                <a
                href="https://linkedin.com/in/athuljoseliju"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className='icon'
                >
                <Linkedin className="w-[clamp(24px,6vw,40px)] h-[clamp(24px,6vw,40px)]" />
                </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;
