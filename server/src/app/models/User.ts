import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

import { UF } from '../../utils/UFs';

enum TypeAccount {
  'client',
  'pharmacy',
}

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
  @Exclude()
  password: string;

  @Column()
  avatar: string;

  @Column()
  street: string;

  @Column()
  address_details: string;

  @Column()
  building_number: string;

  @Column({
    type: 'enum',
    enum: UF,
  })
  uf: UF;

  @Column()
  city: string;

  @Column()
  zip_code: string;

  @Column({
    type: 'enum',
    enum: TypeAccount,
  })
  type_account: TypeAccount;

  @Column()
  active_account: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
