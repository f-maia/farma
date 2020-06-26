import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import Product from './Product';

@Entity('stocks')
class Stock {
  @PrimaryColumn('integer')
  product_id: number;

  @PrimaryColumn('uuid')
  pharmacy_id: string;

  @Column('money')
  price: number;

  @Column('integer')
  quantity: number;

  @OneToOne(() => Product, {
    eager: true,
  })
  @JoinColumn({ name: 'product_id' })
  product_info: Product;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Stock;
