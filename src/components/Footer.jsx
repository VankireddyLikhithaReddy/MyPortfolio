import React from 'react';
import { personalInfo } from '../data/portfolioData.jsx';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      className="py-8 text-center"
      style={{
        background: 'var(--nav-bg)',
        backdropFilter: 'var(--nav-blur)',
        WebkitBackdropFilter: 'var(--nav-blur)',
        borderTop: '1px solid var(--nav-border)',
      }}
    >
      <div className="container mx-auto px-5">
        <p className="text-sm text-text-secondary font-mono">
          Designed &amp; built by{' '}
          <span className="font-semibold gradient-text">{personalInfo.name}</span>
        </p>
        <p className="text-xs text-text-secondary opacity-50 mt-1 font-mono">
          © {year} · All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;