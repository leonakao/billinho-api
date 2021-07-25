import { Student } from '../entities/student.entity';

interface IStudentsRepository {
  save(student: Student): Promise<Student>;
}

export { IStudentsRepository };
