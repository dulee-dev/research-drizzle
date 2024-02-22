import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

const pool = new Pool({
  host: '127.0.0.1',
  port: 5432,
  user: 'postgres',
  password: '5kWHAE1eokFYfhw',
  database: 'playground1',
});

const db = drizzle(pool);

console.log(db);
