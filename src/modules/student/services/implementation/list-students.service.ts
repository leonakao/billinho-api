import { Inject } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { IStudentRepository } from '../../repositories/istudent.repository';
import {
  IListStudentsPaginated,
  IListStudentsService,
} from '../ilist-students.service';

@Injectable()
export class ListStudentsService implements IListStudentsService {
  constructor(
    @Inject('StudentRepository')
    private repository: IStudentRepository,
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
