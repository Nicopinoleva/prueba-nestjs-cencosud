import { Field, InputType } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

@InputType()
export class UserCreateInput {
  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field()
  @IsEmail()
  email: string;
}
