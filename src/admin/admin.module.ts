import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminResolver } from './admin.resolver';
import { PrismaService } from '@data-access';
import { UtilityService } from '../utilities/utility.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from '@app-security';
import { CaslModule } from 'nest-casl';
import { adminPermissions } from '../../libs/app-security/lib/permissions/admin.permission';

@Module({
  imports: [CaslModule.forFeature({ permissions: adminPermissions })],

  providers: [
    AdminResolver,
    AdminService,
    PrismaService,
    UtilityService,
    ConfigService,
    JwtService,
    JwtStrategy,
  ],
})
export class AdminModule {}
