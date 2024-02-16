import { Field, ObjectType, Int } from '@nestjs/graphql';
import { UserModel } from './user.model';

@ObjectType()
export class ProfileModel {
  @Field(() => Int)
  id: number;

  @Field()
  biography: string;

  @Field()
  dateOfBirth: Date;

  @Field(() => UserModel)
  user: UserModel;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
