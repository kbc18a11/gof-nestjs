import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IteratorController } from './iterator/iterator.controller';
import { BookShelfService } from './iterator/book-shelf.service';
import { BookShelfIteratorService } from './iterator/book-shelf-iterator.service';
import { SingletonController } from './singleton/singleton.controller';

@Module({
  imports: [],
  controllers: [AppController, IteratorController, SingletonController],
  providers: [AppService, BookShelfService, BookShelfIteratorService],
})
export class AppModule { }
