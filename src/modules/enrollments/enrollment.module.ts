import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../shared/database/database.module';
import { Student } from '../student/entities/student.entity';
import { EnrollmentController } from './controllers/enrollment.controller';
import { Enrollment } from './entities/enrollment.entity';
import { enrollmentProviders } from './providers/enrollment.providers';

@Module({
  imports: [DatabaseModule, Student],
  providers: [...enrollmentProviders],
  controllers: [EnrollmentController],
  exports: [Enrollment],
})
export class EnrollmentModule {}
