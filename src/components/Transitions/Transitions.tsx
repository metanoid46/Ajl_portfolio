import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

type TransitionType = 'zoom' | 'pushUp' | 'pushDown' | 'fade';

interface PageTransitionWrapperProps {
  children: React.ReactNode;
  transitionType: TransitionType;
}

const PageTransitionWrapper: React.FC<PageTransitionWrapperProps> = ({ children, transitionType }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Animate In
    switch (transitionType) {
      case 'zoom':
        gsap.fromTo(el, 
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, ease: 'power3.out' }
        );
        break;

      case 'pushUp':
        gsap.fromTo(el, 
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
        );
        break;

      case 'pushDown':
        gsap.fromTo(el, 
          { y: -100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
        );
        break;

      case 'fade':
      default:
        gsap.fromTo(el, 
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: 'power3.out' }
        );
    }

    // Animate Out on unmount
    return () => {
      switch (transitionType) {
        case 'zoom':
          gsap.to(el, { scale: 0.8, opacity: 0, duration: 0.4, ease: 'power3.in' });
          break;
        case 'pushUp':
          gsap.to(el, { y: -100, opacity: 0, duration: 0.4, ease: 'power3.in' });
          break;
        case 'pushDown':
          gsap.to(el, { y: 100, opacity: 0, duration: 0.4, ease: 'power3.in' });
          break;
        case 'fade':
        default:
          gsap.to(el, { opacity: 0, duration: 0.3, ease: 'power3.in' });
      }
    };
  }, [transitionType]);

  return <div ref={containerRef}>{children}</div>;
};

export default PageTransitionWrapper;
