import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorsModule } from './authors/authors.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [AuthorsModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
