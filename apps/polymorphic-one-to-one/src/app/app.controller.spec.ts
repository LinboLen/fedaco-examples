import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { FedacoModule } from '@gradii/nest-fedaco';
import { db } from '@gradii/fedaco';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [],
      imports:[
        FedacoModule.forRoot({
          'default': {
            driver: 'mysql',
            database: 'test',
            username: 'root',
            password: '123456'
          }
        })
      ]
    }).compile();
  });

  afterAll(async ()=>{
    await db().disconnect()
  })

  it('getData', async () => {
    const controller = app.get(AppController);
    await controller.initTable();
    await controller.addPost();
    await controller.createPostImage();
    const { list } = await controller.getImages();
    expect(list.length).toBeGreaterThan(0);
  });
});

