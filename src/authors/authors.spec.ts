import { Test, TestingModule } from '@nestjs/testing';
import { Authors } from './authors';

describe('Authors', () => {
  let provider: Authors;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Authors],
    }).compile();

    provider = module.get<Authors>(Authors);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
