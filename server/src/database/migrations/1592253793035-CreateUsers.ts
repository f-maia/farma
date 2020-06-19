import { MigrationInterface, QueryRunner, Table } from 'typeorm';

import { uf } from '../../utils/UFs';
import { typeAccount } from '../../utils/TypeAccounts';

export default class CreateUsers1592253793035 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'tel',
            type: 'varchar',
          },
          {
            name: 'password',
            type: 'varchar',
          },
          {
            name: 'avatar',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'street',
            type: 'varchar',
          },
          {
            name: 'address_details',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'building_number',
            type: 'varchar',
          },
          {
            name: 'uf',
            type: 'varchar',
            enum: uf,
          },
          {
            name: 'city',
            type: 'varchar',
          },
          {
            name: 'zip_code',
            type: 'varchar',
          },
          {
            name: 'type_account',
            type: 'varchar',
            enum: typeAccount,
            default: "'client'",
          },
          {
            name: 'active_account',
            type: 'boolean',
            default: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
