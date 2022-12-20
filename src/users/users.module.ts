import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaService } from '@data-access';
import { CaslModule } from 'nest-casl';
import { JwtStrategy, userPermissions } from '@app-security';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { UtilityService } from '../utilities/utility.service';
import { ConfigService } from '@nestjs/config';
import { LoginResponse } from '@shared-types';

@Module({
  imports: [CaslModule.forFeature({ permissions: userPermissions })],
  providers: [
    UsersResolver,
    UsersService,
    PrismaService,
    AuthService,
    JwtService,
    UtilityService,
    ConfigService,
    LoginResponse,
    JwtStrategy,
  ],
})
export class UsersModule {}
