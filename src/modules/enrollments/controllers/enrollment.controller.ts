import { Controller, HttpCode, Post, Body, Inject, Get } from '@nestjs/common';
import { ApiResponse, ApiBody, ApiTags } from '@nestjs/swagger';
import { ICreateEnrollmentDTO } from '../dtos/icreate-enrollment.dto';
import { ICreateEnrollmentService } from '../services/icreate-enrollment.service';
import { IListEnrollmentsService } from '../services/ilist-enrollments.service';

@ApiTags('Enrollments')
@Controller('enrollments')
export class EnrollmentController {
  constructor(
    @Inject('CreateEnrollmentService')
    private createEnrollmentService: ICreateEnrollmentService,
    @Inject('ListEnrollmentsService')
    private listEnrollmentsService: IListEnrollmentsService,
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
    description: 'Returns a list of enrollments',
    status: 200,
  })
  @Get()
  async list(@Body() params) {
    return await this.listEnrollmentsService.execute({
      page: params.page || 1,
      count: params.count || 3,
    });
  }

  @ApiResponse({
    description: 'Returns id of the enrollment registered',
    status: 201,
  })
  @Post()
  @HttpCode(201)
  async create(@Body() enrollmentData: ICreateEnrollmentDTO) {
    const enrollment = await this.createEnrollmentService.execute(
      enrollmentData,
    );

    return {
      id: enrollment.id,
    };
  }
}
