import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../shared/database/database.module';
import { StudentController } from './controllers/student.controller';
import { studentProviders } from './providers/student.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...studentProviders],
  controllers: [StudentController],
})
export class StudentModule {}
