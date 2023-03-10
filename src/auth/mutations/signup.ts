import { SecurePassword } from '@blitzjs/auth';
import { resolver } from '@blitzjs/rpc';
import db, { Roles } from 'db';
import { Signup } from '../validations';

export default resolver.pipe(resolver.zod(Signup), async ({ email, password }, ctx) => {
  const hashedPassword = await SecurePassword.hash(password.trim());
  const user = await db.user.create({
    data: { email: email.toLowerCase().trim(), hashedPassword, role: Roles.USER },
    select: { id: true, email: true, role: true },
  });

  await ctx.session.$create({ userId: user.id, role: user.role as Roles, email: user.email });
  return user;
});
