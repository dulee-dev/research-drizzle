import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './schema/*',
  driver: 'pg',
  dbCredentials: {
    host: '127.0.0.1',
    port: 5432,
    user: 'postgres',
    password: '5kWHAE1eokFYfhw',
    database: 'playground1',
  },
  verbose: true,
  strict: true,
  out: './drizzle',
});

console.log('hi');
