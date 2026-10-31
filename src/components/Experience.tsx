import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Senior Frontend Engineer',
    company: 'TechCorp Inc.',
    period: '2022 - Present',
    description: 'Leading the frontend team in building scalable web applications. Implemented micro-frontend architecture that improved deployment speed by 40%.',
    skills: ['React', 'TypeScript', 'AWS', 'Team Leadership'],
  },
  {
    type: 'work',
    title: 'Full-Stack Developer',
    company: 'StartupXYZ',
    period: '2020 - 2022',
    description: 'Built and maintained multiple client-facing applications. Developed a real-time collaboration feature that increased user engagement by 60%.',
    skills: ['Node.js', 'React', 'PostgreSQL', 'WebSocket'],
  },
  {
    type: 'work',
    title: 'Frontend Developer',
    company: 'Digital Agency Co.',
    period: '2019 - 2020',
    description: 'Created responsive web applications for various clients across different industries. Focused on performance optimization and accessibility.',
    skills: ['React', 'Vue.js', 'SCSS', 'Webpack'],
  },
  {
    type: 'education',
    title: 'B.S. Computer Science',
    company: 'State University',
    period: '2015 - 2019',
    description: 'Graduated with honors. Focused on software engineering, algorithms, and human-computer interaction. Led the university web development club.',
    skills: ['Algorithms', 'Data Structures', 'HCI', 'Software Engineering'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A timeline of my professional experience and education
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent border-4 border-surface z-10" />

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <div className="p-6 rounded-2xl bg-surface-light border border-white/5 card-hover">
                  <div className="flex items-center gap-2 mb-2">
                    {exp.type === 'work' ? (
                      <Briefcase size={16} className="text-primary" />
                    ) : (
                      <GraduationCap size={16} className="text-accent" />
                    )}
                    <span className="text-sm text-slate-400">{exp.period}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                  <p className="text-primary-light text-sm mb-3">{exp.company}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs bg-surface-lighter text-slate-300 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
