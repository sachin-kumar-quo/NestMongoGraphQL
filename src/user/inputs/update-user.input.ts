import { Optional } from '@nestjs/common';
import { Field, PartialType, InputType, ID } from '@nestjs/graphql';
import { CreateUserInput } from './create-book.input';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Optional()
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
