import { Student } from '../entities/student.entity';

interface ICreateStudentsService {
  execute({ name, cpf, birthdate, payment_method }): Promise<Student>;
}

export { ICreateStudentsService };
