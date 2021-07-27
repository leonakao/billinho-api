import { Enrollment } from '../entities/enrollment.entity';

interface IListEnrollmentsPaginated {
  page: number;
  items: Enrollment[];
}

interface IListEnrollmentsService {
  execute({ page, count }): Promise<IListEnrollmentsPaginated>;
}

export { IListEnrollmentsService, IListEnrollmentsPaginated };
