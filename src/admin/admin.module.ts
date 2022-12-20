import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminResolver } from './admin.resolver';
import { PrismaService } from '@data-access';
import { UtilityService } from '../utilities/utility.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [
    AdminResolver,
    AdminService,
    PrismaService,
    UtilityService,
    ConfigService,
    JwtService,
  ],
})
export class AdminModule {}
