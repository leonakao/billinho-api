import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../shared/database/database.module';
import { StudentsController } from './controllers/students.controller';
import { studentProviders } from './providers/student.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...studentProviders],
  controllers: [StudentsController],
})
export class StudentModule {}
