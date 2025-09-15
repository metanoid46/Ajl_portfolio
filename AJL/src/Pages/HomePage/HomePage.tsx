import React from 'react'
import me from '@/assets/me.svg'
import './HomePage.css'
import { Github, Linkedin, Mail } from 'lucide-react';
const HomePage: React.FC = () => {
  return (
  <div className='homePage'>
    <div className='image-container '>
    <img src={me} alt="me" className='image'/>
    </div>
    <div className='text-container'>
      <span className='name'>ATHUL JOSE LIJU</span>
      <div className='info'>Hi, I’m Athul Jose Liju, a passionate Computer Science and Artificial Intelligence student with a strong focus on web development, machine learning, and data-driven solutions. I enjoy building interactive, scalable applications and exploring the latest in AI, big data, and innovative software technologies.<br/>
        Over the years, I’ve gained hands-on experience in full-stack web development using the MERN stack, React-based interactive interfaces, and backend APIs with Node.js and Express, as well as working on machine learning projects with Spark MLlib and TensorFlow/Keras. I love turning complex problems into clean, efficient, and user-friendly solutions.<br/>
        I’m always eager to learn new technologies, tackle challenging projects, and collaborate on work that makes an impact. Outside of coding, I enjoy exploring AI advancements, personal fitness, and creative problem-solving.
      </div>
    </div>

    </div>);
}

export default HomePage