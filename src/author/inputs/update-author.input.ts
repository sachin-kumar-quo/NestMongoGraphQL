import { CreateAuthorInput } from './create-author.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAuthorInput extends PartialType(CreateAuthorInput) {
  @Field({ description: 'Author id' })
  id: string;

  @Field()
  name: string;

  @Field(() => Int)
  age: number;

  @Field()
  phone: string;

  @Field()
  email: string;
}
