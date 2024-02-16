import { Field, Int, ObjectType } from '@nestjs/graphql';
import { CommentModel } from './comment.model';
import { UserModel } from 'src/users/models/user.model';

@ObjectType()
export class PostModel {
  @Field(() => Int)
  id: number;

  @Field(() => UserModel)
  user: UserModel;

  @Field(() => [CommentModel], { nullable: 'items' })
  comments: CommentModel[];

  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
