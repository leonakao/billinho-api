import { Bill } from '../entities/bill.entity';

interface IBillRepository {
  saveMany(bills: Bill[]): Promise<Bill[]>;
}

export { IBillRepository };
