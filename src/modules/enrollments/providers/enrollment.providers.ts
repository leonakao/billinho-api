import { EnrollmentRepository } from '../repositories/implementation/enrollment.repository';
import { CreateEnrollmentService } from '../services/implementation/create-enrollment.service';
import { ListEnrollmentsService } from '../services/implementation/list-enrollments.service';

export const enrollmentProviders = [
  {
    provide: 'EnrollmentRepository',
    useClass: EnrollmentRepository,
    inject: ['DatabaseConnection'],
  },
  {
    provide: 'CreateEnrollmentService',
    useClass: CreateEnrollmentService,
    inject: ['EnrollmentRepository'],
  },
  {
    provide: 'ListEnrollmentsService',
    useClass: ListEnrollmentsService,
    inject: ['EnrollmentRepository'],
  },
];
