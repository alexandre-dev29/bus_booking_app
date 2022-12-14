import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaService } from '@data-access';
import { CaslModule } from 'nest-casl';
import { userPermissions } from '@app-security';

@Module({
  imports: [CaslModule.forFeature({ permissions: userPermissions })],
  providers: [UsersResolver, UsersService, PrismaService],
})
export class UsersModule {}
