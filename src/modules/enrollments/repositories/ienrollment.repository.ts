import { IListRepositoryOptions } from 'src/shared/interfaces/ilist-repository-options';
import { Enrollment } from '../entities/enrollment.entity';

interface IEnrollmentRepository {
  save(enrollment: Enrollment): Promise<Enrollment>;

  list(options: IListRepositoryOptions): Promise<Enrollment[]>;

  findByStudent(student_id: number): Promise<Enrollment>;
}

export { IEnrollmentRepository };
