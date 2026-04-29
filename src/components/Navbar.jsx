import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { personalInfo } from '../data/portfolioData.jsx';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Certs', to: 'certifications' },
  { name: 'Experience', to: 'experience' },
  { name: 'Leadership', to: 'involvement' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [theme, setTheme] = useState(() =>
    typeof window !== 'undefined'
      ? (localStorage.getItem('theme') || 'dark')
      : 'dark'
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('theme-dark', 'theme-light');
    root.classList.add(theme === 'dark' ? 'theme-dark' : 'theme-light');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    let lastScroll = window.scrollY;
    
    const onScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 40);
      
      if (currentScroll > lastScroll && currentScroll > 80 && !isOpen) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isOpen]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: isHidden ? '-100%' : 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 nav-glass transition-all duration-300 ${isScrolled || isOpen ? 'shadow-sm py-3' : 'py-5'
        }`}
    >
      <div className="container mx-auto px-5 sm:px-8 lg:px-10 flex justify-between items-center">

        {/* Logo */}
        <ScrollLink to="hero" smooth duration={500} className="cursor-pointer flex items-center gap-2.5 group">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black text-white"
            style={{ background: 'linear-gradient(135deg, rgb(var(--color-accent-1)), rgb(var(--color-accent-2)))' }}
          >
            L
          </div>
          <span className="hidden sm:block font-semibold text-base text-text-secondary group-hover:text-text-primary transition-colors">
            {personalInfo.name}
          </span>
        </ScrollLink>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-0.5">
          {navItems.map(item => (
            <ScrollLink
              key={item.name}
              to={item.to}
              smooth duration={500} offset={-70}
              spy activeClass="!text-accent-1 font-semibold"
              className="px-3 py-1.5 text-base font-medium text-text-secondary hover:text-text-primary cursor-pointer transition-colors rounded-lg hover:bg-accent-1/5"
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200"
            style={{
              color: 'rgb(var(--color-text-secondary))',
              borderColor: 'rgb(var(--color-text-secondary) / 0.20)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = 'rgb(var(--color-accent-1))';
              e.currentTarget.style.borderColor = 'rgb(var(--color-accent-1) / 0.40)';
              e.currentTarget.style.background = 'rgb(var(--color-accent-1) / 0.06)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'rgb(var(--color-text-secondary))';
              e.currentTarget.style.borderColor = 'rgb(var(--color-text-secondary) / 0.20)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            {theme === 'dark' ? <FaSun size={14} /> : <FaMoon size={14} />}
          </button>
          <a
            href={personalInfo.resumeLink}
            target="_blank" rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: '9px 22px', fontSize: '1rem', borderRadius: '10px' }}
          >
            Resume
          </a>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggleTheme} style={{ color: 'rgb(var(--color-accent-1))' }}>
            {theme === 'dark' ? <FaSun size={17} /> : <FaMoon size={17} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} style={{ color: 'rgb(var(--color-accent-1))' }}>
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden overflow-hidden"
            style={{ borderTop: '1px solid rgb(var(--color-accent-1) / 0.08)' }}
          >
            <div className="container mx-auto px-5 py-4 flex flex-col gap-1">
              {navItems.map(item => (
                <ScrollLink
                  key={item.name}
                  to={item.to} smooth duration={500} offset={-70}
                  className="px-4 py-2.5 rounded-xl text-base font-medium text-text-secondary hover:text-text-primary hover:bg-accent-1/5 cursor-pointer transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </ScrollLink>
              ))}
              <a
                href={personalInfo.resumeLink}
                target="_blank" rel="noopener noreferrer"
                className="btn-primary mt-2 justify-center"
                style={{ borderRadius: '10px' }}
                onClick={() => setIsOpen(false)}
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
