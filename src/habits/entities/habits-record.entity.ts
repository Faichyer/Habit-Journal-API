import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Track } from './track.entity';
import { Habit } from './habit.entity';

@Entity()
export class HabitsRecord {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    type: 'datetime',
  })
  public date: Date;

  public tracks: Track[];

  @ManyToOne(() => Habit, (habit) => habit.habitsRecords)
  public habit: Habit;
}
