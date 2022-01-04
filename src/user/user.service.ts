import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserInput } from './inputs/create-book.input';
import { UpdateUserInput } from './inputs/update-user.input';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}
  async create(createUserInput: CreateUserInput): Promise<User | string> {
    return 'This action adds a new user';
  }

  async findAll(): Promise<User[] | string> {
    return `This action returns all user`;
  }

  async findOne(id: string): Promise<User | string> {
    return `This action returns a #${id} user`;
  }

  async update(
    id: string,
    updateUserInput: UpdateUserInput,
  ): Promise<User | string> {
    return `This action updates a #${id} user`;
  }

  async remove(id: string): Promise<User | string> {
    return `This action removes a #${id} user`;
  }
}
