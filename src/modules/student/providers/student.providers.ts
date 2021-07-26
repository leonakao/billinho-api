import { StudentsRepository } from '../repositories/implementation/students-repository';
import { CreateStudentsService } from '../services/implementation/create-students.service';

export const studentProviders = [
  {
    provide: 'StudentsRepository',
    useClass: StudentsRepository,
    inject: ['DatabaseConnection'],
  },
  {
    provide: 'CreateStudentsService',
    useClass: CreateStudentsService,
    inject: ['StudentsRepository'],
  },
];
