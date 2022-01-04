import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserObject } from './dto/create-user.dto';
import { CreateUserInput } from './inputs/create-book.input';
import { UpdateUserInput } from './inputs/update-user.input';

@Resolver(() => UserObject)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => UserObject)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }

  @Query(() => [UserObject])
  findAllUsers() {
    return this.userService.findAll();
  }

  @Query(() => UserObject)
  findUser(@Args('id') id: string) {
    return this.userService.findOne(id);
  }

  @Mutation(() => UserObject)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => UserObject)
  removeUser(@Args('id') id: string) {
    return this.userService.remove(id);
  }
}
