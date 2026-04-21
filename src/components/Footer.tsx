import { Github, Linkedin, Mail, Twitter, Globe, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white pt-24 pb-12 rounded-t-[4rem] mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="text-3xl font-black font-outfit bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Portfolio.
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
              Concepteur de solutions web innovantes, alliant performance technique et design d'exception pour propulser votre présence numérique.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/khenteurhanane/Projet-de-conception-de-Portfolio-en-Nextjs-" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all group">
                <Github size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://linkedin.com/in/hanane-khenteur" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all group">
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all group">
                <Twitter size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-blue-500">Navigation</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">Accueil <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">Projets <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link href="/testimonials" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">Témoignages <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-blue-500">Prenons contact</h4>
            <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 space-y-6">
              <p className="text-gray-300 font-medium italic">
                "Chaque grand projet commence par une simple conversation."
              </p>
              <a href="mailto:contact@mondomaine.com" className="flex items-center gap-4 text-blue-400 hover:text-blue-300 transition-colors">
                <div className="p-3 bg-blue-500/10 rounded-xl">
                  <Mail size={22} />
                </div>
                <span className="text-lg font-bold">contact@mondomaine.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
            <Globe size={16} />
            <span>Basé à Montréal, QC — Disponible à l'international</span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
            <p className="text-gray-500 text-xs">
              © {currentYear} Portfolio Design — Tous droits réservés.
            </p>
            <div className="flex gap-6 text-gray-500 text-xs font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
              <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
