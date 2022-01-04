import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorResolver } from './author.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorSchema } from './entities/author.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Author', schema: AuthorSchema }]),
  ],
  providers: [AuthorResolver, AuthorService],
})
export class AuthorModule {}
