import { Github, Linkedin, Mail, Twitter, Globe, ArrowUpRight, Code2 } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="flex items-center gap-2 text-2xl font-black font-outfit">
              <div className="p-1.5 bg-violet-600 rounded-lg">
                <Code2 size={24} className="text-white" />
              </div>
              <span>Hanane <span className="text-violet-500">Khenteur</span></span>
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
              Concepteuse de solutions web innovantes, alliant performance technique et design d'exception pour propulser votre présence numérique.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/khenteurhanane/Projet-de-conception-de-Portfolio-en-Nextjs-" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-violet-600 transition-all group">
                <Github size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://linkedin.com/in/hanane-khenteur" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-violet-600 transition-all group">
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="mailto:contact@hanane.com" className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-violet-600 transition-all group">
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-violet-500">Navigation</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group text-sm font-bold">Accueil <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link href="/#about" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group text-sm font-bold">À propos <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group text-sm font-bold">Projets <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link href="/testimonials" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group text-sm font-bold">Témoignages <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-violet-500">Newsletter</h4>
            <p className="text-gray-400 text-sm">Inscrivez-vous pour recevoir mes derniers articles et mises à jour de projets.</p>
            <div className="flex gap-2">
               <input type="email" placeholder="votre@email.com" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-violet-500 w-full" />
               <button className="bg-violet-600 p-3 rounded-xl hover:bg-violet-700 transition-colors">
                  <ArrowUpRight size={20} />
               </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-500">
           <p className="text-xs font-bold uppercase tracking-widest italic flex items-center gap-2">
             <Globe size={14} /> Hanane Khenteur — Montréal & Worldwide
           </p>
           <p className="text-xs font-bold">
             © {currentYear} All Rights Reserved. Designed by Hanane.
           </p>
        </div>
      </div>
    </footer>
  );
}
