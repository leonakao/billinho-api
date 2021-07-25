import { Student } from '../entities/student.entity';

interface IStudentsService {
  create({ name, cpf, birthdate, payment_method }): Promise<Student>;
}

export { IStudentsService };
