import { ICreateStudentDTO } from '../dtos/icreate-student-dto';
import { Student } from '../entities/student.entity';

class StudentFactory {
  static create(studentData: ICreateStudentDTO): Student {
    return new Student(studentData);
  }
}

export { StudentFactory };
