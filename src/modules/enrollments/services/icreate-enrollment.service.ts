import { Enrollment } from '../entities/enrollment.entity';

interface ICreateEnrollmentService {
  execute({ amount, installments, due_day }): Promise<Enrollment>;
}

export { ICreateEnrollmentService };
