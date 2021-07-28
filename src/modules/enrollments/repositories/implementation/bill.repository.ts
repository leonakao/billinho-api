import { Inject } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { Bill } from '../../entities/bill.entity';
import { IBillRepository } from '../ibill.repository';

class BillRepository implements IBillRepository {
  private repository: Repository<Bill>;

  constructor(@Inject('DatabaseConnection') connection: Connection) {
    this.repository = connection.getRepository(Bill);
  }

  async saveMany(bills: Bill[]): Promise<Bill[]> {
    return await this.repository.save(bills);
  }
}

export { BillRepository };
