import { Injectable } from '@nestjs/common';
import { CreateBookInput } from './inputs/create-book.input';
import { UpdateBookInput } from './inputs/update-book.input';

@Injectable()
export class BookService {
  create(createBookInput: CreateBookInput) {
    return 'This action adds a new book';
  }

  findAll() {
    return `This action returns all book`;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookInput: UpdateBookInput) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
