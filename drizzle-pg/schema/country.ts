import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core';

export const countries = pgTable('country', {
  id: uuid('id').primaryKey(),
  name: varchar('name', { length: 256 }),
});
