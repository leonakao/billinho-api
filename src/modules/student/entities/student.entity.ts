import { Enrollment } from '../../enrollments/entities/enrollment.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import { ICreateStudentDTO } from '../dtos/icreate-student-dto';

@Entity('students')
export class Student {
  constructor(studentData: ICreateStudentDTO) {
    if (studentData) {
      this.name = studentData.name;
      this.cpf = studentData.cpf;
      this.birthdate = studentData.birthdate;
      this.payment_method = studentData.payment_method;
    }
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  cpf: string;

  @Column('date')
  birthdate: Date;

  @Column()
  payment_method: string;

  @OneToMany(() => Enrollment, (enrollment) => enrollment.student)
  enrollments: Enrollment[];

  @CreateDateColumn()
  created_at: Date;
}
