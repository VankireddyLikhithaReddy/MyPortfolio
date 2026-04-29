import React from 'react';
import SectionTitle from './SectionTitle.jsx';
import { experience } from '../data/portfolioData.jsx';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => (
  <section id="experience" className="py-24 bg-primary-bg">
    <div className="container mx-auto px-5 sm:px-8 lg:px-10">
      <SectionTitle id="experience-title">Work Experience</SectionTitle>

      <div className="max-w-6xl mx-auto relative">
        {/* Gradient timeline line */}
        <div className="timeline-line" />

        <div className="space-y-12 pl-2">
          {experience.map((item, index) => (
            <motion.div
              key={`${item.company}-${item.role}`}
              className="flex gap-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22,1,0.36,1] }}
            >
              {/* Node */}
              <div className="flex-shrink-0 w-12 h-12 relative z-10 rounded-2xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgb(var(--color-accent-1)/0.14), rgb(var(--color-accent-2)/0.08))',
                  border: '2px solid rgb(var(--color-accent-1)/0.22)',
                  color: 'rgb(var(--color-accent-1))',
                }}
              >
                <FaBriefcase size={15} />
              </div>

              {/* Card */}
              <div className="card flex-1 p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-text-primary leading-snug">{item.role}</h3>
                    <p className="text-base font-semibold" style={{ color: 'rgb(var(--color-accent-2))' }}>
                      {item.company}
                      {item.location && (
                        <span className="font-normal text-text-secondary"> · {item.location}</span>
                      )}
                    </p>
                  </div>
                  <span
                    className="text-xs font-mono px-3 py-1 rounded-full self-start sm:self-auto whitespace-nowrap"
                    style={{
                      background: 'linear-gradient(135deg, rgb(var(--color-accent-1)/0.10), rgb(var(--color-accent-2)/0.06))',
                      color: 'rgb(var(--color-accent-1))',
                      border: '1px solid rgb(var(--color-accent-1)/0.15)',
                    }}
                  >
                    {item.duration}
                  </span>
                </div>

                {item.points?.length > 0 && (
                  <ul className="space-y-1.5 mb-4">
                    {item.points.map((pt, i) => (
                      <li key={i} className="text-base text-text-secondary flex gap-2.5 leading-relaxed">
                        <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ background: 'linear-gradient(135deg, rgb(var(--color-accent-1)), rgb(var(--color-accent-2)))' }} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                )}

                {item.tech?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-3" style={{ borderTop: '1px solid rgb(var(--color-accent-1)/0.08)' }}>
                    {item.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
