import { Int, Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class BookObject {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  publisher: string;

  @Field()
  published: Date;

  @Field()
  author: string;
}
