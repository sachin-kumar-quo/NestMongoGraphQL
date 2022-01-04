import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookInput } from './inputs/create-book.input';
import { UpdateBookInput } from './inputs/update-book.input';
import { IBook } from './interfaces/book.interface';

@Injectable()
export class BookService {
  constructor(@InjectModel('Book') private bookModel: Model<IBook>) {}
  async create(createBookInput: CreateBookInput): Promise<IBook> {
    return await new this.bookModel(createBookInput).save();
  }

  async findAll(): Promise<IBook[]> {
    return await this.bookModel.find();
  }

  async findOne(id: string): Promise<IBook> {
    return await this.bookModel.findById(id);
  }

  async update(id: string, updateBookInput: UpdateBookInput): Promise<IBook> {
    return await this.bookModel.findByIdAndUpdate(id, updateBookInput);
  }

  async remove(id: string): Promise<IBook> {
    return this.bookModel.findByIdAndDelete(id);
  }
}
