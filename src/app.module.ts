import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { YogaDriver, YogaDriverConfig } from '@graphql-yoga/nestjs';
import { GraphQLLiveDirective, useLiveQuery } from '@envelop/live-query';
import { useResponseCache } from '@graphql-yoga/plugin-response-cache';
import { useGraphQlJit } from '@envelop/graphql-jit';
import { createRedisCache } from '@envelop/response-cache-redis';
import Redis from 'ioredis';
import { GetInMemoryStore } from '../libs/utility';
import { UsersModule } from './users/users.module';

const redis = new Redis({});

@Module({
  imports: [
    GraphQLModule.forRoot<YogaDriverConfig>({
      driver: YogaDriver,
      autoSchemaFile: true,
      graphiql: true,
      installSubscriptionHandlers: true,
      logging: true,
      buildSchemaOptions: {
        directives: [GraphQLLiveDirective],
      },
      plugins: [
        useResponseCache({
          session: () => null,
          ttl: 10000 * 6,
          cache: createRedisCache({ redis }),
        }),
        useGraphQlJit(),
        useLiveQuery({ liveQueryStore: GetInMemoryStore() }),
      ],
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
