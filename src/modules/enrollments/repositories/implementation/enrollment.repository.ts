import { Inject } from '@nestjs/common';
import { IListRepositoryOptions } from 'src/shared/interfaces';
import { Connection, Repository } from 'typeorm';
import { Enrollment } from '../../entities/enrollment.entity';
import { IEnrollmentRepository } from '../ienrollment.repository';

class EnrollmentRepository implements IEnrollmentRepository {
  private repository: Repository<Enrollment>;

  constructor(@Inject('DatabaseConnection') connection: Connection) {
    this.repository = connection.getRepository(Enrollment);
  }

  async save(enrollment: Enrollment): Promise<Enrollment> {
    return await this.repository.save(enrollment);
  }

  async list(options: IListRepositoryOptions): Promise<Enrollment[]> {
    const { page, count } = options;

    return await this.repository.find({
      take: count,
      skip: count * (page - 1),
      relations: ['bills'],
    });
  }

  async findByStudent(student_id: number): Promise<Enrollment> {
    return await this.repository.findOneOrFail({
      student_id,
    });
  }
}

export { EnrollmentRepository };
