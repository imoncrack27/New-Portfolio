import { motion } from 'framer-motion';
import { Github, ExternalLink, Mail, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    name: 'Expense-Tracker-MERN',
    description: 'A full-stack expense tracking application built with the MERN stack (MongoDB, Express, React, Node.js).',
    language: 'JavaScript',
    url: 'https://github.com/imoncrack27/Expense-Tracker-MERN',
    year: '2025',
  },
  {
    name: 'Fitness-tracker',
    description: 'A fitness tracking app to monitor workouts, progress, and health goals.',
    language: 'JavaScript',
    url: 'https://github.com/imoncrack27/Fitness-tracker',
    live: 'https://fitness-tracker-frontend-seven.vercel.app',
    year: '2025',
  },
  {
    name: 'twitter-clone',
    description: 'A Twitter/X clone with real-time posting, following, and social features.',
    language: 'JavaScript',
    url: 'https://github.com/imoncrack27/twitter-clone',
    live: 'https://twitter-clone-six-tan.vercel.app',
    year: '2025',
  },
  {
    name: 'Delivery-app',
    description: 'A delivery application built for local delivery services in Aurora.',
    language: 'JavaScript',
    url: 'https://github.com/imoncrack27/Delivery-app',
    year: '2025',
  },
  {
    name: 'Product-Store',
    description: 'A product store application with inventory management and CRUD operations.',
    language: 'JavaScript',
    url: 'https://github.com/imoncrack27/Product-Store',
    year: '2025',
  },
  {
    name: 'Habit-Tracker',
    description: 'A habit tracking application to build and maintain daily routines.',
    language: 'JavaScript',
    url: 'https://github.com/imoncrack27/Habit-Tracker',
    year: '2025',
  },
  {
    name: 'RCTS Operational System',
    description: 'A full-stack operational system with separate frontend (TypeScript) and backend (Node.js) components.',
    language: 'TypeScript',
    url: 'https://github.com/imoncrack27/RCTS-Operational-System',
    year: '2024',
  },
  {
    name: 'Portfolio-Website',
    description: 'My personal portfolio website showcasing projects and skills.',
    language: 'HTML',
    url: 'https://github.com/imoncrack27/Portfolio-Website',
    live: 'https://portfolio-mingyo.vercel.app/',
    year: '2024',
  },
  {
    name: 'capstone-appointment-system',
    description: 'An appointment scheduling system built as a capstone project using PHP.',
    language: 'PHP',
    url: 'https://github.com/imoncrack27/capstone-appointment-system',
    year: '2023',
  },
];

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Node.js', 'HTML/CSS',
  'PHP', 'Laravel', 'MongoDB', 'MySQL', 'Git',
  'REST APIs', 'Tailwind CSS', 'Express.js', 'Vercel',
];

function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fafafa]/80 backdrop-blur-md border-b border-neutral-200/50">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-sm font-semibold tracking-tight">
            DJM
          </a>
          <div className="flex items-center gap-6">
            <a href="#work" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors link-underline">Work</a>
            <a href="#about" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors link-underline">About</a>
            <a
              href="https://github.com/imoncrack27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <img
              src="https://avatars.githubusercontent.com/u/98969110?v=4"
              alt="Drexell John Joseph Mingo"
              className="w-16 h-16 rounded-full border border-neutral-200"
            />
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">Drexell John Joseph Mingo</h1>
              <p className="text-sm text-neutral-500">Web Developer · Designer</p>
            </div>
          </div>

          <p className="text-lg text-neutral-600 leading-relaxed max-w-xl">
            Web Developer 💻 Designer 👾 Aspiring Software Developer 👨‍💻
          </p>
          <p className="text-base text-neutral-500 leading-relaxed mt-4 max-w-xl">
            I build clean, functional web applications. Currently focused on JavaScript, React, and full-stack development. Open to opportunities and collaborations.
          </p>

          <div className="flex items-center gap-4 mt-8">
            <a
              href="https://github.com/imoncrack27"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-1 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              View my work
              <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Work / Projects */}
      <section id="work" className="max-w-3xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-8">Selected Work</h2>

          <div className="space-y-0 divide-y divide-neutral-200">
            {projects.map((project, index) => (
              <motion.a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group flex items-start justify-between py-6 hover:bg-neutral-100/50 -mx-4 px-4 rounded-lg transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <h3 className="text-base font-medium group-hover:text-neutral-900 transition-colors">
                      {project.name}
                    </h3>
                    <span className="text-xs text-neutral-400">{project.year}</span>
                  </div>
                  <p className="text-sm text-neutral-500 mt-1 line-clamp-1">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-xs px-2 py-0.5 bg-neutral-100 text-neutral-600 rounded-full">
                      {project.language}
                    </span>
                    {project.live && (
                      <span className="text-xs text-neutral-400 flex items-center gap-1">
                        <ExternalLink size={10} />
                        Live
                      </span>
                    )}
                  </div>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-neutral-300 group-hover:text-neutral-600 transition-colors mt-1 flex-shrink-0"
                />
              </motion.a>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://github.com/imoncrack27?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors link-underline"
            >
              View all repositories on GitHub
              <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="max-w-3xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-8">About</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <p className="text-neutral-600 leading-relaxed">
                I'm a web developer and designer passionate about building things for the web. I enjoy turning ideas into functional, well-designed applications.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                My work spans frontend interfaces, backend systems, and full-stack applications. I'm always learning and exploring new technologies.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Currently open to new opportunities and interesting projects. Feel free to reach out.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-neutral-400 mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 bg-neutral-100 text-neutral-600 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-neutral-200">
                <h3 className="text-sm font-medium text-neutral-400 mb-4">Stats</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-2xl font-semibold">21</p>
                    <p className="text-xs text-neutral-500">Repositories</p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold">4+</p>
                    <p className="text-xs text-neutral-500">Years Coding</p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold">14+</p>
                    <p className="text-xs text-neutral-500">Languages</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center py-16 border-t border-neutral-200"
        >
          <h2 className="text-xl font-semibold mb-3">Let's connect</h2>
          <p className="text-neutral-500 mb-6">Open to opportunities, collaborations, and interesting conversations.</p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/imoncrack27"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-neutral-200 rounded-lg hover:border-neutral-400 transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href="mailto:contact@drexellmingo.dev"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-neutral-200 rounded-lg hover:border-neutral-400 transition-colors"
            >
              <Mail size={16} />
              Email
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto px-6 pb-8">
        <div className="flex items-center justify-between text-xs text-neutral-400 border-t border-neutral-200 pt-6">
          <span>© 2025 Drexell John Joseph Mingo</span>
          <a
            href="https://github.com/imoncrack27"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-600 transition-colors"
          >
            @imoncrack27
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
