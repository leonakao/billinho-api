import { Controller, HttpCode, Post, Body } from '@nestjs/common';
import { ICreateStudentDTO } from '../dtos/icreate-student-dto';
import { IStudentsService } from '../services/istudents.service';

@Controller('students')
export class StudentsController {
  constructor(private studentsService: IStudentsService) {}

  @Post()
  @HttpCode(201)
  create(@Body() studentData: ICreateStudentDTO) {
    return this.studentsService.create(studentData);
  }
}
