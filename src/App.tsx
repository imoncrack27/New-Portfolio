import { useState, useEffect, useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Github, ExternalLink, Mail, ArrowUpRight, Code2, Palette, Zap, Terminal, Rocket, Globe, Facebook, Instagram } from 'lucide-react';

const projects = [
  {
    name: 'Expense-Tracker-MERN',
    description: 'A full-stack expense tracking application built with the MERN stack (MongoDB, Express, React, Node.js).',
    language: 'JavaScript',
    url: 'https://github.com/imoncrack27/Expense-Tracker-MERN',
    year: '2025',
    category: 'Full-Stack',
  },
  {
    name: 'Fitness-tracker',
    description: 'A fitness tracking app to monitor workouts, progress, and health goals.',
    language: 'JavaScript',
    url: 'https://github.com/imoncrack27/Fitness-tracker',
    live: 'https://fitness-tracker-frontend-seven.vercel.app',
    year: '2025',
    category: 'Frontend',
  },
  {
    name: 'twitter-clone',
    description: 'A Twitter/X clone with real-time posting, following, and social features.',
    language: 'JavaScript',
    url: 'https://github.com/imoncrack27/twitter-clone',
    live: 'https://twitter-clone-six-tan.vercel.app',
    year: '2025',
    category: 'Full-Stack',
  },
  {
    name: 'Delivery-app',
    description: 'A delivery application built for local delivery services in Aurora.',
    language: 'JavaScript',
    url: 'https://github.com/imoncrack27/Delivery-app',
    year: '2025',
    category: 'Full-Stack',
  },
  {
    name: 'Product-Store',
    description: 'A product store application with inventory management and CRUD operations.',
    language: 'JavaScript',
    url: 'https://github.com/imoncrack27/Product-Store',
    year: '2025',
    category: 'Full-Stack',
  },
  {
    name: 'Habit-Tracker',
    description: 'A habit tracking application to build and maintain daily routines.',
    language: 'JavaScript',
    url: 'https://github.com/imoncrack27/Habit-Tracker',
    year: '2025',
    category: 'Frontend',
  },
  {
    name: 'RCTS Operational System',
    description: 'A full-stack operational system with separate frontend (TypeScript) and backend (Node.js) components.',
    language: 'TypeScript',
    url: 'https://github.com/imoncrack27/RCTS-Operational-System',
    year: '2024',
    category: 'Full-Stack',
  },
  {
    name: 'Portfolio-Website',
    description: 'My personal portfolio website showcasing projects and skills.',
    language: 'HTML',
    url: 'https://github.com/imoncrack27/Portfolio-Website',
    live: 'https://portfolio-mingyo.vercel.app/',
    year: '2024',
    category: 'Frontend',
  },
  {
    name: 'capstone-appointment-system',
    description: 'An appointment scheduling system built as a capstone project using PHP.',
    language: 'PHP',
    url: 'https://github.com/imoncrack27/capstone-appointment-system',
    year: '2023',
    category: 'Full-Stack',
  },
];

const skills = [
  { name: 'JavaScript', icon: Code2 },
  { name: 'TypeScript', icon: Code2 },
  { name: 'React', icon: Globe },
  { name: 'Node.js', icon: Terminal },
  { name: 'HTML/CSS', icon: Palette },
  { name: 'PHP', icon: Code2 },
  { name: 'Laravel', icon: Code2 },
  { name: 'MongoDB', icon: Code2 },
  { name: 'MySQL', icon: Code2 },
  { name: 'Git', icon: Code2 },
  { name: 'REST APIs', icon: Zap },
  { name: 'Tailwind CSS', icon: Palette },
  { name: 'Express.js', icon: Terminal },
  { name: 'Vercel', icon: Rocket },
];

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX }}
    />
  );
}

function AnimatedSection({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-white relative overflow-hidden">
      <ScrollProgress />
      
      {/* Animated background */}
      <div className="fixed inset-0 bg-grid opacity-30 pointer-events-none" />
      <motion.div
        className="fixed w-96 h-96 rounded-full pointer-events-none opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #00f0ff 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />
      <motion.div
        className="fixed w-96 h-96 rounded-full pointer-events-none opacity-10 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #b000ff 0%, transparent 70%)',
          right: mousePosition.x - 192,
          bottom: mousePosition.y - 192,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-xl border-b border-dark-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.a
            href="#"
            className="text-lg font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            DJM.
          </motion.a>
          <div className="flex items-center gap-6">
            <a href="#work" className="text-sm text-gray-400 hover:text-cyber-blue transition-colors hidden sm:block">Work</a>
            <a href="#about" className="text-sm text-gray-400 hover:text-cyber-blue transition-colors hidden sm:block">About</a>
            <a href="#skills" className="text-sm text-gray-400 hover:text-cyber-blue transition-colors hidden sm:block">Skills</a>
            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/Drexell.John27/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:text-cyber-blue text-gray-400 transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/primo.d_j/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:text-cyber-blue text-gray-400 transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://github.com/imoncrack27"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6 pt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-dark-card border border-dark-border rounded-full text-sm text-cyber-blue">
                👋 Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="gradient-text">Drexell</span>
              <br />
              <span className="text-3xl md:text-4xl text-gray-300">John Joseph Mingo</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-4">
              Web Developer 💻 Designer 👾 Aspiring Software Developer 👨‍💻
            </p>
            
            <p className="text-base text-gray-500 mb-8 max-w-md">
              Building clean, functional web applications with modern technologies. 
              Passionate about creating digital experiences that make a difference.
            </p>

            <div className="flex items-center gap-4">
              <motion.a
                href="https://github.com/imoncrack27"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg font-medium hover:opacity-90 transition-opacity neon-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
                View GitHub
              </motion.a>
              <motion.a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 border border-dark-border rounded-lg hover:border-cyber-blue transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See My Work
                <ArrowUpRight size={18} />
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <motion.a
                href="https://www.facebook.com/Drexell.John27/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-dark-border rounded-lg hover:border-cyber-blue hover:text-cyber-blue transition-colors text-gray-400"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/primo.d_j/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-dark-border rounded-lg hover:border-cyber-blue hover:text-cyber-blue transition-colors text-gray-400"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="https://github.com/imoncrack27"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-dark-border rounded-lg hover:border-cyber-blue hover:text-cyber-blue transition-colors text-gray-400"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 rounded-2xl blur-2xl" />
              <div className="relative glass-card rounded-2xl p-8 float">
                <img
                  src="https://image.qwenlm.ai/generated-images/df18cb91-3662-4394-8540-0017bcdadfff/_result.png"
                  alt="Drexell John Joseph Mingo"
                  className="w-full rounded-xl mb-6"
                />
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyber-blue rounded-full pulse-glow" />
                    <span className="text-sm text-gray-400">Available for opportunities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyber-purple rounded-full" />
                    <span className="text-sm text-gray-400">21+ Projects</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyber-pink rounded-full" />
                    <span className="text-sm text-gray-400">4+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Selected</span> Work
              </h2>
              <p className="text-gray-400 text-lg">Projects I've built and contributed to</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold group-hover:text-cyber-blue transition-colors">
                        {project.name}
                      </h3>
                    </div>
                    <span className="text-xs px-2 py-1 bg-dark-border rounded-full text-gray-400">
                      {project.category}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-gray-600 group-hover:text-cyber-blue transition-colors"
                  />
                </div>

                <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-3 py-1 tech-badge rounded-full">
                      {project.language}
                    </span>
                    <span className="text-xs text-gray-500">{project.year}</span>
                  </div>
                  {project.live && (
                    <span className="text-xs text-cyber-blue flex items-center gap-1">
                      <ExternalLink size={12} />
                      Live
                    </span>
                  )}
                </div>
              </motion.a>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <motion.a
              href="https://github.com/imoncrack27?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-dark-border rounded-lg hover:border-cyber-blue transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Repositories
              <ArrowUpRight size={18} />
            </motion.a>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                About <span className="gradient-text">Me</span>
              </h2>
              <p className="text-gray-400 text-lg">Get to know who I am</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  I'm a passionate web developer and designer with a focus on building modern, 
                  functional applications. I love turning ideas into reality through code.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  My journey in tech has been driven by curiosity and a desire to create meaningful 
                  digital experiences. I work across the full stack, from crafting intuitive interfaces 
                  to building robust backend systems.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Currently open to new opportunities and exciting projects. Let's build something 
                  amazing together.
                </p>

                <div className="grid grid-cols-3 gap-6 pt-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold gradient-text">21</p>
                    <p className="text-sm text-gray-500 mt-1">Repositories</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold gradient-text">4+</p>
                    <p className="text-sm text-gray-500 mt-1">Years Coding</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold gradient-text">14+</p>
                    <p className="text-sm text-gray-500 mt-1">Technologies</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="glass-card rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Code2 className="text-cyber-blue" size={24} />
                  What I Do
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe size={20} className="text-cyber-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Frontend Development</h4>
                      <p className="text-sm text-gray-400">Building responsive, interactive user interfaces with React and modern CSS</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyber-purple/20 to-cyber-pink/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Terminal size={20} className="text-cyber-purple" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Backend Development</h4>
                      <p className="text-sm text-gray-400">Creating robust APIs and server-side applications with Node.js and PHP</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyber-pink/20 to-cyber-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Palette size={20} className="text-cyber-pink" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">UI/UX Design</h4>
                      <p className="text-sm text-gray-400">Designing intuitive and visually appealing user experiences</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Tech <span className="gradient-text">Stack</span>
              </h2>
              <p className="text-gray-400 text-lg">Technologies I work with</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card rounded-xl p-6 text-center"
              >
                <skill.icon className="w-8 h-8 text-cyber-blue mx-auto mb-3" />
                <p className="text-sm font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let's <span className="gradient-text">Connect</span>
              </h2>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                Open to opportunities, collaborations, and interesting conversations. 
                Feel free to reach out!
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <motion.a
                  href="https://github.com/imoncrack27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg font-medium hover:opacity-90 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} />
                  GitHub
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/Drexell.John27/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-dark-border rounded-lg hover:border-cyber-blue transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Facebook size={20} />
                  Facebook
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/primo.d_j/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-dark-border rounded-lg hover:border-cyber-blue transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram size={20} />
                  Instagram
                </motion.a>
                <motion.a
                  href="mailto:contact@drexellmingo.dev"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-dark-border rounded-lg hover:border-cyber-blue transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={20} />
                  Email
                </motion.a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-dark-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2025 Drexell John Joseph Mingo
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/Drexell.John27/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyber-blue transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/primo.d_j/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyber-blue transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://github.com/imoncrack27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyber-blue transition-colors"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
