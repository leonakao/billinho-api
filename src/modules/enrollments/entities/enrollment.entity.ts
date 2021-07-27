import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ICreateEnrollmentDTO } from '../dtos/icreate-enrollment.dto';

@Entity('enrollments')
export class Enrollment {
  constructor(enrollmentData: ICreateEnrollmentDTO) {
    if (enrollmentData) {
      this.amount = enrollmentData.amount;
      this.installments = enrollmentData.installments;
      this.due_day = enrollmentData.due_day;
    }
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer')
  amount: number;

  @Column('integer')
  installments: number;

  @Column('integer')
  due_day: number;
}
