import { Bill } from '../entities/bill.entity';

interface IBillRepository {
  save(bill: Bill): Promise<Bill>;
}

export { IBillRepository };
