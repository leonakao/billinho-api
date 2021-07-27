import { Controller, HttpCode, Post, Body, Inject, Get } from '@nestjs/common';
import { ICreateStudentDTO } from '../dtos/icreate-student-dto';
import { ICreateStudentService } from '../services/icreate-student.service';
import { IListStudentsService } from '../services/ilist-students.service';

@Controller('students')
export class StudentController {
  constructor(
    @Inject('CreateStudentService')
    private createStudentService: ICreateStudentService,
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
    const student = await this.createStudentService.execute(studentData);

    return {
      id: student.id,
    };
  }
}
