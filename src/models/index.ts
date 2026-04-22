import db from '@/lib/db';

export interface User {
  id?: number;
  username: string;
  password: string;
}

export interface Project {
  id?: number;
  title: string;
  description: string;
  technologies: string;
}

export interface Testimonial {
  id?: number;
  author: string;
  message: string;
}

// User operations
export const Users = {
  async findAll() {
    await db.read();
    db.data ||= { users: [], projects: [], testimonials: [] };
    return db.data.users;
  },

  async findOne(where: { username: string }) {
    await db.read();
    db.data ||= { users: [], projects: [], testimonials: [] };
    return db.data.users.find(u => u.username === where.username);
  },

  async create(data: User) {
    await db.read();
    db.data ||= { users: [], projects: [], testimonials: [] };
    const id = (db.data.users.length) + 1;
    const newUser = { id, ...data };
    db.data.users.push(newUser);
    await db.write();
    return newUser;
  },

  async findById(id: number) {
    await db.read();
    return db.data?.users.find(u => u.id === id);
  },
};

// Project operations
export const Projects = {
  async findAll() {
    await db.read();
    db.data ||= { users: [], projects: [], testimonials: [] };
    return db.data.projects;
  },

  async create(data: Project) {
    await db.read();
    db.data ||= { users: [], projects: [], testimonials: [] };
    const id = (db.data.projects.length) + 1;
    const newProject = { id, ...data };
    db.data.projects.push(newProject);
    await db.write();
    return newProject;
  },

  async findById(id: number) {
    await db.read();
    db.data ||= { users: [], projects: [], testimonials: [] };
    return db.data.projects.find(p => p.id === id);
  },

  async count() {
    await db.read();
    db.data ||= { users: [], projects: [], testimonials: [] };
    return db.data.projects.length;
  },
};

// Testimonial operations
export const Testimonials = {
  async findAll() {
    await db.read();
    db.data ||= { users: [], projects: [], testimonials: [] };
    return db.data.testimonials;
  },

  async create(data: Testimonial) {
    await db.read();
    db.data ||= { users: [], projects: [], testimonials: [] };
    const id = (db.data.testimonials.length) + 1;
    const newTestimonial = { id, ...data };
    db.data.testimonials.push(newTestimonial);
    await db.write();
    return newTestimonial;
  },

  async findById(id: number) {
    await db.read();
    db.data ||= { users: [], projects: [], testimonials: [] };
    return db.data.testimonials.find(t => t.id === id);
  },
};

// Initialize database
export const initDB = async () => {
  await db.read();
  db.data ||= { users: [], projects: [], testimonials: [] };
  
  const projectCount = db.data.projects.length;
  if (projectCount === 0) {
    db.data!.projects = [
      {
        id: 1,
        title: 'Gestion de Tournoi de Golf',
        description: 'Une application robuste pour la gestion de tournois de golf. Elle inclut un tableau de bord "Mint Fairway" moderne, une API de gestion des scores, et une interface utilisateur optimisée pour les administrateurs et les joueurs.',
        technologies: 'ASP.NET Core, C#, Entity Framework, SQL Server, Razor Pages',
      },
      {
        id: 2,
        title: 'Travel Journal iOS',
        description: 'Une application mobile interactive pour les voyageurs. Utilisant MapKit pour la géolocalisation et SwiftData pour la persistence, elle permet de créer des journaux de voyage riches avec des photos et des itinéraires personnalisés.',
        technologies: 'SwiftUI, MapKit, SwiftData, CoreLocation',
      },
      {
        id: 3,
        title: 'Plateforme Portfolio Concepteur Web Moderne',
        description: 'Ce projet même ! Un portfolio moderne construit avec Next.js pour démontrer une expertise en architecture web, gestion d\'état avec Redux et intégration de base de données.',
        technologies: 'Next.js, Tailwind CSS, Redux Toolkit, lowdb',
      },
    ];
    await db.write();
  }
};
