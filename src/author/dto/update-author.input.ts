import { AuthorObject } from './create-author.input';
import { Field, Int, PartialType, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class UpdateAuthorInput extends PartialType(AuthorObject) {
  @Field(() => ID, { description: 'Author id' })
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
