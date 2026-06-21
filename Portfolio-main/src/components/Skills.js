import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaMobile, FaTools, FaDatabase } from 'react-icons/fa';
import { SiOpenjdk, SiJavascript, SiReact, SiNodedotjs, SiSpring, SiExpress, SiMongodb, SiMysql, SiPostgresql, SiDocker, SiAmazonaws, SiGit, SiGithub, SiHtml5, SiCss3, SiTailwindcss, SiTypescript, SiKotlin, SiCplusplus, SiCsharp, SiPhp } from 'react-icons/si';

const skills = [
  {
    category: 'Programming Languages',
    icon: <FaCode className="text-2xl text-primary" />,
    items: [
      { name: 'Java', icon: <SiOpenjdk className="text-4xl" />, level: 85 },
      { name: 'JavaScript', icon: <SiJavascript className="text-4xl" />, level: 80 },
      { name: 'TypeScript', icon: <SiTypescript className="text-4xl" />, level: 70 },
      { name: 'Kotlin', icon: <SiKotlin className="text-4xl" />, level: 65 },
      { name: 'C++', icon: <SiCplusplus className="text-4xl" />, level: 70 },
      { name: 'C#', icon: <SiCsharp className="text-4xl" />, level: 65 },
      { name: 'PHP', icon: <SiPhp className="text-4xl" />, level: 75 },
    ]
  },
  {
    category: 'Frontend',
    icon: <FaCode className="text-2xl text-primary" />,
    items: [
      { name: 'React.js', icon: <SiReact className="text-4xl" />, level: 80 },
      { name: 'HTML5', icon: <SiHtml5 className="text-4xl" />, level: 90 },
      { name: 'CSS3', icon: <SiCss3 className="text-4xl" />, level: 85 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl" />, level: 80 },
    ]
  },
  {
    category: 'Backend',
    icon: <FaServer className="text-2xl text-primary" />,
    items: [
      { name: 'Node.js', icon: <SiNodedotjs className="text-4xl" />, level: 80 },
      { name: 'Spring Boot', icon: <SiSpring className="text-4xl" />, level: 75 },
      { name: 'Express.js', icon: <SiExpress className="text-4xl" />, level: 80 },
    ]
  },
  {
    category: 'Databases',
    icon: <FaDatabase className="text-2xl text-primary" />,
    items: [
      { name: 'MongoDB', icon: <SiMongodb className="text-4xl" />, level: 80 },
      { name: 'MySQL', icon: <SiMysql className="text-4xl" />, level: 85 },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-4xl" />, level: 75 },
    ]
  },
  {
    category: 'DevOps & Tools',
    icon: <FaTools className="text-2xl text-primary" />,
    items: [
      { name: 'Git', icon: <SiGit className="text-4xl" />, level: 85 },
      { name: 'GitHub', icon: <SiGithub className="text-4xl" />, level: 90 },
      { name: 'Docker', icon: <SiDocker className="text-4xl" />, level: 70 },
      { name: 'AWS', icon: <SiAmazonaws className="text-4xl" />, level: 70 },
    ]
  }
];

const getSkillBarStyle = (level) => {
  if (level >= 90) {
    return {
      background: 'linear-gradient(90deg, #00e5a8 0%, #2df6c6 100%)',
      boxShadow: '0 0 20px rgba(45, 246, 198, 0.45)',
    };
  }

  if (level >= 85) {
    return {
      background: 'linear-gradient(90deg, #38bdf8 0%, #60a5fa 100%)',
      boxShadow: '0 0 20px rgba(96, 165, 250, 0.45)',
    };
  }

  if (level >= 75) {
    return {
      background: 'linear-gradient(90deg, #f59e0b 0%, #fbbf24 100%)',
      boxShadow: '0 0 20px rgba(251, 191, 36, 0.42)',
    };
  }

  return {
    background: 'linear-gradient(90deg, #a855f7 0%, #e879f9 100%)',
    boxShadow: '0 0 20px rgba(232, 121, 249, 0.4)',
  };
};

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      className="bg-slate-950/70 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-slate-700/60 ring-1 ring-white/5"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-center mb-4">
        <div className="p-2 rounded-xl bg-white/5 border border-white/10 mr-3">
          {skill.icon}
        </div>
        <h3 className="text-base font-semibold text-white">{skill.category}</h3>
      </div>
      
      <div className="space-y-3">
        {skill.items.map((item, i) => (
          <div key={i} className="mb-2">
            <div className="flex items-center justify-between mb-0.5">
              <div className="flex items-center">
                <div className="mr-2 opacity-95 scale-75">{item.icon}</div>
                <span className="text-white/95 font-medium text-sm">{item.name}</span>
              </div>
              <span className="text-xs text-slate-300 font-semibold">{item.level}%</span>
            </div>
            <div className="w-full bg-slate-800/90 rounded-full h-2 overflow-hidden border border-white/5">
              <motion.div 
                className="h-full rounded-full"
                style={getSkillBarStyle(item.level)}
                initial={{ width: 0 }}
                whileInView={{ width: `${item.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 + (index * 0.05) + (i * 0.02) }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.08]"></div>
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-500/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-base md:text-lg font-mono text-primary mb-2 inline-block tracking-[0.18em] uppercase">
            Technical Expertise
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-300 max-w-2xl mx-auto">
            Here are the technologies and tools I've been working with. I'm always eager to learn new technologies and improve my skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, index) => (
            <SkillCard key={skill.category} skill={skill} index={index} />
          ))}
        </div>

        <motion.div 
          className="mt-12 bg-slate-950/70 backdrop-blur-md rounded-2xl p-5 border border-slate-700/60 ring-1 ring-white/5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
            <FaTools className="text-primary mr-3" /> Additional Skills & Competencies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'RESTful APIs', 'GraphQL', 'Microservices', 'System Design',
              'Agile/Scrum', 'CI/CD', 'TDD', 'OOP', 'Data Structures',
              'Algorithms', 'Design Patterns', 'Clean Code', 'Git Flow',
              'Responsive Design', 'UI/UX Principles', 'Performance Optimization',
              'Security Best Practices', 'API Documentation', 'Code Review',
              'Mentoring', 'Project Management', 'Technical Writing'
            ].map((skill, index) => (
              <div key={index} className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
                <span className="text-slate-200">{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
