import { Inject } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { IEnrollmentRepository } from '../repositories/ienrollment.repository';

@ValidatorConstraint({ name: 'EnrollmentUnique', async: true })
@Injectable()
export class StudentUnique implements ValidatorConstraintInterface {
  constructor(
    @Inject('EnrollmentRepository')
    private repository: IEnrollmentRepository,
  ) {}

  async validate(student_id: number) {
    try {
      await this.repository.findByStudent(student_id);
    } catch (e) {
      return true;
    }

    return false;
  }

  defaultMessage() {
    return `Already exists a enrollment for this student`;
  }
}
