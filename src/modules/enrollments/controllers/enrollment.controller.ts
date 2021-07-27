import { Controller, HttpCode, Post, Body, Inject, Get } from '@nestjs/common';
import { ICreateEnrollmentDTO } from '../dtos/icreate-enrollment.dto';
import { ICreateEnrollmentService } from '../services/icreate-enrollment.service';
import { IListEnrollmentsService } from '../services/ilist-enrollments.service';

@Controller('enrollments')
export class EnrollmentController {
  constructor(
    @Inject('CreateEnrollmentService')
    private createEnrollmentService: ICreateEnrollmentService,
    @Inject('ListEnrollmentsService')
    private listEnrollmentsService: IListEnrollmentsService,
  ) {}

  @Get()
  async list() {
    return await this.listEnrollmentsService.execute({
      page: 1,
      count: 3,
    });
  }

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
