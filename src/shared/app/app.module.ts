import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from '../../modules/student/student.module';
import { EnrollmentModule } from '../../modules/enrollments/enrollment.module';

@Module({
  imports: [StudentModule, EnrollmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
