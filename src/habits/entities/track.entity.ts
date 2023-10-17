import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { HabitsRecord } from './habits-record.entity';
@Entity()
export class Track {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    type: 'varchar',
    length: 50,
  })
  public trackName: string;

  @Column({
    type: 'bit',
  })
  public complete: boolean;
}
