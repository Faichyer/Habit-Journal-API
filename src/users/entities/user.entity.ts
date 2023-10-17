import { Habit } from 'src/habits/entities/habit.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({
    type: 'varchar',
    length: 100,
    unique: true,
  })
  public email: string;

  @Column({
    type: 'varchar',
    length: 16,
    unique: true,
  })
  public username: string;

  @Column({
    type: 'varchar',
    length: 100,
  })
  public password: string;

  @OneToMany(() => Habit, (habit) => habit.userId)
  public habits: Habit[];
}
