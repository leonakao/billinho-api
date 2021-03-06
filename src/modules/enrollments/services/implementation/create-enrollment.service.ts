import { Inject } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { Enrollment } from '../../entities/enrollment.entity';
import { EnrollmentFactory } from '../../factories/enrollment.factory';
import { IBillRepository } from '../../repositories/ibill.repository';
import { IEnrollmentRepository } from '../../repositories/ienrollment.repository';
import { GenerateBills } from '../../utils/generate-bills.util';
import { ICreateEnrollmentService } from '../icreate-enrollment.service';

@Injectable()
export class CreateEnrollmentService implements ICreateEnrollmentService {
  constructor(
    @Inject('EnrollmentRepository')
    private enrollmentRepository: IEnrollmentRepository,
    @Inject('BillRepository')
    private billRepository: IBillRepository,
  ) {}

  async execute({
    amount,
    installments,
    due_day,
    student_id,
  }): Promise<Enrollment> {
    const enrollmentShell = EnrollmentFactory.create({
      amount,
      installments,
      due_day,
      student_id,
    });

    const enrollment = await this.enrollmentRepository.save(enrollmentShell);

    enrollment.bills = GenerateBills(
      enrollment.amount,
      enrollment.installments,
      enrollment.due_day,
      enrollment.id,
    );

    await this.billRepository.saveMany(enrollment.bills);

    return enrollment;
  }
}
