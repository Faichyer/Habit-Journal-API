import { MinLength } from 'class-validator';

export class CreateHabitDto {
  id: number;
  @MinLength(3)
  cardName: string;
  cardImg: string;
  description: string;
  tracks: CreateTrackDto[];
}

export class CreateTrackDto {
  id: number;
  trackName: string;
  completed: boolean;
}
