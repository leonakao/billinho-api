import { Student } from '../../student/entities/student.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { ICreateEnrollmentDTO } from '../dtos/icreate-enrollment.dto';
import { Bill } from './bill.entity';

@Entity('enrollments')
export class Enrollment {
  constructor(enrollmentData: ICreateEnrollmentDTO) {
    if (enrollmentData) {
      this.amount = enrollmentData.amount;
      this.installments = enrollmentData.installments;
      this.due_day = enrollmentData.due_day;
      this.student_id = enrollmentData.student_id;
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

  @Column('integer')
  student_id: number;

  @ManyToOne(() => Student, (student) => student.enrollments)
  @JoinColumn({ name: 'student_id' })
  student: Student;

  @OneToMany(() => Bill, (bill) => bill.enrollment)
  bills: Bill[];

  @CreateDateColumn()
  created_at: Date;
}
