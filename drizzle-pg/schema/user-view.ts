import { pgMaterializedView, pgView } from 'drizzle-orm/pg-core';
import { user } from './user';

export const userView = pgMaterializedView('user_view').as((qb) =>
  qb.select().from(user)
);
