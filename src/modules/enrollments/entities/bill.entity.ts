import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ICreateBillDTO } from '../dtos/icreate-bill.dto';
import { Enrollment } from './enrollment.entity';

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

  @Column('integer')
  enrollment_id: number;

  @ManyToOne(() => Enrollment, (enrollment) => enrollment.bills)
  enrollment: Enrollment;
}
