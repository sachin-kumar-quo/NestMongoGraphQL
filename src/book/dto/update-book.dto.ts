import { BookObject } from './create-book.dto';
import { Field, Int, PartialType, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class UpdateBookObject extends PartialType(BookObject) {
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
