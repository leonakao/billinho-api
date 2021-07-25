import { Repository } from 'typeorm';
import { Student } from '../../entities/student.entity';
import { IStudentRepository } from '../istudent-repository';

class StudentRepository implements IStudentRepository {
  private repository: Repository<Student>;

  async save(student: Student): Promise<void> {
    await this.repository.save(student);
  }
}

export { StudentRepository };
