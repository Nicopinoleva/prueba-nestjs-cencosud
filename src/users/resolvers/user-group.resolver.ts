import { Query, Resolver } from '@nestjs/graphql';
import { UserGroupModel } from '../models/user-group.model';
import { UserGroupService } from '../user-group.service';

@Resolver()
export class UserGroupResolver {
  constructor(private userGroupService: UserGroupService) {}

  @Query((returns) => [UserGroupModel])
  async getAllUserGroups(): Promise<UserGroupModel[]> {
    return this.userGroupService.getAllUserGroups();
  }
}
