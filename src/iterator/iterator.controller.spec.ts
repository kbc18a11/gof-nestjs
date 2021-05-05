import { Test, TestingModule } from '@nestjs/testing';
import { IteratorController } from './iterator.controller';

describe('IteratorController', () => {
  let controller: IteratorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IteratorController],
    }).compile();

    controller = module.get<IteratorController>(IteratorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
