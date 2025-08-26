import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Modules
import { TaskModule } from './task/task.module';

// ORM
import { TypeOrmModule } from '@nestjs/typeorm';

// entities
import { Task } from './task/entities/task.entity';

@Module({
  imports: [
    TaskModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'kan-ban-database.sqlite',
      entities: [Task],
      synchronize: true,
      logging: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
