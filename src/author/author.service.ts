import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAuthorInput } from './inputs/create-author.input';
import { UpdateAuthorInput } from './inputs/update-author.input';
import { IAuthor } from './interfaces/author.interface';
@Injectable()
export class AuthorService {
  constructor(@InjectModel('Author') private AuthorModel: Model<IAuthor>) {}

  async create(createAuthorInput: CreateAuthorInput): Promise<IAuthor> {
    return await new this.AuthorModel(createAuthorInput).save();
  }

  async findAll(): Promise<IAuthor[]> {
    return await this.AuthorModel.find();
  }

  async findOne(id: string): Promise<IAuthor> {
    return await this.AuthorModel.findById(id);
  }

  async update(
    id: string,
    updateAuthorInput: UpdateAuthorInput,
  ): Promise<IAuthor> {
    return await this.AuthorModel.findByIdAndUpdate(id, updateAuthorInput);
  }

  async remove(id: string): Promise<IAuthor> {
    return await this.AuthorModel.findByIdAndDelete(id);
  }
}
