import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorsService {
  authors: {
    name: string;
    id: string;
  }[] = [
    {
      name: 'John one',
      id: '1',
    },
    {
      name: 'Moses one',
      id: '2',
    },
    {
      name: 'Daniel one',
      id: '3',
    },
    {
      name: 'Solomon one',
      id: '4',
    },
  ];

  findAll(search?: string) {
    if (search) {
      return [];
    }
    return this.authors;
  }
  findOne(id) {
    return {};
  }
}
