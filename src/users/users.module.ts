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

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Profile]),
    TypeOrmModule.forFeature([UserGroup]),
    TypeOrmModule.forFeature([Group]),
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
  ],
})
export class UsersModule {}
