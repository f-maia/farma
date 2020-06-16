import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { UF } from '../../utils/UFs';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  tel: string;

  @Column()
  password: string;

  @Column()
  avatar: string;

  @Column()
  street: string;

  @Column()
  address_details: string;

  @Column()
  building_number: string;

  @Column('enum')
  uf: UF;

  @Column()
  city: string;

  @Column()
  zip_code: string;

  @Column()
  active_account: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
