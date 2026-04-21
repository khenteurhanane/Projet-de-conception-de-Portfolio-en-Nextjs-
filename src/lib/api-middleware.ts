import { initDB } from '../models';

export async function ensureDb() {
  await initDB();
}
