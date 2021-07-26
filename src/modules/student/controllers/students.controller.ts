import { Controller, HttpCode, Post, Body, Inject, Get } from '@nestjs/common';
import { ICreateStudentDTO } from '../dtos/icreate-student-dto';
import { ICreateStudentsService } from '../services/icreate-students.service';
import { IListStudentsService } from '../services/ilist-students.service';

@Controller('students')
export class StudentsController {
  constructor(
    @Inject('CreateStudentsService')
    private createStudentsService: ICreateStudentsService,
    @Inject('ListStudentsService')
    private listStudentsService: IListStudentsService,
  ) {}

  @Get()
  async list() {
    return await this.listStudentsService.execute({
      page: 1,
      count: 3,
    });
  }

  @Post()
  @HttpCode(201)
  async create(@Body() studentData: ICreateStudentDTO) {
    return studentData;

    const student = await this.createStudentsService.execute(studentData);

    return {
      id: student.id,
    };
  }
}
