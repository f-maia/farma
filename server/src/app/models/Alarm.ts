import {
  Entity,
  Column,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('alarms')
class Alarm {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn('uuid')
  user_id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Alarm;
