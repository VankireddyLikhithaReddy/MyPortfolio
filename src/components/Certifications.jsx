import React from 'react';
import SectionTitle from './SectionTitle.jsx';
import { certifications } from '../data/portfolioData.jsx';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const Certifications = () => {
  if (!certifications || certifications.length === 0) return null;

  return (
  <section id="certifications" className="py-24 section-alt">
    <div className="container mx-auto px-5 sm:px-8 lg:px-10">
      <SectionTitle id="certifications-title">Certifications</SectionTitle>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            variants={cardVariants}
            className="card p-5 group"
            whileHover={{ y: -5 }}
          >
            {/* Icon */}
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
              style={{
                background: 'linear-gradient(135deg, rgb(var(--color-accent-1)/0.12), rgb(var(--color-accent-2)/0.08))',
                color: 'rgb(var(--color-accent-1))',
              }}
            >
              <FaCertificate size={18} />
            </div>

            <h3 className="text-sm font-bold text-text-primary leading-snug mb-1">{cert.title}</h3>

            <p className="text-sm font-semibold mb-3" style={{ color: 'rgb(var(--color-accent-2))' }}>
              {cert.issuer}
            </p>

            {/* Meta info */}
            <div
              className="text-xs font-mono space-y-1 mb-4 pb-4"
              style={{
                color: 'rgb(var(--color-text-secondary))',
                borderBottom: '1px solid rgb(var(--color-accent-1)/0.08)',
              }}
            >
              {cert.issued && <p>Issued: <span className="text-text-primary font-medium">{cert.issued}</span></p>}
              {cert.expires && <p>Expires: <span className="text-text-primary font-medium">{cert.expires}</span></p>}
              {cert.validationId && <p className="truncate">ID: {cert.validationId}</p>}
            </div>

            {/* Cert image */}
            {cert.image && (
              <img
                src={cert.image}
                alt={`${cert.title} certificate`}
                className="w-full h-auto rounded-lg mb-4 object-cover"
                onError={e => { e.currentTarget.style.display = 'none'; }}
              />
            )}

            {/* Verify link */}
            {cert.verifyUrl && (
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors"
                style={{ color: 'rgb(var(--color-accent-1))' }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgb(var(--color-accent-2))'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgb(var(--color-accent-1))'}
              >
                <FaCheckCircle size={12} />
                Verify Credential
                <FaExternalLinkAlt size={10} />
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
  );
};

export default Certifications;
