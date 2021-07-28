import { StudentRepository } from '../repositories/implementation/student.repository';
import { CreateStudentService } from '../services/implementation/create-student.service';
import { ListStudentsService } from '../services/implementation/list-students.service';

export const studentProviders = [
  {
    provide: 'StudentRepository',
    useClass: StudentRepository,
    inject: ['DatabaseConnection'],
  },
  {
    provide: 'CreateStudentService',
    useClass: CreateStudentService,
    inject: ['StudentRepository'],
  },
  {
    provide: 'ListStudentsService',
    useClass: ListStudentsService,
    inject: ['StudentRepository'],
  },
];
