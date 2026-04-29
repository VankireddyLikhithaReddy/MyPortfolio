import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(false);
  const lastScrollY = useRef(0);
  const flashTimeout = useRef(null);

  const springProgress = useSpring(0, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollProgress(progress);
      springProgress.set(progress);

      // Detect scroll up
      if (scrollTop < lastScrollY.current && scrollTop > 50) {
        setScrollingUp(true);
        clearTimeout(flashTimeout.current);
        flashTimeout.current = setTimeout(() => setScrollingUp(false), 800);
      }

      lastScrollY.current = scrollTop;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(flashTimeout.current);
    };
  }, [springProgress]);

  return (
    <>
      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 right-0 z-[100] h-[3px]"
        style={{ background: 'transparent' }}
      >
        <motion.div
          className="h-full origin-left"
          style={{
            scaleX: springProgress,
            transformOrigin: 'left',
            background: scrollingUp
              ? 'linear-gradient(90deg, rgb(var(--color-accent-2)), rgb(var(--color-accent-1)), rgb(var(--color-accent-2)))'
              : 'linear-gradient(90deg, rgb(var(--color-accent-1)), rgb(var(--color-accent-2)))',
            boxShadow: scrollingUp
              ? '0 0 14px 3px rgb(var(--color-accent-2)/0.7)'
              : '0 0 8px rgb(var(--color-accent-1)/0.5)',
            width: `${scrollProgress}%`,
            transition: 'background 0.4s ease, box-shadow 0.4s ease',
          }}
        />
      </div>

      {/* Scroll-up flash overlay */}
      {scrollingUp && (
        <motion.div
          key="scroll-up-flash"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.06, 0] }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="fixed inset-0 z-[90] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 40% at 50% 0%, rgb(var(--color-accent-1)/0.25) 0%, transparent 70%)',
          }}
        />
      )}
    </>
  );
};

export default ScrollProgressBar;
