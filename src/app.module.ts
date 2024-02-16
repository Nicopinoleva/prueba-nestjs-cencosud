import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { User } from './users/entities/user.entity';
import { join } from 'path';
import { Group } from './users/entities/group.entity';
import { UserGroup } from './users/entities/user-group.entity';
import { Profile } from './users/entities/profile.entity';
import { Post } from './posts/entities/post.entity';
import { Comment } from './posts/entities/comment.entity';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    TypeOrmModule.forRootAsync({
      imports: [
        ConfigModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
          driver: ApolloDriver,
          autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
          playground: true,
        }),
      ],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [User, Profile, Group, UserGroup, Post, Comment],
        synchronize: true,
        logging: true,
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    PostsModule,
  ],
})
export class AppModule {}
