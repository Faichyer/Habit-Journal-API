import {
  MinLength,
  IsEmail,
  IsString,
  IsNotEmpty,
  MaxLength,
  IsNumber,
  IsDate,
  IsBoolean,
} from 'class-validator';
export class CreateHabitDto {
  public id: number;

  @MinLength(3)
  @IsString()
  public cardName: string;

  @IsString()
  public cardImg: string;

  @IsString()
  public description: string;

  @IsNumber()
  public userId: number;

  public habitsRecords: CreateHabitsRecordDto[];
}

export class CreateHabitsRecordDto {
  public id: number;

  @IsDate()
  public date: Date;

  public tracks: CreateTrackDto[];
}

export class CreateTrackDto {
  public id: number;

  @IsString()
  public trackName: string;

  @IsBoolean()
  public completed: boolean;
}
