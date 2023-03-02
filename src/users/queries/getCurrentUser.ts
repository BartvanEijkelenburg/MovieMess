import { Ctx } from "blitz";
import db, { Prisma } from "db";

export default async function getCurrentUser(_ = null, { session }: Ctx) {
  if (!session.userId) return null;

  const user = await db.user.findFirstOrThrow<Prisma.UserFindFirstOrThrowArgs>({
    where: { id: session.userId },
  });

  return user;
}
