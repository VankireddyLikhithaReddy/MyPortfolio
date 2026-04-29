import React, { useEffect, useRef, useState, useCallback } from 'react';

const TRAIL_COUNT = 12;

const CustomCursor = () => {
  const dotRef  = useRef(null);

  const mouse    = useRef({ x: 0, y: 0 });
  const rafId    = useRef(null);
  const lastPos  = useRef({ x: 0, y: 0 });

  const [hovering, setHovering] = useState(false);
  const [visible,  setVisible]  = useState(false);

  // Spawn a sparkle particle at a position
  const spawnSparkle = useCallback((x, y) => {
    const particle = document.createElement('div');
    const size = Math.random() * 6 + 3;
    const angle = Math.random() * 360;
    const distance = Math.random() * 18 + 6;
    const color = Math.random() > 0.5
      ? 'rgb(var(--color-accent-1))'
      : 'rgb(var(--color-accent-2))';

    particle.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      background: ${color};
      box-shadow: 0 0 ${size * 2}px ${color};
      pointer-events: none;
      z-index: 99990;
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.9;
      transition: transform 0.5s ease-out, opacity 0.5s ease-out;
    `;

    document.body.appendChild(particle);

    // Trigger animation
    requestAnimationFrame(() => {
      const rad = (angle * Math.PI) / 180;
      const dx = Math.cos(rad) * distance;
      const dy = Math.sin(rad) * distance;
      particle.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(0)`;
      particle.style.opacity = '0';
    });

    setTimeout(() => {
      particle.remove();
    }, 550);
  }, []);

  useEffect(() => {
    let moveTimer = null;

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top  = `${e.clientY}px`;
      }

      // Spawn sparkles only when moved enough
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 14) {
        spawnSparkle(e.clientX, e.clientY);
        lastPos.current = { x: e.clientX, y: e.clientY };
      }
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    // Hover detection on interactive elements
    const addHover = (el) => {
      el.addEventListener('mouseenter', () => setHovering(true));
      el.addEventListener('mouseleave', () => setHovering(false));
    };
    const watchInteractive = () => {
      document
        .querySelectorAll('a, button, [role="button"], input, textarea, select, label, .card')
        .forEach(addHover);
    };
    const timer = setTimeout(watchInteractive, 800);

    // Keep RAF alive (used for future extensions)
    const animate = () => {
      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);

    document.addEventListener('mousemove',  onMove);
    document.addEventListener('mouseenter', onEnter);
    document.addEventListener('mouseleave', onLeave);

    return () => {
      document.removeEventListener('mousemove',  onMove);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafId.current);
      clearTimeout(timer);
      clearTimeout(moveTimer);
    };
  }, [spawnSparkle]);

  return (
    <>
      {/* Main dot */}
      <div
        ref={dotRef}
        className={`cursor-dot ${hovering ? 'hovering' : ''}`}
        style={{ opacity: visible ? 1 : 0 }}
      />
    </>
  );
};

export default CustomCursor;
