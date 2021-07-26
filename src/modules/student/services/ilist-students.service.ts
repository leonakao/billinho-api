import { Student } from '../entities/student.entity';

interface IListStudentsPaginated {
  page: number;
  items: Student[];
}

interface IListStudentsService {
  execute({ page, count }): Promise<IListStudentsPaginated>;
}

export { IListStudentsService, IListStudentsPaginated };
