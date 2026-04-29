import React from 'react';
import SectionTitle from './SectionTitle.jsx';
import { personalInfo, education } from '../data/portfolioData.jsx';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaMedal, FaLaptopCode, FaMapMarkerAlt } from 'react-icons/fa';



const About = () => (
  <section id="about" className="py-24 section-alt">
    <div className="container mx-auto px-5 sm:px-8 lg:px-10">
      <SectionTitle id="about-title">About Me</SectionTitle>



      {/* Bio */}
      <motion.p
        className="text-center text-base sm:text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Hi, I'm{' '}
        <span className="font-semibold text-text-primary">Likhitha</span> — a software developer
        specializing in full-stack web engineering with hands-on experience at{' '}
        <span className="font-semibold" style={{ color: 'rgb(var(--color-accent-1))' }}>Capgemini</span>.
        I build enterprise-grade applications using React.js, Python, Java, FastAPI, and cloud-native stacks —
        focused on performance, clean architecture, and delivering real business value.
      </motion.p>

      {/* Education */}
      <h3 className="text-lg font-bold text-center text-text-primary mb-7 flex items-center justify-center gap-2.5">
        <span style={{ color: 'rgb(var(--color-accent-1))' }}><FaGraduationCap size={20} /></span>
        Education
      </h3>

      <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            className="card p-6"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.12 }}
          >
            {/* Degree badge */}
            <div className="flex items-start gap-3 mb-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, rgb(var(--color-accent-1)/0.12), rgb(var(--color-accent-2)/0.08))',
                  color: 'rgb(var(--color-accent-1))',
                }}
              >
                <FaGraduationCap size={17} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-text-primary text-base leading-snug">{edu.institution}</h4>
                <p className="text-sm text-text-secondary mt-0.5 leading-snug">{edu.degree}</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span
                className="text-xs font-mono px-2.5 py-1 rounded-full"
                style={{ background: 'rgb(var(--color-accent-1)/0.08)', color: 'rgb(var(--color-accent-1))' }}
              >
                {edu.duration}
              </span>
              {edu.score && (
                <span className="badge-accent">
                  <FaMedal size={10} /> {edu.score}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
