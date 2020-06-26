import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateStocks1592773891265 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'stocks',
        columns: [
          {
            name: 'product_id',
            type: 'integer',
            isPrimary: true,
          },
          {
            name: 'pharmacy_id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'price',
            type: 'money',
          },
          {
            name: 'quantity',
            type: 'integer',
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
        foreignKeys: [
          {
            name: 'StockProduct',
            referencedTableName: 'products',
            referencedColumnNames: ['id'],
            columnNames: ['product_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'StockPharmacy',
            referencedTableName: 'pharmacies',
            referencedColumnNames: ['id'],
            columnNames: ['pharmacy_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('stocks');
  }
}
