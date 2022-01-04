import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookResolver } from './book.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './entities/book.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }])],
  providers: [BookResolver, BookService],
})
export class BookModule {}
