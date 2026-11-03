import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-slate-400 text-sm">
          <span>© 2024 Drexell John Joseph Mingo. Made with</span>
          <Heart size={14} className="text-red-400" fill="currentColor" />
        </div>
        <div className="flex items-center gap-6">
          <a href="#home" className="text-sm text-slate-400 hover:text-white transition-colors">Home</a>
          <a href="#about" className="text-sm text-slate-400 hover:text-white transition-colors">About</a>
          <a href="#projects" className="text-sm text-slate-400 hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="text-sm text-slate-400 hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
