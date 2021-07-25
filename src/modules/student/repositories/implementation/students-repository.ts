import { Inject } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { Student } from '../../entities/student.entity';
import { IStudentsRepository } from '../istudents-repository';

class StudentsRepository implements IStudentsRepository {
  private repository: Repository<Student>;

  constructor(@Inject('DATABASE_CONNECTION') connection: Connection) {
    this.repository = connection.getRepository(Student);
  }

  async save(student: Student): Promise<Student> {
    return await this.repository.save(student);
  }
}

export { StudentsRepository };
