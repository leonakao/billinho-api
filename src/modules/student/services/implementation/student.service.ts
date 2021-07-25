import { Injectable, Inject } from '@nestjs/common';
import { ICreateStudentDTO } from '../../dtos/icreate-student-dto';
import { Student } from '../../entities/student.entity';
import { StudentFactory } from '../../factories/student-factory';
import { IStudentRepository } from '../../repositories/istudent-repository';
import { IStudentService } from '../istudent.service';

@Injectable()
export class StudentService implements IStudentService {
  constructor(private repository: IStudentRepository) {}

  async create({ name, cpf, birthdate, payment_method }): Promise<Student> {
    const studentData = {
      name,
      cpf,
      birthdate,
      payment_method,
    } as ICreateStudentDTO;

    const student = StudentFactory.create(studentData);

    return await this.repository.save(student);
  }
}
