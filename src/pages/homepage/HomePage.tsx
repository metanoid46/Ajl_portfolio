import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './HomePage.css'

const tags = [
  "Machine Learning Engineer",
  "Full Stack Developer",
  "UI/UX Designer",
  "Data Engineer",
  "Software Engineer"
];

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const scrambleLetter = () => characters[Math.floor(Math.random() * characters.length)];

export const HomePage: React.FC = () => {
  const targetText = "ATHUL JOSE LIJU";  
  const [scrambledText, setScrambledText] = useState<string[]>(Array(targetText.length).fill(' '));
  const wordRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let i = 0;

    const animateNextChar = () => {
      if (i >= targetText.length) return;

      const charIndex = i;
      let scrambleCount = 0;
      const maxScrambles = 8;

      if (targetText[charIndex] === ' ') {

        setScrambledText(prev => {
          const updated = [...prev];
          updated[charIndex] = ' ';
          return updated;
        });
        i++;
        animateNextChar();
        return;
      }

      const scrambleInterval = setInterval(() => {
        scrambleCount++;
        setScrambledText(prev => {
          const updated = [...prev];
          updated[charIndex] = scrambleLetter();
          return updated;
        });

        if (scrambleCount >= maxScrambles) {
          clearInterval(scrambleInterval);
          setScrambledText(prev => {
            const updated = [...prev];
            updated[charIndex] = targetText[charIndex];
            return updated;
          });
          i++;
          animateNextChar();
        }
      }, 30);
    };

    animateNextChar();
  }, []);

  useEffect(() => {
    const el = wordRef.current;
    if (!el) return;

    const animateWord = () => {
      gsap.to(el, {
        y: -30,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.in',
        onComplete: () => {
          setCurrentIndex(prev => (prev + 1) % tags.length);
          gsap.set(el, { y: 30, opacity: 0 });
          gsap.to(el, {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: 'power2.out'
          });
        }
      });
    };

    const interval = setInterval(animateWord, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='homeContents'>
  <div className='scrambleContainer'>
    <div className='scrambledText'>
      {scrambledText.map((char, i) => (
        <span key={i}>{char}</span>
      ))}
    </div>
    <div className='tagText' ref={wordRef}>
      {tags[currentIndex]}
    </div>
  </div>
</div>

  );
};

export default HomePage;
