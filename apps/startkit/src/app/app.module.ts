import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { FedacoModule } from '@gradii/nest-fedaco';

@Module({
  imports: [
    FedacoModule.forRoot({
      'default': {
        driver: 'sqlite',
        database: ':memory:'
      }
    })
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
