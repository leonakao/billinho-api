import { StudentRepository } from '../repositories/implementation/student-repository';
import { StudentService } from '../services/implementation/student.service';

export const studentProviders = [
  {
    provide: 'IStudentRepository',
    useClass: StudentRepository,
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'IStudentService',
    useClass: StudentService,
    inject: ['IStudentRepository'],
  },
];
