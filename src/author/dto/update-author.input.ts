import { AuthorObject } from './create-author.input';
import {
  InputType,
  Field,
  Int,
  PartialType,
  ObjectType,
} from '@nestjs/graphql';

@ObjectType()
export class UpdateAuthorInput extends PartialType(AuthorObject) {
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
