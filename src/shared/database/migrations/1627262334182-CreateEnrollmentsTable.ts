import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateEnrollmentsTable1627262334182 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'enrollments',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'amount',
            type: 'int',
          },
          {
            name: 'installments',
            type: 'int',
          },
          {
            name: 'due_day',
            type: 'int',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('enrollments');
  }
}
