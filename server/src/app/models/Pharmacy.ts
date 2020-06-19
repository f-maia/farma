import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import User from './User';

@Entity('pharmacies')
class Pharmacy {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  cnpj: string;

  @OneToOne(() => User, {
    eager: true,
  })
  @JoinColumn({ name: 'id' })
  user: User;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Pharmacy;
