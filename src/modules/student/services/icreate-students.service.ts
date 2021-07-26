import { Student } from '../entities/student.entity';

interface ICreateStudentsService {
  create({ name, cpf, birthdate, payment_method }): Promise<Student>;
}

export { ICreateStudentsService };
