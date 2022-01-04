import { Field, PartialType, InputType } from '@nestjs/graphql';
import { CreateUserInput } from './create-book.input';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
