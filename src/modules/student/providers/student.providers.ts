import { StudentsRepository } from '../repositories/implementation/students-repository';
import { StudentsService } from '../services/implementation/students.service';

export const studentProviders = [
  {
    provide: 'IStudentsRepository',
    useClass: StudentsRepository,
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'IStudentsService',
    useClass: StudentsService,
    inject: ['IStudentsRepository'],
  },
];
