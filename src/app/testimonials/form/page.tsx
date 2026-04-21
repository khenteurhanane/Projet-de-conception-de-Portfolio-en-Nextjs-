'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import { motion } from 'framer-motion';
import { ArrowLeft, Send, AlertCircle, CheckCircle2 } from 'lucide-react';

function TestimonialFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      const fetchTestimonial = async () => {
        try {
          const response = await axios.get('/api/testimonials');
          const found = response.data.find((t: any) => t.id === Number(id));
          if (found) {
            setAuthor(found.author);
            setMessage(found.message);
          }
        } catch (error) {
          console.error(error);
        }
      };
      fetchTestimonial();
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!author || !message) {
      setError('Tous les champs sont obligatoires.');
      return;
    }

    setLoading(true);
    try {
      if (id) {
        await axios.put('/api/testimonials', { id: Number(id), author, message });
      } else {
        await axios.post('/api/testimonials', { author, message });
      }
      setSuccess(true);
      setTimeout(() => router.push('/testimonials'), 2000);
    } catch (err: any) {
      setError('Une erreur est survenue lors de l\'enregistrement.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-gray-500 hover:text-blue-600 font-medium mb-12 transition-colors"
      >
        <ArrowLeft size={20} /> Retour
      </button>

      <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl shadow-gray-200 border border-gray-100">
        <h1 className="text-3xl font-bold font-outfit mb-8">{id ? 'Modifier votre témoignage' : 'Laisser un témoignage'}</h1>

        {success ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-10 space-y-4"
          >
            <div className="inline-flex items-center justify-center p-4 bg-green-50 text-green-600 rounded-full mb-4">
              <CheckCircle2 size={48} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Message envoyé !</h2>
            <p className="text-gray-500">Merci pour votre retour. Redirection...</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Votre Nom</label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="block w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                placeholder="Ex: Jean Dupont"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Votre Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                className="block w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                placeholder="Partagez votre expérience..."
              />
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 bg-red-50 text-red-600 rounded-2xl border border-red-100 text-sm font-medium"
              >
                <AlertCircle size={18} />
                {error}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-3"
            >
              {loading ? 'Traitement...' : id ? 'Enregistrer les modifications' : 'Envoyer le témoignage'}
              {!loading && <Send size={20} />}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function TestimonialFormPage() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <TestimonialFormContent />
    </Suspense>
  );
}
