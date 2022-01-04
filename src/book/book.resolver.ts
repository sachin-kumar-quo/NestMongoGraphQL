import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BookService } from './book.service';
import { BookObject } from './dto/create-book.dto';
import { CreateBookInput } from './inputs/create-book.input';
import { UpdateBookInput } from './inputs/update-book.input';

@Resolver(() => BookObject)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Mutation(() => BookObject)
  createBook(@Args('createBookInput') createBookInput: CreateBookInput) {
    return this.bookService.create(createBookInput);
  }

  @Query(() => [BookObject])
  findAllBooks() {
    return this.bookService.findAll();
  }

  @Query(() => BookObject)
  findBook(@Args('id') id: string) {
    return this.bookService.findOne(id);
  }

  @Mutation(() => BookObject)
  updateBook(@Args('updateBookInput') updateBookInput: UpdateBookInput) {
    return this.bookService.update(updateBookInput.id, updateBookInput);
  }

  @Mutation(() => BookObject)
  removeBook(@Args('id') id: string) {
    return this.bookService.remove(id);
  }
}
