import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class AuthorObject {
  @Field({ description: 'Example field (placeholder)' })
  name: string;

  @Field(() => Int, { description: 'Example field (placeholder)' })
  age: number;

  @Field({ description: 'Example field (placeholder)' })
  phone: string;

  @Field({ description: 'Example field (placeholder)' })
  email: string;
}
