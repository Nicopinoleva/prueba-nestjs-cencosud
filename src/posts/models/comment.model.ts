import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PostModel } from './post.model';

@ObjectType()
export class CommentModel {
  @Field(() => Int)
  id: number;

  @Field()
  content: string;

  @Field(() => PostModel)
  post: PostModel;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
