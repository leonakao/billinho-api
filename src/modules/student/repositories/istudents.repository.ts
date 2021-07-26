import { IListRepositoryOptions } from 'src/shared/interfaces/ilist-repository-options';
import { Student } from '../entities/student.entity';

interface IStudentsRepository {
  save(student: Student): Promise<Student>;

  list(options: IListRepositoryOptions): Promise<Student[]>;

  findByCpf(cpf: string): Promise<Student>;
}

export { IStudentsRepository };
