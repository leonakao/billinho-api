import { Module } from '@nestjs/common';
import { StudentModule } from '../../modules/student/student.module';
import { EnrollmentModule } from '../../modules/enrollments/enrollment.module';

@Module({
  imports: [StudentModule, EnrollmentModule],
})
export class AppModule {}
