import { Injectable } from '@nestjs/common';
import { CreateAuthorInput } from './inputs/create-author.input';
import { UpdateAuthorInput } from './inputs/update-author.input';

@Injectable()
export class AuthorService {
  create(createAuthorInput: CreateAuthorInput) {
    return 'This action adds a new author';
  }

  findAll() {
    return `This action returns all author`;
  }

  findOne(id: string) {
    return `This action returns a #${id} author`;
  }

  update(id: string, updateAuthorInput: UpdateAuthorInput) {
    return `This action updates a #${id} author`;
  }

  remove(id: string) {
    return `This action removes a #${id} author`;
  }
}
