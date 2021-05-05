import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IteratorController } from './iterator/iterator.controller';
import { BookShelfService } from './iterator/book-shelf.service';
import { BookShelfIteratorService } from './iterator/book-shelf-iterator.service';

@Module({
  imports: [],
  controllers: [AppController, IteratorController],
  providers: [AppService, BookShelfService, BookShelfIteratorService],
})
export class AppModule { }
