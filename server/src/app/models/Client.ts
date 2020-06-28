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
import File from './File';

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

  @OneToOne(() => File, file => file.owner_id, {
    eager: true,
  })
  @JoinColumn({ name: 'id' })
  avatar: File;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Client;
