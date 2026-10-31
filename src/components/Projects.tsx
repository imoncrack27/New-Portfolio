import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';

const projects = [
  {
    title: 'CloudSync Dashboard',
    description: 'A real-time cloud infrastructure monitoring dashboard with advanced analytics, alerting, and team collaboration features.',
    image: '📊',
    tags: ['React', 'TypeScript', 'D3.js', 'WebSocket'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment processing, inventory management, and AI-powered product recommendations.',
    image: '🛒',
    tags: ['Next.js', 'Node.js', 'Stripe', 'PostgreSQL'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'AI Content Studio',
    description: 'An AI-powered content creation tool that helps writers generate, edit, and optimize content using GPT models.',
    image: '🤖',
    tags: ['React', 'Python', 'OpenAI', 'Redis'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'DevConnect',
    description: 'A social platform for developers to share projects, find collaborators, and participate in coding challenges.',
    image: '👥',
    tags: ['Vue.js', 'GraphQL', 'MongoDB', 'Docker'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
  {
    title: 'TaskFlow Pro',
    description: 'Project management tool with Kanban boards, time tracking, and automated workflows for agile teams.',
    image: '✅',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
  {
    title: 'CryptoTracker',
    description: 'Real-time cryptocurrency portfolio tracker with price alerts, charts, and market analysis tools.',
    image: '📈',
    tags: ['React Native', 'Firebase', 'CoinGecko API'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Some of my recent work that I'm proud of
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl bg-surface-light border border-white/5 overflow-hidden card-hover"
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-surface-lighter to-surface flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </span>
                {project.featured && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-primary/20 rounded-full text-xs text-primary-light">
                    <Star size={12} fill="currentColor" />
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-light transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-surface-lighter text-slate-300 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-2 border-t border-white/5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full text-white font-medium hover:bg-white/5 transition-all hover:scale-105"
          >
            <Github size={18} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
