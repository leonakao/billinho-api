import { Enrollment } from '../entities/enrollment.entity';

interface ICreateEnrollmentService {
  execute({ amount, installments, due_day, student_id }): Promise<Enrollment>;
}

export { ICreateEnrollmentService };
