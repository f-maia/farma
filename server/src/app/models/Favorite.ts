import {
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('favorites')
class Favorite {
  @PrimaryColumn('uuid')
  client_id: string;

  @PrimaryColumn('uuid')
  pharmacy_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Favorite;
