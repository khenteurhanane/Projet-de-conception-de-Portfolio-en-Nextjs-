'use client';

import { motion } from 'framer-motion';
import { 
  ArrowRight, Code2, Rocket, Smartphone, Globe, Mail, 
  Github, Linkedin, ExternalLink, Send, Phone, MapPin,
  Braces, Layout, MessageSquare, User, CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export default function Home() {
  const { user } = useSelector((state: RootState) => state.auth);
  const [featuredProjects, setFeaturedProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/projects');
        setFeaturedProjects(response.data.slice(0, 3));
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const skills = [
    { name: 'HTML', level: '95%', color: 'bg-orange-500' },
    { name: 'CSS', level: '90%', color: 'bg-blue-500' },
    { name: 'JavaScript', level: '90%', color: 'bg-yellow-500' },
    { name: 'React', level: '85%', color: 'bg-sky-400' },
    { name: 'Next.js', level: '85%', color: 'bg-black' },
    { name: 'Tailwind CSS', level: '90%', color: 'bg-cyan-400' },
    { name: 'Node.js', level: '80%', color: 'bg-green-600' },
    { name: 'SQL', level: '75%', color: 'bg-indigo-600' },
  ];

  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-[#050505] text-white flex items-center pt-20">
        <div className="absolute inset-0 z-0">
           <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px]" />
           <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Disponible pour de nouvelles opportunités
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-medium text-gray-300">Bonjour, je suis</h2>
                <h1 className="text-6xl md:text-8xl font-black font-outfit leading-none tracking-tight">
                  <span className="text-violet-500">Hanane</span> Khenteur.
                </h1>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-400">Concepteuse Web</h3>
              </div>

              <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                Je crée des applications web modernes, rapides et élégantes avec les technologies les plus avancées du marché.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link 
                  href="/projects"
                  className="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg shadow-violet-600/20"
                >
                  Voir mes projets <ArrowRight size={20} />
                </Link>
                <Link 
                  href="/#contact"
                  className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-bold transition-all flex items-center gap-2"
                >
                  Me contacter <Mail size={20} />
                </Link>
              </div>

              <div className="flex gap-6 pt-8">
                <a href="https://github.com/khenteurhanane/Projet-de-conception-de-Portfolio-en-Nextjs-" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors"><Github size={24} /></a>
                <a href="https://linkedin.com/in/hanane-khenteur" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={24} /></a>
                <a href="mailto:khenteur.hanane2023@gmail.com" className="text-gray-500 hover:text-white transition-colors"><Mail size={24} /></a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px]">
                <div className="absolute inset-0 bg-violet-600 rounded-[3rem] rotate-6 z-0" />
                <div className="relative z-10 w-full h-full rounded-[3rem] overflow-hidden border-4 border-gray-900 shadow-2xl">
                   <img src="/profile.jpg" alt="Hanane Khenteur" className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700" />
                </div>

                {/* Floating Stat Cards */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-10 top-20 bg-gray-900/90 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-2xl z-20"
                >
                  <p className="text-2xl font-black text-white">+2</p>
                  <p className="text-[10px] text-gray-500 uppercase font-black">Années d'expérience</p>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -right-10 bottom-20 bg-gray-900/90 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-2xl z-20"
                >
                  <p className="text-2xl font-black text-white">15+</p>
                  <p className="text-[10px] text-gray-500 uppercase font-black">Projets réalisés</p>
                </motion.div>
                
                <div className="absolute -left-10 bottom-[25%] bg-violet-600 p-4 rounded-2xl shadow-xl z-20">
                   <Braces className="text-white" size={28} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About & Skills Section */}
      <section id="about" className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Left: About */}
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-violet-600 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-violet-600" /> À propos
                </span>
                <h2 className="text-4xl font-black text-gray-950">Qui suis-je ?</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Passionnée par le développement web, j'aime transformer des idées en solutions digitales performantes et intuitives. 
                  Je suis toujours à la recherche de nouveaux défis et d'opportunités d'apprentissage.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-violet-50 text-violet-600 rounded-xl"><Globe size={20} /></div>
                  <span className="font-bold text-gray-700">Développement d'applications web</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-violet-50 text-violet-600 rounded-xl"><Smartphone size={20} /></div>
                  <span className="font-bold text-gray-700">Intégration responsive & UI/UX</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-violet-50 text-violet-600 rounded-xl"><Rocket size={20} /></div>
                  <span className="font-bold text-gray-700">Optimisation des performances</span>
                </div>
              </div>

              <button className="px-8 py-4 bg-violet-600 text-white rounded-xl font-bold shadow-lg shadow-violet-200">En savoir plus sur moi</button>
            </div>

            {/* Right: Skills Grid */}
            <div id="skills" className="space-y-10">
              <span className="text-violet-600 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-violet-600" /> Compétences
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {skills.map(skill => (
                  <div key={skill.name} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm flex flex-col items-center gap-4 hover:shadow-xl hover:-translate-y-1 transition-all">
                    <div className="w-12 h-12 flex items-center justify-center opacity-80">
                       <Code2 size={32} className="text-gray-400" />
                    </div>
                    <div className="text-center">
                       <p className="text-xs font-black text-gray-950 uppercase">{skill.name}</p>
                       <p className="text-[10px] text-gray-400 font-bold">{skill.level}</p>
                    </div>
                    <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                       <div className={`h-full ${skill.color}`} style={{ width: skill.level }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-gray-50 py-32 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div className="space-y-4">
              <span className="text-violet-600 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-violet-600" /> Projets récents
              </span>
              <h2 className="text-4xl font-black text-gray-950">Mes dernières réalisations</h2>
            </div>
            <Link href="/projects" className="text-violet-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Voir tous les projets <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {loading ? (
              [1, 2, 3].map(i => <div key={i} className="h-80 bg-white rounded-3xl animate-pulse" />)
            ) : (
              featuredProjects.map(project => (
                <div key={project.id} className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl transition-all group">
                   <div className="h-48 bg-gray-100 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-indigo-700 opacity-60 group-hover:opacity-40 transition-opacity" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Layout className="text-white opacity-20" size={100} />
                      </div>
                   </div>
                   <div className="p-8 space-y-4">
                      <h3 className="text-xl font-black text-gray-900">{project.title}</h3>
                      <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                         {project.technologies.split(',').slice(0, 3).map((tech: string) => (
                           <span key={tech} className="px-3 py-1 bg-violet-50 text-violet-700 text-[10px] font-bold rounded-lg uppercase">
                             {tech.trim()}
                           </span>
                         ))}
                      </div>
                      <div className="pt-6 border-t border-gray-50 flex justify-between items-center">
                         <a href="#" className="text-violet-600 text-xs font-bold flex items-center gap-1">Démo <ExternalLink size={14} /></a>
                         <a href="https://github.com/khenteurhanane/Projet-de-conception-de-Portfolio-en-Nextjs-" target="_blank" rel="noopener noreferrer" className="text-gray-500 text-xs font-bold flex items-center gap-1">GitHub <Github size={14} /></a>
                      </div>
                   </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              <div className="space-y-10">
                 <div className="space-y-4">
                    <span className="text-violet-600 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-violet-600" /> Contact
                    </span>
                    <h2 className="text-4xl font-black text-gray-950">Travaillons ensemble</h2>
                    <p className="text-gray-600">
                       Vous avez un projet en tête ou une opportunité ? N'hésitez pas à me contacter.
                    </p>
                 </div>

                 <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       <input type="text" placeholder="Votre nom" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-violet-500 transition-all outline-none" />
                       <input type="email" placeholder="Votre email" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-violet-500 transition-all outline-none" />
                    </div>
                    <textarea placeholder="Votre message" rows={5} className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-violet-500 transition-all outline-none resize-none"></textarea>
                    <button className="w-full py-4 bg-violet-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-violet-700 transition-all group">
                       Envoyer le message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                 </form>
              </div>

              <div className="space-y-12 lg:pl-12 pt-12 lg:pt-0">
                 <div className="flex gap-6">
                    <div className="p-4 bg-violet-50 text-violet-600 rounded-2xl"><Mail size={24} /></div>
                    <div>
                       <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email</p>
                       <p className="text-lg font-black text-gray-900">khenteur.hanane2023@gmail.com</p>
                    </div>
                 </div>
                 <div className="flex gap-6">
                    <div className="p-4 bg-violet-50 text-violet-600 rounded-2xl"><Phone size={24} /></div>
                    <div>
                       <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Téléphone</p>
                       <p className="text-lg font-black text-gray-900">438 336 0222</p>
                    </div>
                 </div>
                 <div className="flex gap-6">
                    <div className="p-4 bg-violet-50 text-violet-600 rounded-2xl"><MapPin size={24} /></div>
                    <div>
                       <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Localisation</p>
                       <p className="text-lg font-black text-gray-900">Ottawa, Canada</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
