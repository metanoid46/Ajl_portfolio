import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Background.css';

const NUM_CIRCLES = 50;

const Background: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const circlesRefs = useRef<HTMLDivElement[]>([]);

  // Reset refs array on each render (optional, depends on your needs)
  circlesRefs.current = [];

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !circlesRefs.current.includes(el)) {
      circlesRefs.current.push(el);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      circlesRefs.current.forEach((circle, i) => {
        const movementX = (mouseX - innerWidth / 2) * 0.02 * (i / NUM_CIRCLES);
        const movementY = (mouseY - innerHeight / 2) * 0.02 * (i / NUM_CIRCLES);

        gsap.to(circle, {
          x: movementX,
          y: movementY,
          ease: 'power3.out',
          duration: 0.5,
          overwrite: 'auto',
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="background bg:" ref={containerRef}>
      {Array.from({ length: NUM_CIRCLES }).map((_, idx) => (
        <div
          key={idx}
          ref={addToRefs}
          className="circle"
          style={{
            borderRadius:`10000px`,
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            width: `${10 + Math.random() * 20}px`,
            height: `${10 + Math.random() * 20}px`,
            opacity: 0.3 + Math.random() * 0.5,
          }}
        />
      ))}
    </div>
  );
};

export default Background;
