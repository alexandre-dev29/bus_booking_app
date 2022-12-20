import { Module } from '@nestjs/common';
import { UtilityService } from './utility.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [UtilityService, ConfigService, JwtService],
})
export class UtilitiesModule {}
