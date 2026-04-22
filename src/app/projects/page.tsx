'use client';

import { useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, setProjects, setProjectsLoading } from '@/store';

export default function ProjectsPage() {
  const dispatch = useDispatch();
  const { items: projects, loading } = useSelector((state: RootState) => state.projects);

  useEffect(() => {
    const fetchProjects = async () => {
      if (projects.length > 0) return; // Optional: avoid refetching if already in store
      
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
    fetchProjects();
  }, [dispatch, projects.length]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center space-y-4 mb-20">
        <h1 className="text-4xl md:text-6xl font-bold font-outfit">Mes Réalisations</h1>
        <div className="h-1.5 w-24 bg-violet-600 mx-auto rounded-full" />
        <p className="text-gray-600 max-w-2xl mx-auto">
          Découvrez une sélection de mes projets les plus récents, démontrant mon savoir-faire technique et créatif.
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all"
            >
              {/* Project Card Header (Mock Image Area) */}
              <div className="h-56 bg-gradient-to-br from-violet-500 to-indigo-600 relative p-8 flex items-end">
                <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-xl text-white">
                  <Layers size={20} />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:scale-105 transition-transform origin-left">
                  {project.title}
                </h3>
              </div>

              <div className="p-8 space-y-6">
                <p className="text-gray-600 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.split(',').map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-bold rounded-lg border border-gray-100 uppercase tracking-tight"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                  <Link
                    href={`/projects/${project.id}`}
                    className="text-violet-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Détails du projet <ExternalLink size={16} />
                  </Link>
                  <div className="flex gap-4 text-gray-400">
                    <Github size={20} className="hover:text-gray-900 cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
