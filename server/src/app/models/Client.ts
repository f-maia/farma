import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import User from './User';

@Entity('clients')
class Client {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  cpf: string;

  @OneToOne(() => User, {
    eager: true,
  })
  @JoinColumn({ name: 'id' })
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Client;
