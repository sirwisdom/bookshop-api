import { Module } from '@nestjs/common';
import { AuthorsController } from './authors.controller';
// import { Authors } from './authors';
import { AuthorsService } from './authors.service';

@Module({
  controllers: [AuthorsController],
  providers: [AuthorsService],
})
export class AuthorsModule {}
