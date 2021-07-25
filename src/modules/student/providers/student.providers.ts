import { StudentsRepository } from '../repositories/implementation/students-repository';
import { StudentsService } from '../services/implementation/students.service';

export const studentProviders = [
  {
    provide: 'StudentsRepository',
    useClass: StudentsRepository,
    inject: ['DatabaseConnection'],
  },
  {
    provide: 'StudentsService',
    useClass: StudentsService,
    inject: ['StudentsRepository'],
  },
];
