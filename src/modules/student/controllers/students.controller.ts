import { Controller, HttpCode, Post, Body, Inject } from '@nestjs/common';
import { ICreateStudentDTO } from '../dtos/icreate-student-dto';
import { ICreateStudentsService } from '../services/icreate-students.service';

@Controller('students')
export class StudentsController {
  constructor(
    @Inject('CreateStudentsService')
    private createStudentsService: ICreateStudentsService,
  ) {}

  @Post()
  @HttpCode(201)
  async create(@Body() studentData: ICreateStudentDTO) {
    const student = await this.createStudentsService.execute(studentData);

    return {
      id: student.id,
    };
  }
}
