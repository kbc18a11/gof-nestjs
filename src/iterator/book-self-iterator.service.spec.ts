import { Test, TestingModule } from '@nestjs/testing';
import { BookShelfIteratorService } from './book-shelf-iterator.service';

describe('BookSelfIteratorService', () => {
  let service: BookShelfIteratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookShelfIteratorService],
    }).compile();

    service = module.get<BookShelfIteratorService>(BookShelfIteratorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
