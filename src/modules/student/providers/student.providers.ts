import { StudentsRepository } from '../repositories/implementation/students.repository';
import { CpfUnique, CpfValid } from '../rules';
import { CreateStudentsService } from '../services/implementation/create-students.service';
import { ListStudentsService } from '../services/implementation/list-students.service';

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
  {
    provide: 'ListStudentsService',
    useClass: ListStudentsService,
    inject: ['StudentsRepository'],
  },
  CpfUnique,
  CpfValid,
];
