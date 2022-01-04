import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserInput } from './inputs/create-book.input';
import { UpdateUserInput } from './inputs/update-user.input';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<IUser>) {}
  async create(createUserInput: CreateUserInput): Promise<IUser> {
    return await new this.userModel(createUserInput).save();
  }

  async findAll(): Promise<IUser[]> {
    return await this.userModel.find();
  }

  async findOne(id: string): Promise<IUser> {
    return await this.userModel.findById(id);
  }

  async update(id: string, updateUserInput: UpdateUserInput): Promise<IUser> {
    return await this.userModel.findByIdAndUpdate(id, updateUserInput);
  }

  async remove(id: string): Promise<IUser> {
    return await this.userModel.findByIdAndDelete(id);
  }
}
