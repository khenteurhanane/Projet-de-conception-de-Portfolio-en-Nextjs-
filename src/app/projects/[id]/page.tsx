'use client';

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { motion } from 'framer-motion';
import { ArrowLeft, Code2, Globe, Calendar, User } from 'lucide-react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, setProjects, setProjectsLoading } from '@/store';

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { items: projects, loading } = useSelector((state: RootState) => state.projects);
  
  const project = projects.find((p) => p.id === Number(id));

  useEffect(() => {
    const fetchProjects = async () => {
      if (projects.length > 0) return;
      
      dispatch(setProjectsLoading(true));
      try {
        const response = await axios.get('/api/projects');
        dispatch(setProjects(response.data));
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        dispatch(setProjectsLoading(false));
      }
    };
    if (id) fetchProjects();
  }, [id, dispatch, projects.length]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );

  if (!project) return (
    <div className="max-w-7xl mx-auto px-4 py-24 text-center">
      <h1 className="text-2xl font-bold">Projet non trouvé</h1>
      <Link href="/projects" className="text-blue-600 mt-4 block">Retour aux projets</Link>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => router.back()}
        className="flex items-center gap-2 text-gray-500 hover:text-blue-600 font-medium mb-12 transition-colors"
      >
        <ArrowLeft size={20} /> Retour aux projets
      </motion.button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h1 className="text-5xl font-bold font-outfit text-gray-900">{project.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500 font-medium">
              <span className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-100 shadow-sm">
                <Calendar size={16} className="text-blue-500" /> Janv - Avr 2024
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-100 shadow-sm">
                <User size={16} className="text-purple-500" /> Solo Project
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none text-gray-600"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-outfit">À propos du projet</h2>
            <p className="leading-relaxed mb-8">
              {project.description}
            </p>
            <p className="leading-relaxed">
              Ce projet a été conçu avec une attention particulière à l'expérience utilisateur et à la performance. L'architecture a été pensée pour être évolutive et facile à maintenir.
            </p>
          </motion.div>
        </div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-100"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Code2 className="text-blue-600" /> Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.split(',').map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-bold rounded-xl border border-blue-100"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-900 p-8 rounded-[2.5rem] text-white shadow-xl shadow-blue-100/20"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Globe className="text-blue-400" /> Liens
            </h3>
            <div className="space-y-4">
              <a href="#" className="flex items-center justify-between p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-all border border-white/10">
                <span className="font-semibold">Démo Live</span>
                <Globe size={18} />
              </a>
              <a href="#" className="flex items-center justify-between p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-all border border-white/10">
                <span className="font-semibold">Code Source</span>
                <Globe size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
