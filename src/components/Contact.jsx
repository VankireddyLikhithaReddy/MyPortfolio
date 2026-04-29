import React from 'react';
import SectionTitle from './SectionTitle.jsx';
import { personalInfo, socialLinks } from '../data/portfolioData.jsx';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const socialIconMap = { FaLinkedin, FaGithub, FaEnvelope };
const socialMeta = {
  FaLinkedin: { label: 'LinkedIn',  color: '#0A66C2' },
  FaGithub:   { label: 'GitHub',    color: null },
  FaEnvelope: { label: 'Email',     color: null },
};

const Contact = () => (
  <section id="contact" className="py-24 section-alt">
    <div className="container mx-auto px-5 sm:px-8 lg:px-10">
      <SectionTitle id="contact-title">Get In Touch</SectionTitle>

      <motion.div
        className="max-w-lg mx-auto text-center"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-10">
          Whether you have an exciting role, a project idea, or just want to connect —
          I'd love to hear from you. Drop me a message and I'll respond promptly!
        </p>

        <a
          href={`mailto:${personalInfo.email}`}
          className="btn-primary inline-flex mb-12"
          style={{ fontSize: '1.2rem', padding: '16px 40px', borderRadius: '14px' }}
        >
          <FaEnvelope size={18} />
          Say Hello ✨
        </a>

        {/* Social cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {Object.entries(socialLinks).map(([key, link]) => {
            const meta = socialMeta[link.iconName] || { label: key, color: null };
            const Icon = socialIconMap[link.iconName];
            return (
              <a
                key={key}
                href={link.url}
                target="_blank" rel="noopener noreferrer"
                aria-label={meta.label}
                className="card flex items-center gap-4 px-6 py-4 group transition-all duration-200"
              >
                {Icon && (
                  <span style={{ color: 'rgb(var(--color-accent-1))' }}>
                    <Icon size={24} />
                  </span>
                )}
                <span className="text-base font-semibold text-text-secondary group-hover:text-text-primary transition-colors">
                  {meta.label}
                </span>
              </a>
            );
          })}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Contact;