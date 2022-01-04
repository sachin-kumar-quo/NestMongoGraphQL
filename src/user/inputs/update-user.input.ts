import { Field, PartialType, InputType, ID } from '@nestjs/graphql';
import { CreateUserInput } from './create-book.input';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
