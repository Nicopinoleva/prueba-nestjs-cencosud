import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateDeleteUpdateModel {
  @Field()
  success: boolean;

  @Field({ nullable: true })
  message?: string;
}
