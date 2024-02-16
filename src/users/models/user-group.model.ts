import { Field, Int, ObjectType } from '@nestjs/graphql';
import { GroupModel } from './group.model';
import { UserModel } from './user.model';

@ObjectType()
export class UserGroupModel {
  @Field(() => Int)
  id: number;

  @Field(() => UserModel, { nullable: true })
  user: UserModel;

  @Field(() => GroupModel, { nullable: true })
  group: GroupModel;
}
