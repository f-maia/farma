import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  // ManyToOne,
} from 'typeorm';

// import Stock from './Stock';
import User from './User';
import File from './File';

@Entity('pharmacies')
class Pharmacy {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  cnpj: string;

  @OneToOne(() => User, user => user.id, {
    eager: true,
  })
  @JoinColumn({ name: 'id' })
  user: User;

  @OneToOne(() => File, file => file.owner_id, {
    primary: true,
    eager: true,
  })
  @JoinColumn({ name: 'id' })
  avatar: File;

  // @ManyToOne(() => Stock, stock => stock.pharmacy_id)
  // stock: Stock[];

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Pharmacy;
