import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { user } from '../drizzle-pg/schema/user';

export const pool = new Pool({
  host: '127.0.0.1',
  port: 5432,
  user: 'postgres',
  password: '5kWHAE1eokFYfhw',
  database: 'playground1',
});

export const db = drizzle(pool);
