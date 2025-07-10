
import { Github, Linkedin, Mail } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="flex flex-col gap-[2vh] items-center justify-center text-center py-8 px-4">
      <h1 className="text-[clamp(1.5rem,4vw,1rem)] ">
        Let’s Get Connected, Drop A Message.
      </h1>

      <div className="flex flex-row gap-[4vw] items-center justify-center mt-4">
        <a
          href="https://https://github.com/metanoid46"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github className="w-[clamp(24px,6vw,40px)] h-[clamp(24px,6vw,40px)]" />
        </a>

        <a
          href="mailto:athuljoseliju123@gmail.com"
          aria-label="Email"
        >
          <Mail className="w-[clamp(24px,6vw,40px)] h-[clamp(24px,6vw,40px)]" />
        </a>

        <a
          href="https://linkedin.com/in/athuljoseliju"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-[clamp(24px,6vw,40px)] h-[clamp(24px,6vw,40px)]" />
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
