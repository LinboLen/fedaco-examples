import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: []
    }).compile();
  });

  describe('getData', async () => {
    const controller = app.get(AppController);
    await controller.addPost();
    await controller.createPostImage();
    const { list } = await controller.getImages();
    expect(list.length).toBeGreaterThan(0);
  });
});

