import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ICreateStudentDTO } from '../dtos/icreate-student-dto';

@Entity()
export class Student {
  constructor(studentData: ICreateStudentDTO) {
    if (studentData) {
      this.id = studentData.id;
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
}
