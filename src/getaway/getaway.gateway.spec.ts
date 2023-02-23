import { Test, TestingModule } from '@nestjs/testing';
import { GetawayGateway } from './getaway.gateway';

describe('GetawayGateway', () => {
  let gateway: GetawayGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetawayGateway],
    }).compile();

    gateway = module.get<GetawayGateway>(GetawayGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
