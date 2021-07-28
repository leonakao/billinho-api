import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateBillsTable1627262401064 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'bills',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'enrollment_id',
            type: 'int',
          },
          {
            name: 'amount',
            type: 'int',
          },
          {
            name: 'due_date',
            type: 'date',
          },
          {
            name: 'status',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'Enrollment',
            referencedTableName: 'enrollments',
            referencedColumnNames: ['id'],
            columnNames: ['enrollment_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('bills');
  }
}
