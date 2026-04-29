import React from 'react';
import SectionTitle from './SectionTitle.jsx';
import { skills } from '../data/portfolioData.jsx';
import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaDatabase, FaCode, FaHtml5, FaCss3Alt, FaWordpress,
  FaPython, FaJava, FaCloud, FaProjectDiagram, FaAws, FaDocker, FaGitAlt,
  FaLinux, FaWindows, FaLightbulb, FaSitemap, FaPlug, FaUsers, FaRunning,
  FaComments, FaChalkboardTeacher, FaEye, FaLanguage, FaCogs, FaStream,
  FaLock, FaChess, FaCamera, FaUniversalAccess,
} from 'react-icons/fa';
import {
  SiExpress, SiMongodb, SiFirebase, SiTailwindcss, SiJavascript, SiCplusplus,
  SiTypescript, SiGo, SiMysql, SiPostgresql, SiAmazondynamodb, SiSpringboot,
  SiNextdotjs, SiFlask, SiDjango, SiGooglecloud, SiKubernetes, SiGithubactions,
  SiJenkins, SiTerraform, SiGnubash, SiJira, SiPostman, SiVscodium,
  SiIntellijidea, SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiNumpy,
  SiApachekafka, SiApachespark, SiRedis, SiFastapi, SiSwagger, SiBootstrap,
} from 'react-icons/si';

const iconMap = {
  FaReact, FaJava, FaPython, FaNodeJs, SiAmazondynamodb, FaDatabase, FaCode,
  FaCloud, FaProjectDiagram, FaAws, FaDocker, FaGitAlt, FaLinux, FaWindows,
  FaLightbulb, FaSitemap, FaPlug, FaUsers, FaRunning, FaComments,
  FaChalkboardTeacher, FaEye, FaLanguage, FaCogs, FaStream, FaHtml5,
  FaCss3Alt, FaWordpress, SiSpringboot, SiNextdotjs, SiFlask, SiDjango,
  SiExpress, SiMongodb, SiFirebase, SiTailwindcss, SiJavascript, SiTypescript,
  SiCplusplus, SiGo, SiMysql, SiPostgresql, SiGooglecloud, SiKubernetes,
  SiGithubactions, SiJenkins, SiTerraform, SiGnubash, SiJira, SiPostman,
  SiVscodium, SiIntellijidea, SiTensorflow, SiPytorch, SiScikitlearn,
  SiPandas, SiNumpy, SiApachekafka, SiApachespark, SiRedis, SiFastapi,
  SiSwagger, SiBootstrap, FaLock, FaChess, FaCamera, FaUniversalAccess,
};

const getIcon = name => {
  const Icon = iconMap[name];
  return Icon ? <Icon size={20} /> : <FaCode size={20} />;
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};
const itemVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.28 } },
};

function CategoryGrid({ title, emoji, items }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-base">{emoji}</span>
        <h3
          className="text-sm font-bold tracking-wider uppercase"
          style={{ fontFamily: '"IBM Plex Mono", monospace', color: 'rgb(var(--color-accent-1))' }}
        >
          {title}
        </h3>
        <div className="flex-1 h-px" style={{ background: 'rgb(var(--color-accent-1)/0.12)' }} />
      </div>
      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {items.map((skill, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="card flex flex-col items-center gap-2 py-4 px-2 cursor-default group"
            whileHover={{ y: -4, transition: { duration: 0.18 } }}
          >
            <span
              className="transition-colors duration-200"
              style={{ color: 'rgb(var(--color-accent-1)/0.8)' }}
            >
              {getIcon(skill.iconName)}
            </span>
            <span className="text-sm text-text-secondary text-center leading-tight font-medium">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

const Skills = () => (
  <section id="skills" className="py-24 bg-primary-bg">
    <div className="container mx-auto px-5 sm:px-8 lg:px-10">
      <SectionTitle id="skills-title">Tech Stack</SectionTitle>
      <div className="max-w-6xl mx-auto space-y-12">
        <CategoryGrid title="Languages & Databases"   emoji="⌨️" items={skills.languages} />
        <CategoryGrid title="Frameworks & Libraries"  emoji="🧩" items={skills.frameworksAndLibraries} />
        <CategoryGrid title="AI · ML & Data"          emoji="🤖" items={skills.aiAndDataEngineering} />
        <CategoryGrid title="Tools & Platforms"       emoji="🛠️" items={skills.toolsAndPlatforms} />
        <CategoryGrid title="Core Competencies"       emoji="🎯" items={skills.coreCompetencies} />
      </div>
    </div>
  </section>
);

export default Skills;
