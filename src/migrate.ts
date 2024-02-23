import { user } from '../drizzle-pg/schema/user';
import { db, pool } from './db';

(async () => {
  const exist = await db.select().from(user);
  const retruning = await db
    .insert(user)
    .values({
      id: '023e4587-e89b-12d3-a456-426614174000',
      fullName: 'dulee',
      phone: '123-1234-1234',
    })
    .returning();

  const result = await db.select().from(user);
  await pool.end();

  console.log(exist, retruning, result);
  return 0;
})();
