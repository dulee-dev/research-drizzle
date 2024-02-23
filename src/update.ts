import { eq } from 'drizzle-orm';
import { user } from '../drizzle-pg/schema/user';
import { db } from './db';

(async () => {
  await db
    .update(user)
    .set({ fullName: 'Mr. Dan' })
    .where(eq(user.fullName, 'Dan'));
})();
