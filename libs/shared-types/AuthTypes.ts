import { Scalar } from '@nestjs/graphql';
import { FastifyCookieOptions } from '@fastify/cookie';
import * as process from 'process';
import { Admin, Users } from '@data-access';

export type Tokens = {
  access_token: string;
  refresh_token: string;
};

export const cookieOption: FastifyCookieOptions = {
  parseOptions: {
    domain: process.env.domainclient,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
    path: '/',
    priority: 'high',
    maxAge: parseInt(`${process.env.JWT_ACCESS_EXPIRATION}`),
  },
};

@Scalar('LoginResponse')
export class LoginResponse {
  access_token?: string;
  refresh_token: string;
  user: Partial<Users>;
}

@Scalar('LoginResponse')
export class LoginResponseAdmin {
  access_token?: string;
  refresh_token: string;
  admin: Partial<Admin>;
}
