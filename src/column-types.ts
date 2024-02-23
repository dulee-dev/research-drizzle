import { sql } from 'drizzle-orm';
import { bigint, integer, pgTable, text, varchar } from 'drizzle-orm/pg-core';

export const table = pgTable('table', {
  int: integer('int').default(sql`'10'::int`),
  binInt: bigint('bigInt', { mode: 'number' }),
  text: text('text', { enum: ['aaaa', 'bbbb'] }),
  varChar: varchar('varchar'),
});

type Table = typeof table.$inferInsert;

const tableIns: Table = {
  text: 'aaaa',
  varChar: 'asdsadsadad',
};
