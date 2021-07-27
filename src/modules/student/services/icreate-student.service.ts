import { Student } from '../entities/student.entity';

interface ICreateStudentService {
  execute({ name, cpf, birthdate, payment_method }): Promise<Student>;
}

export { ICreateStudentService };
