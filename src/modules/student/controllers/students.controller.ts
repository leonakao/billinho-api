import { Controller, HttpCode, Post, Body, Inject } from '@nestjs/common';
import { ICreateStudentDTO } from '../dtos/icreate-student-dto';
import { IStudentsService } from '../services/istudents.service';

@Controller('students')
export class StudentsController {
  constructor(
    @Inject('IStudentsService') private studentsService: IStudentsService,
  ) {}

  @Post()
  @HttpCode(201)
  async create(@Body() studentData: ICreateStudentDTO) {
    const student = await this.studentsService.create(studentData);

    return {
      id: student.id,
    };
  }
}
