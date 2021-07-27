import { Inject } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { IEnrollmentRepository } from '../../repositories/ienrollment.repository';
import {
  IListEnrollmentsPaginated,
  IListEnrollmentsService,
} from '../ilist-enrollments.service';

@Injectable()
export class ListEnrollmentsService implements IListEnrollmentsService {
  constructor(
    @Inject('EnrollmentRepository')
    private repository: IEnrollmentRepository,
  ) {}

  async execute({ page, count }): Promise<IListEnrollmentsPaginated> {
    const items = await this.repository.list({
      page,
      count,
    });

    return {
      page,
      items,
    };
  }
}
