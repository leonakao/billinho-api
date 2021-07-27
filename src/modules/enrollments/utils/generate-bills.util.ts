import { Bill } from '../entities/bill.entity';
import { BillStatusTypes } from '../enums/bill-status-types.enum';
import { BillFactory } from '../factories/bill.factory';
import { GenerateBillDate } from './generate-bill-date.util';

export function GenerateBills({
  number: amount,
  number: installments,
  number: due_day,
}): Bill[] {
  const amountByInstallment = amount / installments;

  const bills = [];

  for (
    let currentInstallment = 1;
    currentInstallment <= installments;
    currentInstallment++
  ) {
    bills.push(
      BillFactory.create({
        amount: amountByInstallment,
        due_date: GenerateBillDate(due_day, currentInstallment),
        status: BillStatusTypes.Open,
      }),
    );
  }

  return bills;
}
