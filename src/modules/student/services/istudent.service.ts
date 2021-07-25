import { ICreateStudentDTO } from '../dtos/icreate-student-dto';
import { Student } from '../entities/student.entity';

interface IStudentService {
  create({ name, cpf, birthdate, payment_method }): Promise<Student>;
}

export { IStudentService };
