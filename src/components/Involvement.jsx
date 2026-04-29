import React from 'react';
import SectionTitle from './SectionTitle.jsx';
import { leadershipAndInvolvement } from '../data/portfolioData.jsx';
import { FaAward, FaUsers, FaBriefcase, FaMedal } from 'react-icons/fa';
import { motion } from 'framer-motion';

const getIcon = title => {
  const t = title.toLowerCase();
  if (t.includes('captain')) return <FaMedal size={16} />;
  if (t.includes('partner')) return <FaBriefcase size={16} />;
  if (t.includes('executive')) return <FaUsers size={16} />;
  if (t.includes('rank') || t.includes('award') || t.includes('winner')) return <FaAward size={16} />;
  return <FaBriefcase size={16} />;
};

const Involvement = () => (
  <section id="involvement" className="py-24 bg-primary-bg">
    <div className="container mx-auto px-5 sm:px-8 lg:px-10">
      <SectionTitle id="involvement-title">Leadership & Involvement</SectionTitle>

      <div className="max-w-4xl mx-auto relative">
        <div className="timeline-line" />
        <div className="space-y-7 pl-2">
          {leadershipAndInvolvement.map((item, index) => (
            <motion.div
              key={index}
              className="flex gap-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Node */}
              <div
                className="flex-shrink-0 w-12 h-12 z-10 relative rounded-2xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgb(var(--color-accent-2)/0.12), rgb(var(--color-accent-1)/0.08))',
                  border: '2px solid rgb(var(--color-accent-2)/0.25)',
                  color: 'rgb(var(--color-accent-2))',
                }}
              >
                {getIcon(item.role)}
              </div>

              {/* Content card */}
              <div className="card flex-1 p-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <h3 className="text-sm font-bold text-text-primary">{item.role}</h3>
                  <span
                    className="text-xs font-mono px-3 py-0.5 rounded-full self-start"
                    style={{
                      background: 'rgb(var(--color-accent-2)/0.08)',
                      color: 'rgb(var(--color-accent-2))',
                      border: '1px solid rgb(var(--color-accent-2)/0.15)',
                    }}
                  >
                    {item.duration}
                  </span>
                </div>

                <p className="text-sm font-semibold mb-3" style={{ color: 'rgb(var(--color-accent-1))' }}>
                  {item.organization}
                </p>

                {item.points?.length > 0 && (
                  <ul className="space-y-1.5">
                    {item.points.map((point, i) => (
                      <li key={i} className="text-xs text-text-secondary flex gap-2.5 leading-relaxed">
                        <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ background: 'rgb(var(--color-accent-2)/0.6)' }} />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Involvement;
