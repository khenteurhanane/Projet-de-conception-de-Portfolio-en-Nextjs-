'use client';

import { useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Quote, Plus, Edit2, User } from 'lucide-react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, setTestimonials, setTestimonialsLoading } from '@/store';

export default function TestimonialsPage() {
  const dispatch = useDispatch();
  const { items: testimonials, loading } = useSelector((state: RootState) => state.testimonials);

  useEffect(() => {
    const fetchTestimonials = async () => {
      dispatch(setTestimonialsLoading(true));
      try {
        const response = await axios.get('/api/testimonials');
        dispatch(setTestimonials(response.data));
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        dispatch(setTestimonialsLoading(false));
      }
    };
    fetchTestimonials();
  }, [dispatch]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-20">
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold font-outfit">Témoignages</h1>
          <div className="h-1.5 w-24 bg-violet-600 rounded-full" />
          <p className="text-gray-600 max-w-xl">
            Ce que les collaborateurs et clients disent de notre travail ensemble.
          </p>
        </div>
        <Link
          href="/testimonials/form"
          className="px-8 py-4 bg-violet-600 text-white rounded-2xl font-bold shadow-lg shadow-violet-200 hover:bg-violet-700 hover:scale-105 transition-all flex items-center gap-2"
        >
          <Plus size={20} /> Laisser un message
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm relative group"
            >
              <div className="absolute top-10 right-10 text-violet-100 group-hover:text-violet-200 transition-colors">
                <Quote size={60} />
              </div>
              
              <div className="relative z-10 space-y-6">
                <p className="text-lg text-gray-700 italic leading-relaxed">
                  "{testimonial.message}"
                </p>
                
                <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-violet-600">
                      <User size={24} />
                    </div>
                    <span className="font-bold text-gray-900">{testimonial.author}</span>
                  </div>
                  <Link
                    href={`/testimonials/form?id=${testimonial.id}`}
                    className="p-3 text-gray-400 hover:text-violet-600 hover:bg-violet-50 rounded-2xl transition-all"
                  >
                    <Edit2 size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {!loading && testimonials.length === 0 && (
        <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-gray-200">
          <p className="text-gray-400">Aucun témoignage pour le moment. Soyez le premier !</p>
        </div>
      )}
    </div>
  );
}
