import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { UserModel } from '../models/user.model';
import { UsersService } from '../users.service';
import { CreateDeleteUpdateModel } from '../models/create-delete-update-response.model';
import { UserCreateInput } from '../dto/user-create-input.dto';
import { UserUpdateInput } from '../dto/user-update-input.dto';
import { GroupModel } from '../models/group.model';
import { PostModel } from 'src/posts/models/post.model';

@Resolver((of) => UserModel)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Mutation((returns) => CreateDeleteUpdateModel)
  async createUser(
    @Args('input') input: UserCreateInput,
  ): Promise<CreateDeleteUpdateModel> {
    return this.usersService.createUser(
      input.firstname,
      input.lastname,
      input.email,
    );
  }

  @Mutation((returns) => CreateDeleteUpdateModel)
  async updateUser(
    @Args('input') input: UserUpdateInput,
  ): Promise<CreateDeleteUpdateModel> {
    return this.usersService.updateUser(input);
  }

  @Mutation((returns) => CreateDeleteUpdateModel)
  async deleteUser(@Args('id') id: number): Promise<CreateDeleteUpdateModel> {
    return this.usersService.deleteUser(id);
  }

  @Query((returns) => [UserModel])
  async getAllUsers(): Promise<UserModel[]> {
    return this.usersService.getAllUsers();
  }

  @ResolveField('groups', (returns) => [GroupModel])
  async getGroups(@Parent() user: UserModel) {
    const userGroups = await this.usersService.getUserGroups(user.id);
    const groups = [];
    for (const userGroup of userGroups) {
      groups.push(userGroup.group);
    }
    return groups;
    // Esto quizás se podría dejar en una sola consulta,
    // ya que por cada usuario se hace una consulta a userGroup aparte.
    // Debería poder hacerce con un join extra en la consulta de getAllUsers,
    // ahora cae en n+1.
  }

  @ResolveField('posts', (returns) => [PostModel])
  async getPosts(@Parent() user: UserModel) {
    const userPosts = await this.usersService.getUserPosts(user.id);
    const posts = [];
    for (const userPost of userPosts) {
      posts.push(userPost);
    }
    return posts;
    // Idem.
  }
}
