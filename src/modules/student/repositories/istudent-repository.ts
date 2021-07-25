import { Student } from '../entities/student.entity';

interface IStudentRepository {
  save(student: Student): Promise<Student>;
}

export { IStudentRepository };
