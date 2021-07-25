import { Student } from '../entities/student.entity';

interface IStudentRepository {
  save(student: Student): Promise<void>;
}

export { IStudentRepository };
