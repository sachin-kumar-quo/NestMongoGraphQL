import { Int, Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BookObject {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
