import { BookObject } from './create-book.dto';
import { Field, Int, PartialType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UpdateBookObject extends PartialType(BookObject) {
  @Field(() => Int)
  id: number;
}
