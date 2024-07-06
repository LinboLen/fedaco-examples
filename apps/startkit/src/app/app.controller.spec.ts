import { FedacoModule } from '@gradii/nest-fedaco';
import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        FedacoModule.forRoot({
          default: {
            driver: 'sqlite',
            database: ':memory:',
          },
        }),
      ],
      controllers: [AppController],
      providers: [],
    }).compile();
  });

  describe('getData', () => {
    it('should can add user', async () => {
      const appController = app.get<AppController>(AppController);
      await appController.initTable();
      await appController.addUser();
      expect((await appController.listUsers()).length).toBeGreaterThan(0);
    });
  });
});
