import { CreateBookInput } from './create-book.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { Optional } from '@nestjs/common';

@InputType()
export class UpdateBookInput extends PartialType(CreateBookInput) {
  @Optional()
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  publisher: string;

  @Field()
  published: Date;

  @Field()
  author: string;
}
