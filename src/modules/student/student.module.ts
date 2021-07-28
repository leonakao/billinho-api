import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../shared/database/database.module';
import { Enrollment } from '../enrollments/entities/enrollment.entity';
import { StudentController } from './controllers/student.controller';
import { Student } from './entities/student.entity';
import { studentProviders } from './providers/student.providers';

@Module({
  imports: [DatabaseModule, Enrollment],
  providers: [...studentProviders],
  controllers: [StudentController],
  exports: [Student],
})
export class StudentModule {}
