import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GroupModel {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
