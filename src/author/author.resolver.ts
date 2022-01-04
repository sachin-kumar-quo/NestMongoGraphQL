import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthorService } from './author.service';
import { AuthorObject } from './dto/create-author.input';
import { CreateAuthorInput } from './inputs/create-author.input';
import { UpdateAuthorInput } from './inputs/update-author.input';

@Resolver(() => AuthorObject)
export class AuthorResolver {
  constructor(private readonly authorService: AuthorService) {}

  @Mutation(() => AuthorObject)
  createAuthor(
    @Args('createAuthorInput') createAuthorInput: CreateAuthorInput,
  ) {
    return this.authorService.create(createAuthorInput);
  }

  @Query(() => [AuthorObject], { name: 'author' })
  findAll() {
    return this.authorService.findAll();
  }

  @Query(() => AuthorObject, { name: 'author' })
  findOne(@Args('id') id: string) {
    return this.authorService.findOne(id);
  }

  @Mutation(() => AuthorObject)
  updateAuthor(
    @Args('updateAuthorInput') updateAuthorInput: UpdateAuthorInput,
  ) {
    return this.authorService.update(updateAuthorInput.id, updateAuthorInput);
  }

  @Mutation(() => AuthorObject)
  removeAuthor(@Args('id') id: string) {
    return this.authorService.remove(id);
  }
}
