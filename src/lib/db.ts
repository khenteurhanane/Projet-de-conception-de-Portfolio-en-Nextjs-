import { Low, JSONFile } from 'lowdb';
import path from 'path';
import bcrypt from 'bcryptjs';

interface Database {
  users: any[];
  projects: any[];
  testimonials: any[];
}

const file = path.join(process.cwd(), 'db.json');
const adapter = new JSONFile<Database>(file);
const db = new Low<Database>(adapter, {
  users: [],
  projects: [],
  testimonials: [],
});

// Initialize with default user if empty
(async () => {
  await db.read();
  if (!db.data) {
    db.data = { users: [], projects: [], testimonials: [] };
  }
  if (db.data.users.length === 0) {
    const hashedPassword = await bcrypt.hash('password123', 10);
    db.data.users.push({
      id: 1,
      username: 'admin',
      password: hashedPassword,
    });
    await db.write();
  }
})();

export default db;
