import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('category')
export class CategoryController {
  @Get()
  findAll() {
    return [];
  }

  @Get()
  findOne(@Param('id') id: string) {
    return {};
  }
  @Post()
  create(@Body() createDto: {}) {
    return {};
  }
  @Patch()
  update(@Body() updateDto: {}, @Param('id') id: string) {
    return {};
  }
}
