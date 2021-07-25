import { Connection, Repository } from 'typeorm';
import { Student } from '../../entities/student.entity';
import { IStudentRepository } from '../istudent-repository';

class StudentRepository implements IStudentRepository {
  private repository: Repository<Student>;

  constructor(connection: Connection) {
    this.repository = connection.getRepository(Student);
  }

  async save(student: Student): Promise<Student> {
    return await this.repository.save(student);
  }
}

export { StudentRepository };
