'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code2, Rocket, Smartphone, Globe, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
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
        setFeaturedProjects(response.data.slice(0, 3)); // Show only 3 projects on home
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const skills = [
    { name: 'Full-Stack Dev', icon: <Globe className="text-blue-600" />, level: '95%' },
    { name: 'Mobile Apps', icon: <Smartphone className="text-purple-600" />, level: '85%' },
    { name: 'Architecture', icon: <Code2 className="text-green-600" />, level: '90%' },
    { name: 'Déploiement', icon: <Rocket className="text-orange-600" />, level: '80%' },
  ];

  return (
    <div className="flex flex-col gap-32 pb-32">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.15),transparent_50%)] z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 text-blue-700 text-sm font-bold border border-blue-200">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
              </span>
              Disponible pour de nouveaux défis
            </div>
            
            <h1 className="text-7xl md:text-8xl font-black font-outfit text-gray-950 leading-[1.1] tracking-tight">
              L'excellence <br />
              du <span className="text-blue-600">Web 3.0</span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-xl leading-relaxed font-medium">
              Développeur Full-Stack expert en solutions scalables et innovantes. 
              Je transforme vos idées en expériences numériques mémorables.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              {!user ? (
                <>
                  <Link
                    href="/register"
                    className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all flex items-center gap-3 shadow-xl shadow-blue-200 hover:-translate-y-1"
                  >
                    Démarrer un projet <ArrowRight size={22} />
                  </Link>
                  <Link
                    href="/login"
                    className="px-10 py-5 bg-white text-gray-900 border-2 border-gray-100 rounded-2xl font-bold hover:bg-gray-50 transition-all flex items-center gap-3 shadow-sm hover:-translate-y-1"
                  >
                    Connexion
                  </Link>
                </>
              ) : (
                <Link
                  href="/projects"
                  className="px-10 py-5 bg-gray-950 text-white rounded-2xl font-bold hover:bg-gray-800 transition-all flex items-center gap-3 shadow-xl shadow-gray-300 hover:-translate-y-1"
                >
                  Mes Réalisations <ArrowRight size={22} />
                </Link>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:block hidden"
          >
            <div className="relative w-[500px] h-[550px] mx-auto">
              {/* Decorative Blur */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-200 rounded-full blur-[100px] opacity-40 animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-200 rounded-full blur-[100px] opacity-40 animate-pulse" />
              
              <div className="relative z-10 w-full h-full rounded-[4rem] overflow-hidden border-8 border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] rotate-2 hover:rotate-0 transition-all duration-700 group">
                <img
                  src="/profile.jpg"
                  alt="Développeur Expert"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Floating Tech Cards */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-12 z-20 bg-white/90 backdrop-blur-xl p-5 rounded-3xl shadow-2xl border border-white/50"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                    <Rocket size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">Spécialité</p>
                    <p className="text-base font-black text-gray-900 leading-none">Next.js Expert</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About / Skills Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl font-black font-outfit text-gray-950">
              Expertise <br />
              <span className="text-blue-600">Multidimensionnelle</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              Avec plus de 5 ans d'expérience dans l'écosystème web, j'ai développé une approche qui allie 
              performance technique et design intuitif. Mon objectif est de bâtir des plateformes qui 
              ne se contentent pas de fonctionner, mais qui marquent les esprits.
            </p>
            <div className="flex gap-4">
               <div className="px-6 py-3 bg-gray-100 rounded-xl font-bold text-gray-800 text-sm">#Performance</div>
               <div className="px-6 py-3 bg-gray-100 rounded-xl font-bold text-gray-800 text-sm">#Sécurité</div>
               <div className="px-6 py-3 bg-gray-100 rounded-xl font-bold text-gray-800 text-sm">#Design</div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-black mb-4 text-gray-950">{skill.name}</h3>
                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                  />
                </div>
                <p className="mt-3 text-right text-sm font-black text-blue-600 uppercase tracking-widest">{skill.level}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="bg-gray-950 py-32 rounded-[4rem] mx-4 sm:mx-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 text-center md:text-left">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-black font-outfit text-white">Projets <span className="text-blue-500">Phares</span></h2>
              <p className="text-xl text-gray-400 max-w-xl font-medium">Une démonstration de mon savoir-faire technique à travers des projets concrets.</p>
            </div>
            <Link 
              href="/projects" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-2xl font-bold transition-all flex items-center gap-2 group shrink-0 self-center md:self-end"
            >
              Tous les projets <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {loading ? (
               [1, 2, 3].map(i => <div key={i} className="h-[450px] bg-white/5 animate-pulse rounded-[3rem]" />)
            ) : (
              featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/5 rounded-[3rem] border border-white/10 overflow-hidden hover:bg-white/[0.08] transition-all"
              >
                <div className="h-64 bg-gradient-to-br from-blue-600 to-indigo-700 p-10 flex items-end relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-8 text-white/20 scale-150 rotate-12">
                      <Code2 size={120} />
                   </div>
                   <h3 className="text-2xl font-black text-white relative z-10">{project.title}</h3>
                </div>
                <div className="p-10 space-y-6">
                  <p className="text-gray-400 line-clamp-2 text-base font-medium">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.split(',').slice(0, 3).map((tech: string) => (
                      <span key={tech} className="px-3 py-1 bg-white/5 text-gray-300 text-[10px] font-black rounded-lg uppercase tracking-tighter">
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={`/projects/${project.id}`} 
                    className="inline-flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors pt-4 group/link"
                  >
                    Explorer <ExternalLink size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            )))}
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
         <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="bg-blue-600 py-24 px-8 rounded-[4rem] shadow-2xl shadow-blue-200 space-y-10 relative overflow-hidden"
         >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.1),transparent_40%)]" />
            <h2 className="text-5xl md:text-7xl font-black font-outfit text-white relative z-10">
              Prêt à lancer <br />
              votre <span className="text-blue-200">Prochain Projet ?</span>
            </h2>
            <p className="text-xl text-blue-50 max-w-2xl mx-auto font-medium relative z-10">
              Je suis toujours à la recherche de collaborations passionnantes. 
              Parlons de votre vision et voyons comment je peux vous aider.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <a 
                href="mailto:contact@votreportfolio.com" 
                className="px-10 py-5 bg-white text-blue-600 rounded-2xl font-black flex items-center gap-3 transition-transform hover:scale-105"
              >
                <Mail size={22} /> Me contacter
              </a>
              <div className="flex gap-4">
                 <a href="#" className="p-5 bg-blue-700 text-white rounded-2xl hover:bg-blue-800 transition-colors"><Github size={24} /></a>
                 <a href="#" className="p-5 bg-blue-700 text-white rounded-2xl hover:bg-blue-800 transition-colors"><Linkedin size={24} /></a>
              </div>
            </div>
         </motion.div>
      </section>
    </div>
  );
}
