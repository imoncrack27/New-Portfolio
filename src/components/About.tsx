import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Users } from 'lucide-react';

const highlights = [
  { icon: Code2, label: 'Clean Code', description: 'Writing maintainable, scalable solutions' },
  { icon: Palette, label: 'UI/UX Design', description: 'Creating beautiful, intuitive interfaces' },
  { icon: Zap, label: 'Performance', description: 'Optimizing for speed and efficiency' },
  { icon: Users, label: 'Collaboration', description: 'Working effectively in teams' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Get to know who I am and what drives me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl rotate-3" />
              <div className="absolute inset-0 bg-surface-light rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">👨‍💻</div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gradient-to-r from-primary to-accent rounded-full w-3/4 mx-auto" />
                    <div className="h-2 bg-gradient-to-r from-accent to-primary rounded-full w-1/2 mx-auto" />
                    <div className="h-2 bg-gradient-to-r from-primary to-accent rounded-full w-2/3 mx-auto" />
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <div className="h-16 bg-surface-lighter rounded-lg border border-white/5" />
                    <div className="h-16 bg-surface-lighter rounded-lg border border-white/5" />
                    <div className="h-16 bg-surface-lighter rounded-lg border border-white/5" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm a full-stack developer with over 5 years of experience building web applications 
              that make a difference. I specialize in React, TypeScript, and Node.js, with a keen 
              eye for design and user experience.
            </p>
            <p className="text-slate-400 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge through blog posts and mentoring. 
              I believe in writing clean, maintainable code that stands the test of time.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I'm passionate about creating products that are not just functional, but delightful 
              to use. Every pixel matters, every interaction counts.
            </p>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent rounded-full text-white font-medium hover:opacity-90 transition-all"
              >
                Let's Talk
                <span>→</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-surface-light border border-white/5 hover:border-primary/30 transition-all card-hover"
            >
              <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-1">{item.label}</h3>
              <p className="text-sm text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
