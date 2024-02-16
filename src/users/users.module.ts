import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UsersResolver } from './resolvers/users.resolver';
import { UserGroup } from './entities/user-group.entity';
import { Profile } from './entities/profile.entity';
import { Group } from './entities/group.entity';
import { ProfileService } from './profile.service';
import { ProfileResolver } from './resolvers/profile.resolver';
import { UserGroupResolver } from './resolvers/user-group.resolver';
import { GroupResolver } from './resolvers/group.resolver';
import { GroupService } from './group.service';
import { UserGroupService } from './user-group.service';
import { Post } from 'src/posts/entities/post.entity';
import { PostsModule } from 'src/posts/posts.module';
import { PostsService } from 'src/posts/posts.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Profile, UserGroup, Group, Post]),
    PostsModule,
  ],
  providers: [
    UsersService,
    UsersResolver,
    ProfileService,
    ProfileResolver,
    UserGroupResolver,
    UserGroupService,
    GroupResolver,
    GroupService,
    PostsService,
  ],
})
export class UsersModule {}
