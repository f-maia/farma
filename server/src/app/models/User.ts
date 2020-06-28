import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  // OneToOne,
  // JoinColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

import { UF } from '../../utils/UFs';

// import File from './File';
// import Client from './Client';
// import Pharmacy from './Pharmacy';

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

  // @OneToOne(() => File, file => file.owner_id, {
  //   eager: true,
  // })
  // @JoinColumn({ name: 'id' })
  // avatar: File;

  // @OneToOne(() => Client, client => client.user)
  // @JoinColumn({ name: 'id' })
  // client?: Client;

  // @OneToOne(() => Pharmacy, pharmacy => pharmacy.user)
  // @JoinColumn({ name: 'id' })
  // pharmacy?: Pharmacy;

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
