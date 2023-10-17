import {
  MinLength,
  IsEmail,
  IsString,
  IsNotEmpty,
  MaxLength,
  IsNumber,
  IsDate,
  IsBoolean,
  IsUUID,
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
  @IsUUID()
  public userId: string;

  public habitsRecords: CreateHabitsRecordDto[];

  @IsDate()
  public createdAt: Date;

  @IsDate()
  public updatedAt: Date;
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
  public complete: boolean;
}
