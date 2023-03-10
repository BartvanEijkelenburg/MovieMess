import { SimpleRolesIsAuthorized } from '@blitzjs/auth';
import { Roles, User } from 'db';

declare module '@blitzjs/auth' {
  export interface Session {
    isAuthorized: SimpleRolesIsAuthorized<Roles>;
    PublicData: {
      userId: User['id'];
      role: Roles;
      email: string;
    };
  }
}
