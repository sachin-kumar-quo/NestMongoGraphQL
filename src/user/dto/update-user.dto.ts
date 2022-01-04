import { UserObject } from './create-user.dto';
import { Field, PartialType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UpdateUser extends PartialType(UserObject) {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
