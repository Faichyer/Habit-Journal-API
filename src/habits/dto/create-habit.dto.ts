export class CreateHabitDto {
  id: number;
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
