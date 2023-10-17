import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { HabitsRecord } from './habits-record.entity';
import { User } from 'src/users/entities/user.entity';
@Entity()
export class Habit {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    type: 'varchar',
    length: 50,
  })
  public cardName: string;

  @Column({
    type: 'varchar',
  })
  public cardImg: string;

  @Column({
    type: 'varchar',
  })
  public description: string;

  @Column({
    type: 'varchar',
  })
  @ManyToOne(() => User, (user) => user.habits)
  public userId: string;

  @Column({
    type: 'varchar',
  })
  @OneToMany(() => HabitsRecord, (habitsRecord) => habitsRecord.habit)
  public habitsRecords: HabitsRecord[];

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
