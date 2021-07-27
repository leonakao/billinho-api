import { ICreateBillDTO } from '../dtos/icreate-bill.dto';
import { Bill } from '../entities/bill.entity';

class BillFactory {
  static create(billData: ICreateBillDTO): Bill {
    return new Bill(billData);
  }
}

export { BillFactory };
