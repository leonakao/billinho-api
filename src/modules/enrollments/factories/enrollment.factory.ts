import { ICreateEnrollmentDTO } from '../dtos/icreate-enrollment.dto';
import { Enrollment } from '../entities/enrollment.entity';

class EnrollmentFactory {
  static create(enrollmentData: ICreateEnrollmentDTO): Enrollment {
    return new Enrollment(enrollmentData);
  }
}

export { EnrollmentFactory };
