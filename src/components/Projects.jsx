import React from 'react';
import SectionTitle from './SectionTitle.jsx';
import { projects } from '../data/portfolioData.jsx';
import {
  FaGithub, FaLink, FaReact, FaDatabase, FaUniversalAccess,
  FaCode, FaComments, FaChess, FaCamera, FaTrophy,
} from 'react-icons/fa';
import { SiFirebase } from 'react-icons/si';
import { motion } from 'framer-motion';

const projectIconMap = {
  FaUniversalAccess, FaReact, SiFirebase, FaDatabase,
  FaComments, FaCode, FaChess, FaCamera,
};
const getProjectIcon = name => {
  const Icon = projectIconMap[name] || FaCode;
  return <Icon size={17} />;
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22,1,0.36,1] } },
};

const ProjectCard = ({ project }) => (
  <motion.div variants={cardVariants} className="card flex flex-col h-full group" whileHover={{ y: -6 }}>
    {/* Gradient header strip */}
    <div
      className="h-1.5 rounded-t-[16px]"
      style={{ background: 'linear-gradient(90deg, rgb(var(--color-accent-1)), rgb(var(--color-accent-2)))' }}
    />

    <div className="flex flex-col flex-1 p-5">
      {/* Header row */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            background: 'linear-gradient(135deg, rgb(var(--color-accent-1)/0.12), rgb(var(--color-accent-2)/0.08))',
            color: 'rgb(var(--color-accent-1))',
          }}
        >
          {getProjectIcon(project.iconName)}
        </div>
        <div className="flex items-center gap-3 transition-opacity duration-200">
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              style={{ color: 'rgb(var(--color-text-secondary))' }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgb(var(--color-accent-1))'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgb(var(--color-text-secondary))'}
              className="inline-block transform transition-all duration-300 hover:-translate-y-1 hover:scale-110"
            >
              <FaGithub size={17} />
            </a>
          )}
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label="Live"
              style={{ color: 'rgb(var(--color-text-secondary))' }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgb(var(--color-accent-1))'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgb(var(--color-text-secondary))'}
              className="inline-block transform transition-all duration-300 hover:-translate-y-1 hover:scale-125 hover:rotate-12"
            >
              <FaLink size={15} />
            </a>
          )}
          {project.award && (
            <a href={project.award} target="_blank" rel="noopener noreferrer" aria-label="Award"
              className="inline-block transform transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:-rotate-12"
            >
              <FaTrophy size={15} style={{ color: 'rgb(var(--color-accent-2))' }} />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-xl font-bold text-text-primary mb-1.5 leading-snug">{project.title}</h3>

      <div className="flex items-center gap-2 mb-3">
        {project.category && (
          <span
            className="text-sm font-mono px-3 py-1 rounded-full"
            style={{ background: 'rgb(var(--color-accent-2)/0.10)', color: 'rgb(var(--color-accent-2))' }}
          >
            {project.category}
          </span>
        )}
        {project.date && (
          <span className="text-sm text-text-secondary font-mono">{project.date}</span>
        )}
      </div>

      <p className="text-lg text-text-secondary leading-relaxed flex-1 mb-4">
        {project.description}
      </p>

      {project.tech?.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
        </div>
      )}
    </div>
  </motion.div>
);

const Projects = () => (
  <section id="projects" className="py-24 section-alt">
    <div className="container mx-auto px-5 sm:px-8 lg:px-10">
      <SectionTitle id="projects-title">Projects</SectionTitle>
      <motion.div
        className="grid md:grid-cols-1 lg:grid-cols-2 gap-14"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
      >
        {projects.map((project, i) => <ProjectCard key={i} project={project} />)}
      </motion.div>
    </div>
  </section>
);

export default Projects;
