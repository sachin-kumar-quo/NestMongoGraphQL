import { UserObject } from './create-user.dto';
import { Field, PartialType, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class UpdateUser extends PartialType(UserObject) {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
