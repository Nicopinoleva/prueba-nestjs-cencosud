import { Query, Resolver } from '@nestjs/graphql';
import { GroupModel } from '../models/group.model';
import { GroupService } from '../group.service';

@Resolver()
export class GroupResolver {
  constructor(private groupService: GroupService) {}

  @Query((returns) => [GroupModel])
  async getAllGroups(): Promise<GroupModel[]> {
    return this.groupService.getAllGroups();
  }
}
