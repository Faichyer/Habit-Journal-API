import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { HabitsService } from './habits.service';

@Controller('habits')
export class HabitsController {
  constructor(private readonly habitsService: HabitsService) {}

  @Get()
  getHabits(@Query('type') type: string) {
    return this.habitsService.getHabits();
  }

  @Get(':id')
  getSingleHabit(@Param('id') id: string) {
    return this.habitsService.getOneHabit(Number(id));
  }

  @Post()
  createHabit(@Body() createHabitDto: CreateHabitDto) {
    return this.habitsService.createHabit(createHabitDto);
  }

  @Put(':id')
  updateHabit(@Param('id') id: string, @Body() updateHabitDto: UpdateHabitDto) {
    return this.habitsService.updateHabit(Number(id), updateHabitDto);
  }

  @Delete(':id')
  deleteHabit(@Param('id') id: string) {
    return this.habitsService.deleteHabit(Number(id));
  }
}
