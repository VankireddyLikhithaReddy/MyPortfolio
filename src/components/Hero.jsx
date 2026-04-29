import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { personalInfo, socialLinks } from '../data/portfolioData.jsx';
import { FaDownload, FaLinkedin, FaGithub, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

const socialIconMap = { FaLinkedin, FaGithub, FaEnvelope };
const getIcon = (name, size = 18) => {
  const Icon = socialIconMap[name];
  return Icon ? <Icon size={size} /> : null;
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

const Hero = () => (
  <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-primary-bg">
    {/* Grid */}
    <div className="hero-grid" aria-hidden="true" />
    {/* Blobs */}
    <div className="hero-blob hero-blob-1" aria-hidden="true" />
    <div className="hero-blob hero-blob-2" aria-hidden="true" />

    <div className="container mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
      <div className="max-w-3xl mx-auto text-center">



        {/* Name */}
        <motion.h1
          {...fadeUp(0.08)}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-text-primary tracking-tight mb-4 leading-[1.1]"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Typing */}
        <motion.div {...fadeUp(0.16)} className="mb-5 h-9 flex items-center justify-center">
          <TypeAnimation
            sequence={[
              'I build full-stack web applications.', 2000,
              'I craft scalable REST APIs.',           2000,
              'I work with React · Python · Java.',   2000,
              'I deploy with Docker & CI/CD.',         2000,
              'I solve real engineering problems.',    2000,
            ]}
            wrapper="span"
            speed={58}
            repeat={Infinity}
            style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '1.1rem',
              fontWeight: 500,
              color: 'rgb(var(--color-text-secondary))',
              letterSpacing: '-0.02em',
            }}
          />
        </motion.div>

        {/* Bio */}
        <motion.p
          {...fadeUp(0.24)}
          className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.bio}
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.32)} className="flex flex-wrap justify-center gap-4 mb-12">
          <ScrollLink to="projects" smooth duration={500} offset={-70} className="btn-primary cursor-pointer">
            View Projects
          </ScrollLink>
          <a href={personalInfo.resumeLink} target="_blank" rel="noopener noreferrer" className="btn-outline">
            <FaDownload size={14} />
            Download CV
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div {...fadeUp(0.40)} className="flex justify-center gap-3">
          {Object.values(socialLinks).map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.url}
              className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-200"
              style={{ color: 'rgb(var(--color-text-secondary))', borderColor: 'rgb(var(--color-text-secondary)/0.20)' }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'rgb(var(--color-accent-1))';
                e.currentTarget.style.borderColor = 'rgb(var(--color-accent-1)/0.40)';
                e.currentTarget.style.background = 'rgb(var(--color-accent-1)/0.07)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'rgb(var(--color-text-secondary))';
                e.currentTarget.style.borderColor = 'rgb(var(--color-text-secondary)/0.20)';
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {getIcon(link.iconName)}
            </a>
          ))}
        </motion.div>
      </div>
    </div>

    {/* Scroll cue */}
    <ScrollLink
      to="about" smooth duration={700}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col items-center gap-1.5 animate-bounce"
      style={{ color: 'rgb(var(--color-accent-1)/0.5)' }}
    >
      <span style={{ fontFamily: '"IBM Plex Mono"', fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
        scroll
      </span>
      <FaArrowDown size={12} />
    </ScrollLink>
  </section>
);

export default Hero;
