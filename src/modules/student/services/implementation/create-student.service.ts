import { Inject } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { ICreateStudentDTO } from '../../dtos/icreate-student-dto';
import { Student } from '../../entities/student.entity';
import { StudentFactory } from '../../factories/student.factory';
import { IStudentRepository } from '../../repositories/istudent.repository';
import { ICreateStudentService } from '../icreate-student.service';

@Injectable()
export class CreateStudentService implements ICreateStudentService {
  constructor(
    @Inject('StudentRepository')
    private repository: IStudentRepository,
  ) {}

  async execute({ name, cpf, birthdate, payment_method }): Promise<Student> {
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
