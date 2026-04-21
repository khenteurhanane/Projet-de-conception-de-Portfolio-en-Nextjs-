import { NextResponse } from 'next/server';
import { ensureDb } from '@/lib/api-middleware';
import * as projectController from '@/controllers/projectController';

export async function GET() {
  try {
    await ensureDb();
    const projects = await projectController.getProjects();
    return NextResponse.json(projects);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await ensureDb();
    const data = await req.json();
    const project = await projectController.createProject(data);
    return NextResponse.json(project);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
