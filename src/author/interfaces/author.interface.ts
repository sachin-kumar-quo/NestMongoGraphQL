import { Document } from 'mongoose';

export interface IAuthor extends Document {
  name: string;
  age: number;
  phone: string;
  email: string;
}
