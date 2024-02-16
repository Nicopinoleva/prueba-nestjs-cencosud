import { Field, InputType, Int } from '@nestjs/graphql';
import { IsEmail, IsOptional } from 'class-validator';
import { UserUpdateOneOptional } from '../validators/user-update-one-optional.constraint';

@InputType()
export class UserUpdateInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  @IsOptional()
  firstname?: string;

  @Field({ nullable: true })
  @IsOptional()
  lastname?: string;

  @Field({ nullable: true })
  @IsEmail()
  @IsOptional()
  email?: string;

  @UserUpdateOneOptional({ message: 'At least one field must be provided' })
  dummy: any;
}
