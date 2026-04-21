import { Testimonials } from '@/models';

export const getTestimonials = async () => {
  return await Testimonials.findAll();
};

export const createTestimonial = async (data: any) => {
  return await Testimonials.create(data);
};

export const updateTestimonial = async (id: number, data: any) => {
  const t = await Testimonials.findById(id);
  if (!t) throw new Error('Testimonial not found');
  
  // Update logic for lowdb
  const db = await import('@/lib/db').then(m => m.default);
  await db.read();
  const index = db.data?.testimonials.findIndex(item => item.id === id);
  if (index !== undefined && index >= 0) {
    db.data!.testimonials[index] = { ...db.data!.testimonials[index], ...data };
    await db.write();
    return db.data!.testimonials[index];
  }
  throw new Error('Testimonial not found');
};
