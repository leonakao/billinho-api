import { ICreateEnrollmentDTO } from '../dtos/icreate-enrollment.dto';
import { Enrollment } from '../entities/enrollment.entity';

interface ICreateEnrollmentService {
  execute(enrollmentData: ICreateEnrollmentDTO): Promise<Enrollment>;
}

export { ICreateEnrollmentService };
