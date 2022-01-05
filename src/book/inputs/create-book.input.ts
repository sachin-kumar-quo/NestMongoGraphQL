import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBookInput {
  @Field()
  title: string;

  @Field()
  publisher: string;

  @Field()
  published: Date;

  @Field()
  author: string;
}
