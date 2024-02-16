import { Field, ObjectType, Int } from '@nestjs/graphql';
import { ProfileModel } from './profile.model';
import { GroupModel } from './group.model';
import { PostModel } from 'src/posts/models/post.model';

@ObjectType()
export class UserModel {
  @Field(() => Int)
  id: number;

  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field()
  email: string;

  @Field(() => ProfileModel, { nullable: true })
  profile?: ProfileModel;

  @Field(() => [GroupModel], { nullable: true })
  groups?: GroupModel[];

  @Field(() => [PostModel], { nullable: true })
  posts?: PostModel[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
