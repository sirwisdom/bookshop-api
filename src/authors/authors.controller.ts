import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Controller('authors')
export class AuthorsController {
  @Get()
  findAll() {
    return [];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return {};
  }

  @Post()
  create(@Body() author: CreateAuthorDto) {
    return author;
  }
  @Put()
  updateAuthor(@Param('id') id: string, @Body() author: UpdateAuthorDto) {
    return author;
  }
}
