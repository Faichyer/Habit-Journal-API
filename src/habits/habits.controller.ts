import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  ValidationPipe,
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
  getSingleHabit(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.habitsService.getOneHabit(id);
    } catch (err) {
      throw new NotFoundException();
    }
  }

  @Post()
  createHabit(@Body(new ValidationPipe()) createHabitDto: CreateHabitDto) {
    return this.habitsService.createHabit(createHabitDto);
  }

  @Put(':id')
  updateHabit(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateHabitDto: UpdateHabitDto,
  ) {
    return this.habitsService.updateHabit(id, updateHabitDto);
  }

  @Delete(':id')
  deleteHabit(@Param('id', ParseIntPipe) id: number) {
    return this.habitsService.deleteHabit(id);
  }
}
