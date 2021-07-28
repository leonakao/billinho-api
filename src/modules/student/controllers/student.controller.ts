import { Controller, HttpCode, Post, Body, Inject, Get } from '@nestjs/common';
import { ApiResponse, ApiBody, ApiTags } from '@nestjs/swagger';
import { ICreateStudentDTO } from '../dtos/icreate-student-dto';
import { ICreateStudentService } from '../services/icreate-student.service';
import { IListStudentsService } from '../services/ilist-students.service';

@ApiTags('Students')
@Controller('students')
export class StudentController {
  constructor(
    @Inject('CreateStudentService')
    private createStudentService: ICreateStudentService,
    @Inject('ListStudentsService')
    private listStudentsService: IListStudentsService,
  ) {}

  @ApiBody({
    schema: {
      properties: {
        page: {
          type: 'number',
          required: ['false'],
          description: 'Current Page',
          default: 1,
        },
        count: {
          type: 'number',
          required: ['false'],
          description: 'Items per page',
          default: 3,
        },
      },
    },
  })
  @ApiResponse({
    description: 'Returns a list of students',
    status: 200,
  })
  @Get()
  async list(@Body() params) {
    return await this.listStudentsService.execute({
      page: params.page || 1,
      count: params.count || 3,
    });
  }

  @ApiResponse({
    description: 'Returns id of the student registered',
    status: 201,
  })
  @Post()
  @HttpCode(201)
  async create(@Body() studentData: ICreateStudentDTO) {
    const student = await this.createStudentService.execute(studentData);

    return {
      id: student.id,
    };
  }
}
