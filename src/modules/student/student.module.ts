import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../shared/database/database.module';
import { studentProviders } from './providers/student.providers';
import { StudentService } from './services/student.service';

@Module({
  imports: [DatabaseModule],
  providers: [...studentProviders, StudentService],
})
export class StudentModule {}
