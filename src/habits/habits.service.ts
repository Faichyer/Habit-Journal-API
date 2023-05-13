import { Injectable } from '@nestjs/common';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';

@Injectable()
export class HabitsService {
  private habits = [
    {
      id: 1,
      cardName: 'Workout',
      cardImg:
        'https://media.self.com/photos/6398b36c72eb56f726777d06/4:3/w_2560%2Cc_limit/weekly-workout-schedule.jpeg',
      description:
        'Try to go to gym when you can bro, and eat well accordingly to the main objective',
      tracks: [
        { id: 1, trackName: 'Go to Gym', completed: true },
        { id: 2, trackName: 'Sleep early', completed: true },
        { id: 3, trackName: 'Eat well', completed: true },
      ],
    },
    {
      id: 2,
      cardName: 'Habit Journal',
      cardImg:
        'https://cdn.shopify.com/s/files/1/0252/6822/4088/products/01_HabitJournal_Front_0d0aa7bd-ecd0-400a-87e1-51b78415aa8a.jpg?crop=center&v=1674232316&width=1296',
      description:
        'This habit is to code a little bit everyday in order to finish this project ASAP',
      tracks: [
        { id: 1, trackName: 'Code this shit', completed: true },
        {
          id: 2,
          trackName: 'Learn new technologies',
          completed: true,
        },
      ],
    },
    {
      id: 3,
      cardName: 'Grateful',
      cardImg:
        'https://www.myglobalviewpoint.com/wp-content/uploads/2023/01/Things-to-Be-Grateful-For-Featured-Image.jpg',
      description:
        'Be grateful to the persons that helped you during your life bro',
      tracks: [
        {
          id: 1,
          trackName: 'Thank one person a day',
          completed: true,
        },
        {
          id: 2,
          trackName: 'Stop this Cat120 stuff',
          completed: true,
        },
        {
          id: 3,
          trackName: 'Sleep early everyday',
          completed: true,
        },
      ],
    },
  ];

  getHabits() {
    return this.habits;
  }

  getOneHabit(id: number) {
    const habit = this.habits.find((habit) => habit.id === id);

    if (!habit) throw new Error('Habit not found');
    return habit;
  }

  createHabit(createHabitDto: CreateHabitDto) {
    const newHabit = {
      id: this.habits.reduce((a, b) => Math.max(a, b.id), -Infinity) + 1,
      ...createHabitDto,
    };
    this.habits.push(newHabit);
    return newHabit;
  }

  updateHabit(id: number, updateHabitDto: UpdateHabitDto) {
    this.habits = this.habits.map((habit) => {
      if (habit.id === id) return { ...habit, ...updateHabitDto };
      return habit;
    });
    return this.getOneHabit(id);
  }

  deleteHabit(id: number) {
    const habitToDelete = this.getOneHabit(id);

    this.habits = this.habits.filter((habit) => habit.id !== id);

    return habitToDelete;
  }
}
