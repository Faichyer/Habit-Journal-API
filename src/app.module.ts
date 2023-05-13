import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HabitsModule } from './habits/habits.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [HabitsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
