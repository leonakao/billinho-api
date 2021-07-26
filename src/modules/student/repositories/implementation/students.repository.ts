import { Inject } from '@nestjs/common';
import { IListRepositoryOptions } from 'src/shared/interfaces';
import { Connection, Repository } from 'typeorm';
import { Student } from '../../entities/student.entity';
import { IStudentsRepository } from '../istudents.repository';

class StudentsRepository implements IStudentsRepository {
  private repository: Repository<Student>;

  constructor(@Inject('DatabaseConnection') connection: Connection) {
    this.repository = connection.getRepository(Student);
  }

  async save(student: Student): Promise<Student> {
    return await this.repository.save(student);
  }

  async list(options: IListRepositoryOptions): Promise<Student[]> {
    const { page, count } = options;

    return await this.repository.find({
      take: count,
      skip: count * (page - 1),
    });
  }

  async findByCpf(cpf: string): Promise<Student> {
    return await this.repository.findOneOrFail({
      cpf,
    });
  }
}

export { StudentsRepository };
