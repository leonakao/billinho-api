import { Inject } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { IStudentsRepository } from '../../repositories/istudents-repository';
import {
  IListStudentsPaginated,
  IListStudentsService,
} from '../ilist-students.service';

@Injectable()
export class ListStudentsService implements IListStudentsService {
  constructor(
    @Inject('StudentsRepository')
    private repository: IStudentsRepository,
  ) {}

  async execute({ page, count }): Promise<IListStudentsPaginated> {
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
