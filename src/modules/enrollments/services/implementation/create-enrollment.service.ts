import { Inject } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { ICreateEnrollmentDTO } from '../../dtos/icreate-enrollment.dto';
import { Enrollment } from '../../entities/enrollment.entity';
import { EnrollmentFactory } from '../../factories/enrollment.factory';
import { IEnrollmentRepository } from '../../repositories/ienrollment.repository';
import { ICreateEnrollmentService } from '../icreate-enrollment.service';

@Injectable()
export class CreateEnrollmentService implements ICreateEnrollmentService {
  constructor(
    @Inject('EnrollmentRepository')
    private repository: IEnrollmentRepository,
  ) {}

  async execute({ amount, installments, due_day }): Promise<Enrollment> {
    const enrollmentData = {
      amount,
      installments,
      due_day,
    } as ICreateEnrollmentDTO;

    const enrollment = EnrollmentFactory.create(enrollmentData);

    return await this.repository.save(enrollment);
  }
}
