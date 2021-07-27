import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ICreateBillDTO } from '../dtos/icreate-bill.dto';

@Entity('bills')
export class Bill {
  constructor(billData: ICreateBillDTO) {
    if (billData) {
      this.amount = billData.amount;
      this.due_date = billData.due_date;
      this.status = billData.status;
    }
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer')
  amount: number;

  @Column('date')
  due_date: Date;

  @Column()
  status: string;
}
