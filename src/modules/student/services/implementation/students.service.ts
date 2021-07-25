import { Inject } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { ICreateStudentDTO } from '../../dtos/icreate-student-dto';
import { Student } from '../../entities/student.entity';
import { StudentFactory } from '../../factories/student-factory';
import { IStudentsRepository } from '../../repositories/istudents-repository';
import { IStudentsService } from '../istudents.service';

@Injectable()
export class StudentsService implements IStudentsService {
  constructor(
    @Inject('StudentsRepository')
    private repository: IStudentsRepository,
  ) {}

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
