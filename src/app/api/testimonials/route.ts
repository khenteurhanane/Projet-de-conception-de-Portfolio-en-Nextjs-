import { NextResponse } from 'next/server';
import { ensureDb } from '@/lib/api-middleware';
import * as testimonialController from '@/controllers/testimonialController';

export async function GET() {
  try {
    await ensureDb();
    const testimonials = await testimonialController.getTestimonials();
    return NextResponse.json(testimonials);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await ensureDb();
    const data = await req.json();
    const testimonial = await testimonialController.createTestimonial(data);
    return NextResponse.json(testimonial);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    await ensureDb();
    const { id, ...data } = await req.json();
    const testimonial = await testimonialController.updateTestimonial(id, data);
    return NextResponse.json(testimonial);
  } catch (error) {
    console.error(error);
    const status = (error as any).message === 'Testimonial not found' ? 404 : 500;
    return NextResponse.json({ error: (error as any).message || 'Internal server error' }, { status });
  }
}
