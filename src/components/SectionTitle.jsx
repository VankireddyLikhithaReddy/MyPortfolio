import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ children, id, subtitle }) => (
  <motion.div
    id={id}
    className="text-center mb-14"
    initial={{ opacity: 0, y: -14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
      {children}
    </h2>
    {/* Decorative accent bar */}
    <div className="section-accent-bar">
      <span className="section-accent-dot" />
    </div>
    {subtitle && (
      <p className="mt-4 text-text-secondary text-base max-w-xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionTitle;